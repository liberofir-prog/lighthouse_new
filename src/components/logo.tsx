"use client";

/**
 * Migdalor brand logo — faithful SVG recreation of the official logo.
 * Lighthouse illustration with brand brown/mocha palette + Hebrew typography.
 */

interface LogoProps {
  /** Scale factor — 1 = default header size */
  scale?: number;
  /** Show tagline "ענבל ליבר" below the brand name */
  showTagline?: boolean;
}

export default function Logo({ scale = 1, showTagline = true }: LogoProps) {
  const BROWN = "#4B3831";
  const MOCHA = "#9E928A";
  const BEAM  = "#C8C0BA";

  const towerW = 50;   // SVG units
  const height = 90;

  return (
    <div
      className="flex items-center gap-3 select-none"
      style={{ transform: `scale(${scale})`, transformOrigin: "right center" }}
    >
      {/* ── Lighthouse SVG ── */}
      <svg
        width={towerW}
        height={height}
        viewBox={`0 0 ${towerW} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Clip to the tapered tower shape */}
          <clipPath id="tower-clip">
            <path d="M16 28 L34 28 L38 80 L12 80 Z" />
          </clipPath>
        </defs>

        {/* ── Light beam (wide wedge pointing left-upward) ── */}
        <path
          d="M28 18 L2 2 L6 30 Z"
          fill={BEAM}
          opacity="0.9"
        />

        {/* ── Dome cap ── */}
        <path
          d="M18 18 Q25 10 32 18"
          fill={BROWN}
          strokeLinecap="round"
        />
        {/* Dome body */}
        <rect x="18" y="16" width="14" height="4" rx="0.5" fill={BROWN} />

        {/* ── Lantern room ── */}
        <rect x="17" y="20" width="16" height="6" rx="0.5" fill={BROWN} />

        {/* Lantern room fence / railing */}
        <rect x="14" y="26" width="22" height="2.5" rx="0.8" fill={BROWN} />
        {/* Fence pickets */}
        {[16.5, 19.5, 22.5, 25.5, 28.5, 31.5, 34.5].map((x) => (
          <line
            key={x}
            x1={x} y1="26.5"
            x2={x} y2="28.5"
            stroke="#F5F0ED"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        ))}

        {/* ── Tower body (clipped trapezoid) ── */}
        {/* Background fill — mocha (will show as the "light" stripes) */}
        <g clipPath="url(#tower-clip)">
          <rect x="0" y="0" width={towerW} height={height} fill={MOCHA} />

          {/* Brown diagonal stripes — parallelograms angled upper-right to lower-left */}
          {/* The angle matches the brand logo's helical lighthouse stripe pattern */}
          <polygon points="-4,28  50,24  50,39  -4,43" fill={BROWN} />
          <polygon points="-4,46  50,42  50,57  -4,61" fill={BROWN} />
          <polygon points="-4,64  50,60  50,75  -4,79" fill={BROWN} />
        </g>

        {/* ── Base platform ── */}
        <rect x="11" y="80" width="28" height="4" rx="1" fill={BROWN} />
        <rect x="8"  y="84" width="34" height="3" rx="1.5" fill={MOCHA} />
      </svg>

      {/* ── Hebrew text ── */}
      <div className="flex flex-col justify-center leading-none gap-1.5">
        <span
          className="font-bold tracking-tight leading-none"
          style={{ color: BROWN, fontSize: "1.6rem" }}
        >
          מגדלור
        </span>
        {showTagline && (
          <span
            className="font-normal tracking-wide leading-none"
            style={{ color: MOCHA, fontSize: "0.85rem" }}
          >
            ענבל ליבר
          </span>
        )}
      </div>
    </div>
  );
}
