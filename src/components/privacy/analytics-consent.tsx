"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import type { HomeDictionary } from "@/i18n/types";
import { WebVitalsReporter } from "@/components/analytics/web-vitals-reporter";

const CONSENT_STORAGE_KEY = "lra_analytics_consent";
const CONSENT_CHANGE_EVENT = "lra-analytics-consent-change";

export const CONSENT_OPEN_EVENT = "lra-analytics-consent-open";

type ConsentChoice = "granted" | "denied" | null | undefined;

type AnalyticsConsentProps = Readonly<{
  gtmId?: string;
  content: HomeDictionary["privacy"];
}>;

function getConsentSnapshot(): ConsentChoice {
  const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

  if (storedConsent === "granted" || storedConsent === "denied") {
    return storedConsent;
  }

  return null;
}

function getServerConsentSnapshot(): ConsentChoice {
  return undefined;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
  };
}

function saveConsent(choice: "granted" | "denied") {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

function clearAnalyticsCookies() {
  const clarity = (
    window as Window & {
      clarity?: (...args: unknown[]) => void;
    }
  ).clarity;

  clarity?.("consent", false);

  const analyticsCookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter(
      (name): name is string =>
        Boolean(name) &&
        (name.startsWith("_ga") ||
          name.startsWith("_gid") ||
          name.startsWith("_gat") ||
          name === "_clck" ||
          name === "_clsk"),
    );

  for (const name of analyticsCookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/`;

    if (
      window.location.hostname === "lrasoftware.com" ||
      window.location.hostname.endsWith(".lrasoftware.com")
    ) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.lrasoftware.com`;
    }
  }
}

export function AnalyticsConsent({ gtmId, content }: AnalyticsConsentProps) {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    function openPreferences() {
      setPreferencesOpen(true);
    }

    window.addEventListener(CONSENT_OPEN_EVENT, openPreferences);

    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, openPreferences);
    };
  }, []);

  function acceptAnalytics() {
    saveConsent("granted");
    setPreferencesOpen(false);
  }

  function rejectAnalytics() {
    const wasGranted = consent === "granted";

    saveConsent("denied");
    clearAnalyticsCookies();
    setPreferencesOpen(false);

    if (wasGranted) {
      window.location.reload();
    }
  }

  return (
    <>
      {consent === "granted" && gtmId ? (
        <>
          <GoogleTagManager gtmId={gtmId} />
          <WebVitalsReporter />
        </>
      ) : null}

      {consent === null || preferencesOpen ? (
        <div
          role="dialog"
          aria-label={content.dialogAriaLabel}
          className="fixed right-4 bottom-4 left-4 z-100 mx-auto max-w-3xl rounded-2xl border border-light-border bg-background p-5 shadow-card-light sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="font-semibold text-text">{content.title}</p>

              <p className="mt-2 text-sm leading-6 text-text-muted">{content.description}</p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={rejectAnalytics}
                className="min-h-11 rounded-xl border border-light-border-strong bg-background px-5 text-sm font-medium text-text transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-text focus-visible:outline-none"
              >
                {content.reject}
              </button>

              <button
                type="button"
                onClick={acceptAnalytics}
                className="min-h-11 rounded-xl bg-brand px-5 text-sm font-semibold text-text transition-colors hover:bg-brand-hover focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {content.accept}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
