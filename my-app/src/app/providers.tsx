"use client";

import { AuthProvider } from "@/context/AuthContext";
import { SiteDataProvider } from "@/context/SiteDataContext";
import { ReactNode, useEffect } from "react";
import { recordVisit, pingSession } from "@/lib/analytics";

function AnalyticsTracker() {
  useEffect(() => {
    // Record page visit
    recordVisit();

    // Ping session immediately and every 10 seconds
    pingSession();
    const interval = setInterval(pingSession, 10_000);
    return () => clearInterval(interval);
  }, []);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <SiteDataProvider>
        <AnalyticsTracker />
        {children}
      </SiteDataProvider>
    </AuthProvider>
  );
}
