import React, { useState } from "react";
import HeartButton from "@/components/romance/HeartButton";
import BackgroundEffects from "@/components/romance/BackgroundEffects";
import AudioToggle from "@/components/romance/AudioToggle";
import ForgiveView from "@/components/romance/ForgiveView";
import LetterView from "@/components/romance/LetterView";

export default function Index() {
  const [mode, setMode] = useState<"home" | "letter" | "forgive">("home");

  return (
    <main className="relative min-h-screen romance-gradient overflow-hidden">
      <AudioToggle />
      <BackgroundEffects />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        {mode === "home" && (
          <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-white/70 p-8 shadow-xl backdrop-blur">
            <h1 className="font-script text-5xl text-rose-600 md:text-6xl">Hi Arrooo 💕</h1>
            <p className="text-lg text-rose-800">
              this is for you... Please give me one chance to say something from my heart.
            </p>
            <p className="max-w-xl text-rose-700/90">
              I know I can’t talk to you because you’ve blocked me, but I hope you’ll read this little letter from my heart.
            </p>
            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
              <HeartButton variant="yes" onClick={() => setMode("forgive")}>Yes, I Forgive You</HeartButton>
              <HeartButton variant="no" onClick={() => setMode("letter")}>No, I’m Still Hurt</HeartButton>
            </div>
          </div>
        )}

        {mode === "letter" && <LetterView onBack={() => setMode("home")} />}

        {mode === "forgive" && <ForgiveView onBack={() => setMode("home")} />}
      </section>
    </main>
  );
}
