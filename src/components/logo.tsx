"use client";

import Image from "next/image";

interface LogoProps {
  /** Scale factor — 1 = default header size */
  scale?: number;
  /** Show tagline "ענבל ליבר" below the brand name (unused, kept for API compat) */
  showTagline?: boolean;
}

export default function Logo({ scale = 1 }: LogoProps) {
  return (
    <div
      className="select-none"
      style={{ transform: `scale(${scale})`, transformOrigin: "right center" }}
    >
      <Image
        src="/logo.png"
        alt="מגדלור — ענבל ליבר"
        width={180}
        height={80}
        className="h-auto w-[90px] md:w-[110px]"
        priority
      />
    </div>
  );
}
