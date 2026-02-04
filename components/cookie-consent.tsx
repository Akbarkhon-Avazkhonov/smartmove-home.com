'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const cookieConsent = localStorage.getItem('smartmove-cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('smartmove-cookie-consent', 'accepted');
    setIsVisible(false);
    // Initialize analytics and other scripts here
  };

  const handleReject = () => {
    localStorage.setItem('smartmove-cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6">
      <div className="max-w-4xl mx-auto glass-effect rounded-lg border border-[#008080]/20 shadow-lg p-6 md:flex items-center justify-between gap-6">
        <div className="flex-1 mb-4 md:mb-0">
          <h3 className="font-outfit font-semibold text-foreground mb-2 text-sm md:text-base">
            We Use Cookies
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to enhance your experience, analyze traffic, and personalize content. 
            By continuing to use our site, you consent to our use of cookies.
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium rounded-lg border border-[#008080]/30 text-foreground hover:bg-white/50 transition-colors whitespace-nowrap"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-[#008080] text-white hover:bg-[#005566] transition-colors whitespace-nowrap"
          >
            Accept
          </button>
        </div>

        <button
          onClick={handleReject}
          className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
