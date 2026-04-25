import { useEffect, useState } from "react";
import { ConsentCookie } from "../utils/cookies";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!ConsentCookie.isAccepted());
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[200] md:left-auto md:right-4 md:max-w-xl rounded-2xl border border-outline-variant/20 bg-surface shadow-2xl p-4 md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h3 className="font-noto-serif text-lg text-on-surface">Cookies help your cart stay put</h3>
          <p className="font-manrope text-xs md:text-sm text-on-surface-variant leading-relaxed">
            We use essential cookies to remember your cart and keep the site working smoothly.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            ConsentCookie.accept();
            setVisible(false);
          }}
          className="bg-primary text-on-primary px-5 py-3 rounded-md font-manrope font-bold uppercase tracking-widest text-[10px] whitespace-nowrap"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}
