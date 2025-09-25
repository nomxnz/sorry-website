import React from "react";
import { ArrowLeft, Sparkles, Send } from "lucide-react";

export default function ForgiveView({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative z-10 mx-auto my-8 flex w-full max-w-5xl flex-col items-center gap-6 rounded-3xl bg-white/70 p-6 text-center shadow-xl backdrop-blur sm:p-10">
      <h2 className="font-script text-5xl text-rose-600 glow-pink">I Love You Arro 💖</h2>
      <p className="mx-auto max-w-2xl text-rose-800/90">
        You said YES 💕
        <br />
        Thank you, my love. I promise, I will fix everything and make you proud of us.
        <br />
        I love you endlessly, and I’m never letting go again.
      </p>
      <p className="text-right w-full pr-4 font-semibold text-rose-700">— Yours always, Noman 💖</p>

      <div className="mt-2 grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <img key={i} src={src} alt="Our memory" className="h-28 w-full rounded-xl object-cover shadow md:h-36" />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <a
          href={"https://wa.me/?text=" + encodeURIComponent("Arro, thank you for forgiving me. Let’s begin again — Noman")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 font-medium text-white shadow-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          <Send className="size-4" /> Restart Our Story
        </a>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-5 py-2.5 text-rose-700 shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          <ArrowLeft className="size-4" /> Back
        </button>
      </div>

      {/* Hearts fireworks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute select-none text-pink-500/70 animate-pop"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${(i % 10) * 0.12}s`,
              transformOrigin: "center",
              filter: "drop-shadow(0 2px 6px rgba(255,105,180,.35))",
            }}
          >
            💖
          </span>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={`rose-${i}`}
            className="absolute select-none animate-fall-slow text-rose-400/80"
            style={{ left: `${(i * 9 + 12) % 100}%`, animationDelay: `${i * 0.8}s` }}
          >
            🌹
          </span>
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={`sp-${i}`} className="absolute text-rose-300/60 animate-twinkle" style={{ left: `${(i * 5 + 3) % 100}%`, top: `${(i * 6 + 9) % 100}%` }}>
            <Sparkles className="size-4" />
          </span>
        ))}
      </div>
    </div>
  );
}

const images = [
  "https://images.unsplash.com/photo-1525338078858-d762b5e32f86?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505322022206-c3f3d1a3bb0f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop",
];
