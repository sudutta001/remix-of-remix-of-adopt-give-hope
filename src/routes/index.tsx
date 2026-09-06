import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, PawPrint } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IntroSplash } from "@/components/intro-splash";
import { impactStats } from "@/lib/rescue-data";
import rescuePals from "@/assets/rescue-pals.png";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paws Rescue — Adopt or Donate" },
      { name: "description", content: "Help a rescue animal find a home or support the care that gets them there." },
      { property: "og:title", content: "Paws Rescue — Adopt or Donate" },
      { property: "og:description", content: "Choose your mission: adopt a pet or fuel a rescue operation." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-rescue-coral">
      <IntroSplash />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pb-20 lg:pt-16">
        <div className="animate-rescue-rise text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 border-2 border-rescue-ink bg-rescue-yellow px-3 py-2 font-display text-[10px] text-rescue-ink pixel-shadow-sm">
            <PawPrint className="size-3.5" /> RESCUE HQ · ONLINE
          </div>
          <h1 className="max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-rescue-ink sm:text-5xl lg:text-6xl">
            CHOOSE YOUR MISSION
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base font-bold leading-relaxed text-rescue-ink/80 lg:mx-0">
            Help a furry friend find a forever home or keep a rescue operation moving today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild className="pixel-press rounded-none border-2 border-rescue-ink bg-rescue-ink px-6 py-6 font-display text-xs text-rescue-yellow shadow-[4px_4px_0_var(--color-rescue-yellow)] hover:bg-rescue-ink hover:text-rescue-paper">
              <Link to="/adopt">START ADOPTING <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none border-2 border-rescue-ink bg-rescue-yellow px-6 py-6 font-display text-xs text-rescue-ink shadow-none hover:bg-rescue-paper hover:text-rescue-ink">
              <Link to="/donate">GIVE SUPPORT</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] animate-rescue-rise [animation-delay:120ms]">
          <div className="absolute -right-1 top-5 z-10 border-2 border-rescue-ink bg-rescue-yellow px-3 py-2 font-display text-[10px] text-rescue-ink pixel-shadow-sm sm:right-3">
            LEVEL UP LOVE
          </div>
          <div className="overflow-hidden border-4 border-rescue-ink bg-rescue-yellow pixel-shadow">
            <img src={rescuePals} alt="Pixel-art rescue dog and cat sitting together" width={1024} height={1024} className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 left-4 border-2 border-rescue-ink bg-rescue-paper px-3 py-2 font-display text-[10px] text-rescue-ink pixel-shadow-sm sm:left-8">
            TWO FRIENDS · ONE BIG CHANCE
          </div>
        </div>
      </section>

      <section className="border-y-4 border-rescue-ink bg-rescue-yellow px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-[10px] text-rescue-ink/60">SELECT PLAYER MODE</p>
              <h2 className="mt-2 font-display text-2xl text-rescue-ink sm:text-3xl">HOW WILL YOU HELP?</h2>
            </div>
            <Heart className="hidden size-10 fill-rescue-coral text-rescue-coral sm:block" />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <ActionCard title="ADOPT" eyebrow="PLAYER 01 · RECIPIENT" copy="Meet local rescue pets with big personalities and room in their hearts for you." href="/adopt" button="VIEW PETS" tone="paper" />
            <ActionCard title="DONATE" eyebrow="PLAYER 02 · SUPPORTER" copy="Fuel food, medicine, transport, and the soft landing every rescue deserves." href="/donate" button="FUND A RESCUE" tone="ink" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-display text-[10px] text-rescue-ink/60">MISSION CONTROL</p>
            <h2 className="mt-2 max-w-sm font-display text-3xl leading-tight text-rescue-ink">SMALL TAPS. BIG SECOND CHANCES.</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {impactStats.map((stat) => (
              <div key={stat.label} className="border-2 border-rescue-ink bg-rescue-coral/20 p-4 text-center">
                <div className="font-display text-xl text-rescue-yellow drop-shadow-[2px_2px_0_var(--color-rescue-ink)] sm:text-3xl">{stat.value}</div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-wide text-rescue-ink/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ActionCard({ title, eyebrow, copy, href, button, tone }: { title: string; eyebrow: string; copy: string; href: "/adopt" | "/donate"; button: string; tone: "paper" | "ink" }) {
  const ink = tone === "ink";
  return (
    <article className={`border-4 border-rescue-ink p-6 pixel-shadow ${ink ? "bg-rescue-ink text-rescue-paper" : "bg-rescue-paper text-rescue-ink"}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`font-display text-[10px] ${ink ? "text-rescue-yellow" : "text-rescue-coral"}`}>{eyebrow}</p>
          <h3 className="mt-3 font-display text-2xl">{title}</h3>
        </div>
        <Heart className={`size-7 ${ink ? "fill-rescue-yellow text-rescue-yellow" : "fill-rescue-coral text-rescue-coral"}`} />
      </div>
      <p className={`mt-5 max-w-md text-sm leading-relaxed ${ink ? "text-rescue-paper/75" : "text-rescue-ink/70"}`}>{copy}</p>
      <Button asChild className={`mt-7 rounded-none border-2 border-rescue-ink px-5 py-5 font-display text-[10px] shadow-none ${ink ? "bg-rescue-yellow text-rescue-ink hover:bg-rescue-paper hover:text-rescue-ink" : "bg-rescue-coral text-rescue-paper hover:bg-rescue-coral-deep hover:text-rescue-paper"}`}>
        <Link to={href}>{button} <ArrowRight /></Link>
      </Button>
    </article>
  );
}