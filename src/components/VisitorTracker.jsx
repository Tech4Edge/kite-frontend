import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function VisitorTracker() {
  const location = useLocation();
  const lastTrackedPath = useRef("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const pathname = location.pathname;
    if (pathname && pathname.startsWith("/admin")) return;

    const fullUrl = window.location.href;
    if (lastTrackedPath.current === fullUrl) return;
    lastTrackedPath.current = fullUrl;

    const searchParams = new URLSearchParams(location.search);
    const referrer = document.referrer || "";
    const utmSource = searchParams.get("utm_source") || searchParams.get("source") || searchParams.get("ref") || "";
    const fbclid = searchParams.get("fbclid");
    const gclid = searchParams.get("gclid");

    let detectedSource = "direct";
    const refLower = referrer.toLowerCase();
    const utmLower = utmSource.toLowerCase();

    if (
      utmLower.includes("whatsapp") || 
      refLower.includes("whatsapp") || 
      refLower.includes("api.whatsapp.com") || 
      refLower.includes("wa.me")
    ) {
      detectedSource = "whatsapp";
    } else if (
      utmLower.includes("facebook") || 
      refLower.includes("facebook.com") || 
      refLower.includes("fb.com") || 
      refLower.includes("l.facebook.com") ||
      refLower.includes("m.facebook.com") ||
      fbclid
    ) {
      detectedSource = "facebook";
    } else if (
      utmLower.includes("instagram") || 
      refLower.includes("instagram.com") ||
      refLower.includes("l.instagram.com")
    ) {
      detectedSource = "instagram";
    } else if (
      utmLower.includes("google") || 
      refLower.includes("google.") || 
      gclid
    ) {
      detectedSource = "google";
    } else if (
      utmLower.includes("tiktok") || 
      refLower.includes("tiktok.com")
    ) {
      detectedSource = "tiktok";
    } else if (referrer && !refLower.includes(window.location.hostname.toLowerCase())) {
      detectedSource = "referral";
    }

    const ua = navigator.userAgent || "";
    let device = "desktop";
    if (/tablet|ipad|playbook|silk/i.test(ua)) {
      device = "tablet";
    } else if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(ua)) {
      device = "mobile";
    }

    const payload = {
      path: pathname || "/",
      source: detectedSource,
      referrer: referrer ? referrer.slice(0, 200) : "",
      device,
      timestamp: new Date().toISOString(),
      screen: `${window.innerWidth}x${window.innerHeight}`,
    };

    try {
      const apiUrl = (import.meta.env.VITE_API_URL || "/api") + "/analytics/track";
      if (navigator.sendBeacon) {
        navigator.sendBeacon(apiUrl, JSON.stringify(payload));
      } else {
        fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Ignore background analytics failures
    }
  }, [location]);

  return null;
}
