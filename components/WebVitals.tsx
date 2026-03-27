"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Web Vitals Reporting Component
 * 
 * This component reports Core Web Vitals metrics to analytics services.
 * Add your analytics endpoint to send the data.
 * 
 * Metrics tracked:
 * - FC (First Contentful Paint)
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay)
 * - CLS (Cumulative Layout Shift)
 * - TTFB (Time to First Byte)
 * - INP (Interaction to Next Paint)
 */

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to your analytics endpoint
    // Example: Google Analytics, Vercel Analytics, etc.
    
    const body = {
      dsn: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      id: metric.id,
      name: metric.name,
      value: metric.value,
      delta: metric.delta,
      rating: metric.rating,
      navigationType: metric.navigationType,
    };

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Web Vitals]", metric.name, metric.value, metric.rating);
    }

    // Send to analytics endpoint (uncomment and configure)
    // fetch('/api/web-vitals', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body),
    // });

    // Example: Send to Google Analytics
    // if (typeof window !== 'undefined' && (window as any).gtag) {
    //   (window as any).gtag('event', metric.name, {
    //     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //     event_category: 'Web Vitals',
    //     event_label: metric.id,
    //     non_interaction: true,
    //   });
    // }
  });

  return null;
}

/**
 * Web Vitals thresholds (Google's recommendations):
 * 
 * Good        Needs Improvement    Poor
 * ----------------------------------------
 * LCP:  < 2.5s   2.5s - 4.0s      > 4.0s
 * FID:  < 100ms  100ms - 300ms    > 300ms
 * CLS:  < 0.1    0.1 - 0.25       > 0.25
 * INP:  < 200ms  200ms - 500ms    > 500ms
 * TTFB: < 800ms  800ms - 1800ms   > 1800ms
 */
