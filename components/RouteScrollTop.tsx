"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;

    window.history.scrollRestoration = "manual";

    const scrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollTop();
    requestAnimationFrame(scrollTop);

    if (pathname.startsWith("/work/")) {
      const timers = [50, 180, 360].map((delay) => window.setTimeout(scrollTop, delay));
      return () => timers.forEach((timer) => window.clearTimeout(timer));
    }
  }, [pathname]);

  return null;
}
