import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import axios from "axios";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let razorpayInstance: Razorpay | null = null;

function getRazorpay() {
  if (!razorpayInstance) {
    const key_id = process.env.VITE_RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!key_id || !key_secret) {
      throw new Error("Razorpay credentials (VITE_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET) are required.");
    }
    
    razorpayInstance = new Razorpay({
      key_id,
      key_secret,
    });
  }
  return razorpayInstance;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  let nimbusToken: string | null = null;

  // Helper to get NimbusPost Token
  async function getNimbusToken() {
    if (nimbusToken) return nimbusToken;

    const email = process.env.NIMBUSPOST_EMAIL;
    const password = process.env.NIMBUSPOST_PASSWORD;

    if (!email || !password) {
      throw new Error("NimbusPost credentials missing in .env");
    }

    try {
      const response = await axios.post("https://api.nimbuspost.com/v1/users/login", {
        email,
        password,
      });

      if (response.data.status) {
        nimbusToken = response.data.data;
        return nimbusToken;
      }
      
      const msg = response.data.message || "Invalid credentials or NimbusPost API error";
      if (msg.toLowerCase().includes("invalid email or password")) {
        throw new Error("NimbusPost Login Failed: Please verify your Email and Password in the settings. Note: Some accounts require an API Key specifically generated in the NimbusPost settings panel.");
      }
      throw new Error(msg);
    } catch (error: any) {
      console.error("NimbusPost Auth Error:", error);
      throw error;
    }
  }

  // API Route: Tracking
  app.get("/api/nimbus/track/:awb", async (req, res) => {
    try {
      const token = await getNimbusToken();
      const response = await axios.get(`https://api.nimbuspost.com/v1/tracking/track/${req.params.awb}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      res.json(response.data);
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  });

  // API Route: Serviceability Check
  app.post("/api/nimbus/serviceability", async (req, res) => {
    try {
      const token = await getNimbusToken();
      const { origin_pincode, destination_pincode, weight } = req.body;

      const response = await axios.post("https://api.nimbuspost.com/v1/courier/serviceability", {
        origin_pincode,
        destination_pincode,
        weight,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      res.json(response.data);
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  });

  // Razorpay API: Create Order
  app.post("/api/razorpay/order", async (req, res) => {
    try {
      const { amount, currency = "INR", receipt } = req.body;
      const options = {
        amount: Math.round(amount * 100), // Razorpay expects amount in paise
        currency,
        receipt,
      };
      const rzp = getRazorpay();
      const order = await rzp.orders.create(options);
      res.json({ status: true, order });
    } catch (error: any) {
      console.error("Razorpay Order Error:", error);
      res.status(500).json({ status: false, message: error.message });
    }
  });

  // Razorpay API: Verify Payment
  app.post("/api/razorpay/verify", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
        .update(sign.toString())
        .digest("hex");

      if (razorpay_signature === expectedSign) {
        res.json({ status: true, message: "Payment verified successfully" });
      } else {
        res.status(400).json({ status: false, message: "Invalid signature" });
      }
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
