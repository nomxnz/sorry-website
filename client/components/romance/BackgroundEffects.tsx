import React from "react";

export default function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* floating hearts */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400/40 animate-heart-float"
          style={{
            left: `${(i * 8) % 100}%`,
            top: `${(i * 13) % 100}%`,
            animationDelay: `${(i % 5) * 0.6}s`,
            filter: "blur(0.3px)",
          }}
        >
          ❤️
        </span>
      ))}
      {/* twinkles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={`tw-${i}`}
          className="absolute text-pink-300/50 animate-twinkle"
          style={{ left: `${(i * 5 + 7) % 100}%`, top: `${(i * 9 + 3) % 100}%` }}
        >
          ✨
        </span>
      ))}
    </div>
  );
}
