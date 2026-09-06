import { useEffect, useState } from "react";

import pixelDog from "@/assets/pixel-dog.png";
import pixelCat from "@/assets/pixel-cat.png";

type Phase = "enter" | "hold" | "exit" | "done";

export function IntroSplash() {
  const [phase, setPhase] = useState<Phase>("enter");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("hold"), 700);
    const exitTimer = setTimeout(() => setPhase("exit"), 2400);
    const doneTimer = setTimeout(() => setPhase("done"), 3050);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  const revealed = phase !== "enter";

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 overflow-hidden bg-rescue-coral px-6 sm:gap-8 ${
        phase === "exit" ? "animate-splash-out" : ""
      }`}
    >
      {/* pixel scanline texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(0deg,var(--color-rescue-ink)_0_2px,transparent_2px_6px)]" />

      {/* logo badge — square, like the reference */}
      <div className="animate-splash-pop grid size-28 place-items-center border-4 border-rescue-ink bg-rescue-yellow pixel-shadow sm:size-36">
        <span className="font-display text-2xl tracking-tight text-rescue-ink sm:text-3xl">PAWS.</span>
      </div>

      <p
        className={`font-display text-[10px] tracking-[0.35em] text-rescue-ink transition-opacity duration-300 sm:text-xs ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        CHOOSE YOUR PET
      </p>

      {/* pixel dog + cat, standing side by side */}
      <div
        className={`flex items-end justify-center gap-8 transition-all duration-500 sm:gap-14 ${
          revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <img
          src={pixelDog}
          alt=""
          width={768}
          height={768}
          className="h-28 w-28 animate-rescue-bob object-contain [image-rendering:pixelated] sm:h-40 sm:w-40"
        />
        <img
          src={pixelCat}
          alt=""
          width={768}
          height={768}
          className="h-24 w-24 animate-rescue-bob object-contain [animation-delay:500ms] [image-rendering:pixelated] sm:h-36 sm:w-36"
        />
      </div>

      {/* loading bar */}
      <div className="h-3 w-40 border-2 border-rescue-ink bg-rescue-paper sm:w-52">
        <div className="h-full animate-splash-fill bg-rescue-ink" />
      </div>
    </div>
  );
}
