import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Heart, Home, PawPrint } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { rescuePets, type RescuePet } from "@/lib/rescue-data";
import rescuePals from "@/assets/rescue-pals.png";

export const Route = createFileRoute("/adopt")({
  head: () => ({
    meta: [
      { title: "Adopt a Rescue Pet — Paws" },
      { name: "description", content: "Browse rescue pets and send an adoption interest form to Paws Rescue." },
      { property: "og:title", content: "Adopt a Rescue Pet — Paws" },
      { property: "og:description", content: "Meet Buster, Mochi, Pepper, and other rescue pets waiting for a home." },
    ],
  }),
  component: AdoptPage,
});

function AdoptPage() {
  const [selectedPet, setSelectedPet] = useState<RescuePet | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-rescue-paper">
      <section className="bg-rescue-coral px-5 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <Button asChild variant="link" className="mb-6 h-auto gap-2 p-0 font-display text-[10px] text-rescue-ink hover:text-rescue-paper">
              <Link to="/"><ArrowLeft /> BACK TO HQ</Link>
            </Button>
            <p className="font-display text-[10px] text-rescue-ink/60">PLAYER 01 · RECIPIENT</p>
            <h1 className="mt-3 max-w-xl font-display text-4xl leading-tight text-rescue-ink sm:text-5xl">FIND YOUR NEW BEST FRIEND.</h1>
            <p className="mt-5 max-w-md text-base font-bold leading-relaxed text-rescue-ink/80">These rescue pets are safe, loved, and ready for the next level: home.</p>
          </div>
          <div className="relative mx-auto w-full max-w-sm border-4 border-rescue-ink bg-rescue-yellow pixel-shadow">
            <img src={rescuePals} alt="Pixel-art rescue pets waiting together" width={1024} height={1024} className="aspect-square w-full object-cover" />
            <span className="absolute bottom-3 left-3 border-2 border-rescue-ink bg-rescue-paper px-2 py-1 font-display text-[10px] text-rescue-ink">3 NEW FRIENDS</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {selectedPet ? (
          <div className="mb-12 border-4 border-rescue-ink bg-rescue-yellow p-5 pixel-shadow sm:p-7">
            {submitted ? (
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="grid size-14 shrink-0 place-items-center border-2 border-rescue-ink bg-rescue-paper"><Check className="size-7 text-rescue-coral" /></div>
                <div>
                  <p className="font-display text-xs text-rescue-ink">APPLICATION RECEIVED!</p>
                  <p className="mt-2 text-sm font-bold text-rescue-ink/75">We&apos;ll be in touch about meeting {selectedPet.name}. Thanks for choosing rescue.</p>
                </div>
                <Button type="button" onClick={() => { setSelectedPet(null); setSubmitted(false); }} className="rounded-none border-2 border-rescue-ink bg-rescue-ink font-display text-[10px] text-rescue-yellow shadow-none hover:bg-rescue-coral hover:text-rescue-paper">BROWSE MORE</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[0.75fr_1fr]">
                <div>
                  <p className="font-display text-[10px] text-rescue-coral">APPLICATION FOR</p>
                  <h2 className="mt-2 font-display text-2xl text-rescue-ink">{selectedPet.name.toUpperCase()}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-rescue-ink/70">Tell us a little about you and the home you&apos;ll share. This quick form starts the conversation.</p>
                  <Button type="button" variant="link" onClick={() => setSelectedPet(null)} className="mt-5 h-auto gap-2 p-0 font-display text-[10px] text-rescue-ink hover:text-rescue-coral"><ArrowLeft /> PICK ANOTHER PET</Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-xs font-bold text-rescue-ink">YOUR NAME<Input name="name" required placeholder="Alex Morgan" className="h-11 rounded-none border-2 border-rescue-ink bg-rescue-paper text-rescue-ink placeholder:text-rescue-ink/40 focus-visible:ring-rescue-coral" /></label>
                  <label className="grid gap-2 text-xs font-bold text-rescue-ink">EMAIL<Input type="email" name="email" required placeholder="alex@example.com" className="h-11 rounded-none border-2 border-rescue-ink bg-rescue-paper text-rescue-ink placeholder:text-rescue-ink/40 focus-visible:ring-rescue-coral" /></label>
                  <label className="grid gap-2 text-xs font-bold text-rescue-ink sm:col-span-2">TELL US ABOUT YOUR HOME<Textarea name="home" required placeholder="I have a sunny apartment and lots of time for walks..." className="min-h-24 rounded-none border-2 border-rescue-ink bg-rescue-paper text-rescue-ink placeholder:text-rescue-ink/40 focus-visible:ring-rescue-coral" /></label>
                  <Button type="submit" className="rounded-none border-2 border-rescue-ink bg-rescue-coral font-display text-[10px] text-rescue-paper shadow-[4px_4px_0_var(--color-rescue-ink)] hover:bg-rescue-coral-deep hover:text-rescue-paper sm:col-span-2">SEND APPLICATION <ArrowRight /></Button>
                </div>
              </form>
            )}
          </div>
        ) : null}

        <div className="mb-8 flex items-end justify-between gap-4">
          <div><p className="font-display text-[10px] text-rescue-coral">RESCUE ROSTER</p><h2 className="mt-2 font-display text-3xl text-rescue-ink">MEET THE CREW</h2></div>
          <PawPrint className="size-9 text-rescue-coral" />
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {rescuePets.map((pet) => <PetCard key={pet.id} pet={pet} onSelect={() => { setSelectedPet(pet); setSubmitted(false); }} />)}
        </div>
      </section>
    </div>
  );
}

function PetCard({ pet, onSelect }: { pet: RescuePet; onSelect: () => void }) {
  return (
    <article className="overflow-hidden border-4 border-rescue-ink bg-rescue-paper pixel-shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden border-b-4 border-rescue-ink bg-rescue-yellow">
        <img src={rescuePals} alt={`${pet.name}, a ${pet.species}`} width={1024} height={1024} loading="lazy" className="h-full w-full scale-125 object-cover" />
        <span className="absolute left-3 top-3 border-2 border-rescue-ink bg-rescue-yellow px-2 py-1 font-display text-[9px] text-rescue-ink">{pet.trait}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3"><div><h3 className="font-display text-xl text-rescue-ink">{pet.name.toUpperCase()}</h3><p className="mt-1 text-xs font-bold uppercase text-rescue-ink/55">{pet.species} · {pet.age}</p></div><Heart className="size-5 fill-rescue-coral text-rescue-coral" /></div>
        <p className="mt-4 text-sm leading-relaxed text-rescue-ink/70">{pet.description}</p>
        <p className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase text-rescue-coral"><Home className="size-3.5" /> {pet.status}</p>
        <Button type="button" onClick={onSelect} className="mt-5 w-full rounded-none border-2 border-rescue-ink bg-rescue-ink font-display text-[10px] text-rescue-yellow shadow-none hover:bg-rescue-coral hover:text-rescue-paper">MEET {pet.name.toUpperCase()} <ArrowRight /></Button>
      </div>
    </article>
  );
}