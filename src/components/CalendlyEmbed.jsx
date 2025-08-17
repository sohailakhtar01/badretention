"use client"; // because Calendly script only works in the browser

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    // Create and inject Calendly script into the page
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/sameer-badretention/30min?primary_color=e63946"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
