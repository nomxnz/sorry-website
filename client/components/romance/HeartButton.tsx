import { cn } from "@/lib/utils";
import { Heart, HeartCrack } from "lucide-react";
import React from "react";

type Props = {
  variant: "yes" | "no";
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function HeartButton({ variant, children, className, onClick }: Props) {
  const isYes = variant === "yes";
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 text-lg md:text-xl font-semibold transition-all focus:outline-none focus:ring-4", 
        isYes
          ? "heart-gradient text-white shadow-lg hover:scale-[1.03] focus:ring-pink-300"
          : "bg-white/70 text-rose-600 border border-rose-200 hover:bg-white/90 shadow-md focus:ring-rose-200",
        "animate-rise", 
        className,
      )}
      aria-label={isYes ? "Yes, I Forgive You" : "No, I’m Still Hurt"}
    >
      <span
        className={cn(
          "inline-flex size-12 md:size-14 items-center justify-center rounded-full", 
          isYes ? "bg-white/15" : "bg-rose-50 border border-rose-100",
          "shadow-inner"
        )}
      >
        {isYes ? (
          <Heart className="text-white drop-shadow-sm group-hover:scale-110 transition-transform" />
        ) : (
          <HeartCrack className="text-rose-500 group-hover:scale-110 transition-transform" />
        )}
      </span>
      {children}
    </button>
  );
}
