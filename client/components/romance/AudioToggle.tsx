import React, { useEffect, useRef, useState } from "react";
import { Music2, Pause } from "lucide-react";

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_6fb1d0df-fb4f-4d7d-acf9-34ed2a5b3720.mp3?filename=romantic-piano-ambient-110624.mp3",
    );
    audio.loop = true;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        // autoplay blocked
      }
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed right-4 top-4 z-30 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-rose-700 shadow-md backdrop-blur hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-rose-300"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? <Pause className="size-4" /> : <Music2 className="size-4" />}
      <span>{playing ? "Pause" : "Music"}</span>
    </button>
  );
}
