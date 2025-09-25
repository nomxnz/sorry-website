import React, { useEffect, useRef } from "react";
import { ArrowLeft, Send } from "lucide-react";

export default function LetterView({ onBack }: { onBack: () => void }) {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    let raf: number;
    let running = true;
    const step = () => {
      if (!running) return;
      el.scrollTop += 0.5;
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        running = false;
      } else {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative mx-auto my-8 w-full max-w-3xl">
      <div className="absolute -left-3 -top-3 right-0 h-20 rounded-full bg-pink-200/40 blur-2xl" />
      <div className="paper relative z-10 rounded-2xl p-6 sm:p-8">
        <h2 className="mb-4 text-center font-script text-4xl text-rose-600">A Letter From My Heart</h2>
        <div
          ref={boxRef}
          className="max-h-[60vh] overflow-y-auto pr-2 text-[1.05rem] leading-7 text-rose-800 [scrollbar-width:thin]"
        >
          <p className="whitespace-pre-line">
            Assalamwalekum
          </p>
          <br />
          <p>
            Dear <span className="font-script text-2xl text-rose-600">Arrooo 💕</span>
          </p>
          <p>I want to start by saying how truly sorry I am for my behaviour !!!</p>
          <p>You have blocked me from everywhere, that’s why I'm sending you a letter here!</p>
          <br />
          <p>I know I have done a lot of mistakes in these 2 years, and you’ve given me many chances.</p>
          <p>Some mistakes were mine, some yours — but we always handled things together!</p>
          <br />
          <p>But this time, you’re not handling it with me.</p>
          <p>I’m doing it alone... because <strong>you are mine</strong>.</p>
          <br />
          <p>I can’t forget our memories and all the happy moments we had!</p>
          <br />
          <p>I know you’re tired of handling this relationship, but please — let’s try <strong>one more time</strong>.</p>
          <p>I promise I will make it the most beautiful relationship this time.</p>
          <br />
          <p>But this is not the way to break up and go...</p>
          <p>We will <strong>make a way together</strong>.</p>
          <br />
          <p>Yes, I’ve lied to you — but only to stay with you, because I LOVE YOU.</p>
          <br />
          <p>If you give me one last chance, I’ll clear everything and we’ll start a new relation — <strong>#NuyaRelation</strong>.</p>
          <br />
          <p>I’ll accept any punishment from you.</p>
          <p>I won’t get hyper over small things.</p>
          <p>I won’t ask for photos or anything.</p>
          <p>I won’t ask where you’re going or who you’re with.</p>
          <p>I’ll quit smoking and all bad habits.</p>
          <br />
          <p>Whatever you want me to change, I will change — for YOU.</p>
          <br />
          <p>I know your feelings for me are fading…</p>
          <p>But I also know deep inside you still love me — you’re just hiding it.</p>
          <br />
          <p>Arro, you’ve rejected me 100 times…</p>
          <p>But I’ll try one more time — and one more time again. 🙃</p>
          <br />
          <p>You’ve only seen one side of me — the bad behaviour.</p>
          <p>Now I want to show you the other side — the side full of love for you. 💕</p>
          <br />
          <p>I hope you can forgive me and come back to me…</p>
          <p>I will wait for youuuuuuuuuuu 🥺</p>
          <br />
          <p>I’m truly sorry — with all my heart.</p>
          <br />
          <p className="text-right font-semibold">— <span className="font-script text-2xl text-rose-600">Noman</span></p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-rose-700 shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-300"
          >
            <ArrowLeft className="size-4" /> Back
          </button>
          <a
            href={"https://wa.me/?text=" + encodeURIComponent("Arro, this is from my heart. Can we talk? — Noman")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 font-medium text-white shadow-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300"
          >
            <Send className="size-4" /> Restart Our Story
          </a>
        </div>
      </div>
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="pointer-events-none absolute -z-10 text-2xl text-sky-400/50 animate-fall-slow"
          style={{ left: `${(i * 15 + 10) % 100}%`, animationDelay: `${i * 0.6}s` }}
        >
          😢
        </span>
      ))}
    </div>
  );
}
