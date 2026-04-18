import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Package, MapPin, Calendar, CheckCircle2, AlertCircle } from "lucide-react";

export default function TrackOrder() {
  const [awb, setAwb] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!awb.trim()) return;

    setLoading(true);
    setError(null);
    setTrackingData(null);

    try {
      const response = await fetch(`/api/nimbus/track/${awb}`);
      const data = await response.json();

      if (data.status) {
        setTrackingData(data.data);
      } else {
        setError(data.message || "Tracking information not found. Please check your AWB number.");
      }
    } catch (err) {
      setError("Failed to fetch tracking data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="font-manrope uppercase tracking-[0.4em] text-[10px] text-primary font-bold block">
            Shipment Tracking
          </span>
          <h1 className="font-noto-serif text-5xl md:text-6xl text-on-surface">Track Your <span className="italic text-primary">Resilience.</span></h1>
          <p className="font-manrope text-on-surface-variant max-w-lg mx-auto">
            Enter your AWB number provided in your dispatch email to see the journey of your stone-ground spices.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleTrack} className="relative group">
          <input
            type="text"
            value={awb}
            onChange={(e) => setAwb(e.target.value)}
            placeholder="Enter AWB Number (e.g., 123456789)"
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl py-6 px-8 pr-20 font-manrope text-xl focus:outline-none focus:border-primary transition-all shadow-sm hover:shadow-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-on-primary p-4 rounded-xl cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Search size={24} />
            )}
          </button>
        </form>

        {/* Results */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-error-container text-on-error-container p-6 rounded-2xl flex items-center gap-4 border border-error/10"
            >
              <AlertCircle className="flex-shrink-0" />
              <p className="font-manrope font-bold uppercase tracking-widest text-xs">{error}</p>
            </motion.div>
          )}

          {trackingData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Status Header */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm flex flex-wrap justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <Package className="text-primary" size={32} />
                  </div>
                  <div>
                    <p className="font-manrope uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Current Status</p>
                    <h3 className="font-noto-serif text-2xl text-on-surface">{trackingData.status_text}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-manrope uppercase tracking-widest text-[10px] text-on-surface-variant font-bold">Estimated Delivery</p>
                  <p className="font-manrope text-2xl font-bold text-primary">{trackingData.edd || "Pending"}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm space-y-8">
                <h4 className="font-noto-serif text-xl border-b border-outline-variant/10 pb-4">Shipment Journey</h4>
                <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-px before:bg-outline-variant/30">
                  {trackingData.history?.map((event: any, idx: number) => (
                    <div key={idx} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-9 h-9 bg-surface-container-lowest border-4 border-outline-variant/20 rounded-full flex items-center justify-center z-10">
                        {idx === 0 ? <CheckCircle2 size={16} className="text-primary" /> : <div className="w-2 h-2 bg-on-surface-variant/40 rounded-full" />}
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-start gap-4">
                          <p className={`font-manrope font-bold ${idx === 0 ? "text-on-surface" : "text-on-surface-variant"}`}>
                            {event.message}
                          </p>
                          <span className="font-manrope text-[10px] text-on-surface-variant whitespace-nowrap pt-1">
                            {event.date}
                          </span>
                        </div>
                        <p className="font-manrope text-xs text-on-surface-variant/70 flex items-center gap-1">
                          <MapPin size={10} /> {event.location || "N/A"}
                        </p>
                      </div>
                    </div>
                  ))}
                  {!trackingData.history && (
                    <div className="text-center py-8 opacity-40">
                      <p className="font-manrope uppercase tracking-widest text-[10px] font-bold">No history available yet</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
