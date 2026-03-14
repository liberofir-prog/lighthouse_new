"use client";

import { FadeIn } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-warm" />

      <div className="relative mx-auto max-w-6xl px-5">
        <FadeIn direction="none">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">מגדלור</span>
              <span className="text-muted-foreground/40">—</span>
              <span className="text-sm text-muted-foreground">ענבל ליבר</span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground/60 text-center">
              ליווי רגשי ורוחני לילדים ומשפחות
            </p>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground/40">
              © {new Date().getFullYear()} כל הזכויות שמורות
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
