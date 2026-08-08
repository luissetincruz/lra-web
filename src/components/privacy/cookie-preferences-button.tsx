"use client";

import { CONSENT_OPEN_EVENT } from "@/components/privacy/analytics-consent";

export function CookiePreferencesButton() {
  function openPreferences() {
    window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
  }

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-left text-xs text-text-subtle transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
    >
      Preferências de cookies
    </button>
  );
}
