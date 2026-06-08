"use client";

import { FadeIn } from "@/lib/motion";
import HeroCarousel from "@/components/sections/hero-carousel";

export default function TreatmentEnvironment() {
  return (
    <section id="treatment-environment" className="relative py-24 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        {/* Section header */}
        <FadeIn delay={0.1} direction="none" className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            סביבת הטיפול
          </h2>
          <p className="text-lg text-muted-foreground">
            מרחב של הקשבה וצמיחה
          </p>
          <div className="mt-4 mx-auto w-16 h-0.5 rounded-full bg-amber/60" />
        </FadeIn>

        {/* Carousel — centered, constrained width */}
        <FadeIn delay={0.2}>
          <div className="mx-auto max-w-sm md:max-w-md">
            <HeroCarousel />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
