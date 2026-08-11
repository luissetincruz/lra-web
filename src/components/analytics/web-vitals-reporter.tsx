"use client";

import { useEffect } from "react";

type WebVitalsDataLayerEvent = {
  event: "web_vitals";
  webVitalsData: {
    name: string;
    value: number;
    id: string;
    rating: string;
    delta: number;
    navigationType: string;
    pageLocale: string;
  };
};

type WindowWithDataLayer = Window & {
  dataLayer?: unknown[];
};

export function WebVitalsReporter() {
  useEffect(() => {
    let active = true;

    async function reportWebVitals() {
      const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import("web-vitals");

      if (!active) {
        return;
      }

      function sendToDataLayer(metric: {
        name: string;
        value: number;
        id: string;
        rating: string;
        delta: number;
        navigationType: string;
      }) {
        if (!active) {
          return;
        }

        const browserWindow = window as WindowWithDataLayer;

        browserWindow.dataLayer ??= [];

        const event: WebVitalsDataLayerEvent = {
          event: "web_vitals",
          webVitalsData: {
            name: metric.name,
            value: metric.value,
            id: metric.id,
            rating: metric.rating,
            delta: metric.delta,
            navigationType: metric.navigationType,
            pageLocale: document.documentElement.lang,
          },
        };

        browserWindow.dataLayer.push(event);
      }

      onCLS(sendToDataLayer);
      onFCP(sendToDataLayer);
      onINP(sendToDataLayer);
      onLCP(sendToDataLayer);
      onTTFB(sendToDataLayer);
    }

    void reportWebVitals();

    return () => {
      active = false;
    };
  }, []);

  return null;
}
