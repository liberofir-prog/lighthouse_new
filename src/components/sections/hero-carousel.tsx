"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const IMAGES = [
  { src: "/pic/cl1.jfif", alt: "חדר הטיפולים" },
  { src: "/pic/cl2.jfif", alt: "סביבת הטיפול" },
  { src: "/pic/cl3.jfif", alt: "מרחב הקליניקה" },
  { src: "/pic/cl5.jfif", alt: "חלל הטיפול" },
  { src: "/pic/cl6.jfif", alt: "הקליניקה" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-warm-lg ring-1 ring-border/30">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES[current].src}
            alt={IMAGES[current].alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Warm overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`תמונה ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-white" : "w-1.5 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
