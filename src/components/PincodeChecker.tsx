import React, { useState } from "react";
import { Truck, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CourierCompany {
  etd?: string;
}

interface ServiceabilityResult {
  available_courier_companies?: CourierCompany[];
}

export default function PincodeChecker() {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<ServiceabilityResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkServiceability = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // For demo purposes, we'll try to call our proxy API
      // In a real scenario, origin_pincode should be your warehouse pincode (Indore: 452001)
      const response = await fetch("/api/nimbus/serviceability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origin_pincode: "452001",
          destination_pincode: pincode,
          weight: "0.5", // default weight for one item
        }),
      });

      const data = await response.json();

      if (data.status) {
        setResult(data.data);
      } else {
        setError(data.message || "We currently do not deliver to this pincode.");
      }
    } catch (err) {
      // Fallback/Error message
      setError("Unable to check serviceability at this moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Truck size={18} className="text-primary" />
        <span className="font-manrope text-[10px] font-bold uppercase tracking-widest text-on-surface">Check Delivery Serviceability</span>
      </div>

      <form onSubmit={checkServiceability} className="flex gap-2">
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={14} />
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter Pincode"
            className="w-full bg-surface py-3 pl-10 pr-4 rounded-xl border border-outline-variant/30 font-manrope text-sm focus:outline-none focus:border-primary transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-on-surface text-surface px-6 py-3 rounded-xl font-manrope text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-all disabled:opacity-50"
        >
          {loading ? "Checking..." : "Check"}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 text-error text-[10px] font-manrope font-bold uppercase tracking-tighter"
          >
            <AlertTriangle size={12} />
            {error}
          </motion.div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3 pt-2"
          >
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle size={14} />
              <span className="font-manrope text-[10px] font-bold uppercase tracking-widest">Deliverable to your area!</span>
            </div>
            
            {result.available_courier_companies?.[0] && (
              <div className="bg-surface p-3 rounded-xl flex justify-between items-center border border-outline-variant/10 text-[9px] font-manrope uppercase tracking-widest text-on-surface-variant">
                <span>Fastest Delivery:</span>
                <span className="font-bold text-on-surface">
                  {result.available_courier_companies[0].etd || "3-5 Days"}
                </span>
              </div>
            )}
            
            <p className="text-[8px] text-on-surface-variant font-manrope uppercase tracking-widest text-center opacity-60">
              Logistics powered by NimbusPost
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
