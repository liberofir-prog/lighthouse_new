declare const window: Window & { gtag?: (...args: unknown[]) => void };

export function trackWhatsAppConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18083758679/nQbDCMeCy5ocENeEga9D",
      value: 1.0,
      currency: "ILS",
    });
  }
}
