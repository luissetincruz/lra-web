"use client";

import { CONSENT_OPEN_EVENT } from "@/components/privacy/analytics-consent";

type CookiePreferencesButtonProps = Readonly<{
  label: string;
}>;

export function CookiePreferencesButton({ label }: CookiePreferencesButtonProps) {
  function openPreferences() {
    window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
  }

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-left text-xs text-text-subtle transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
    >
      {label}
    </button>
  );
}
