"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-50 bg-blue-950 border-t border-blue-800"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-300">
                <p>
                  {t.rich("message", {
                    privacyLink: (chunks) => (
                      <Link
                        href="/legal/privacy"
                        className="underline hover:text-white"
                      >
                        {chunks}
                      </Link>
                    ),
                  })}
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <button
                  onClick={handleDecline}
                  className="text-gray-300 hover:text-white font-medium text-sm px-6 py-2 rounded-lg"
                >
                  {t("decline")}
                </button>
                <button
                  onClick={handleAccept}
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-6 py-2 rounded-lg text-sm"
                >
                  {t("accept")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
