import { FormEvent, useState } from "react";
import { ArrowLeft, Check, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import rescuePals from "@/assets/rescue-pals.png";

const donationOptions = [10, 25, 50, 100];

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate to Animal Rescue — Paws" },
      { name: "description", content: "Support food, medicine, and safe shelter for rescue pets with a one-time gift." },
      { property: "og:title", content: "Donate to Animal Rescue — Paws" },
      { property: "og:description", content: "Your gift keeps rescue missions moving and gives animals a softer landing." },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  const [amount, setAmount] = useState(25);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-rescue-yellow">
      <section className="border-b-4 border-rescue-ink bg-rescue-coral px-5 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <Button asChild variant="link" className="mb-6 h-auto gap-2 p-0 font-display text-[10px] text-rescue-ink hover:text-rescue-paper"><Link to="/"><ArrowLeft /> BACK TO HQ</Link></Button>
            <p className="font-display text-[10px] text-rescue-ink/60">PLAYER 02 · SUPPORTER</p>
            <h1 className="mt-3 max-w-xl font-display text-4xl leading-tight text-rescue-ink sm:text-5xl">REFILL THE HEARTS.</h1>
            <p className="mt-5 max-w-md text-base font-bold leading-relaxed text-rescue-ink/80">Every gift becomes a meal, a medicine refill, or a safe ride toward home.</p>
          </div>
          <div className="relative mx-auto w-full max-w-sm border-4 border-rescue-ink bg-rescue-yellow pixel-shadow">
            <img src={rescuePals} alt="Pixel-art rescue dog and cat receiving support" width={1024} height={1024} className="aspect-square w-full object-cover" />
            <div className="absolute bottom-3 left-3 border-2 border-rescue-ink bg-rescue-paper px-2 py-1 font-display text-[10px] text-rescue-ink">MISSION FUNDED</div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-4 border-rescue-ink bg-rescue-paper p-5 pixel-shadow sm:p-7">
          {submitted ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <div className="grid size-16 place-items-center border-2 border-rescue-ink bg-rescue-yellow"><Check className="size-8 text-rescue-coral" /></div>
              <h2 className="mt-6 font-display text-2xl text-rescue-ink">THANK YOU, RESCUER!</h2>
              <p className="mt-3 max-w-sm text-sm font-bold leading-relaxed text-rescue-ink/65">Your ${amount} gift is ready to help keep a pet safe, fed, and loved.</p>
              <Button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-none border-2 border-rescue-ink bg-rescue-coral font-display text-[10px] text-rescue-paper shadow-none hover:bg-rescue-coral-deep hover:text-rescue-paper">MAKE ANOTHER GIFT</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div><p className="font-display text-[10px] text-rescue-coral">CHOOSE YOUR BOOST</p><h2 className="mt-2 font-display text-2xl text-rescue-ink">HOW MUCH CAN YOU SPARE?</h2></div>
              <div className="grid grid-cols-4 gap-2">{donationOptions.map((option) => <Button key={option} type="button" onClick={() => setAmount(option)} className={`rounded-none border-2 border-rescue-ink py-6 font-display text-xs shadow-none ${amount === option ? "bg-rescue-coral text-rescue-paper hover:bg-rescue-coral-deep hover:text-rescue-paper" : "bg-rescue-yellow text-rescue-ink hover:bg-rescue-coral hover:text-rescue-paper"}`}>${option}</Button>)}</div>
              <label className="grid gap-2 text-xs font-bold text-rescue-ink">CUSTOM AMOUNT<Input type="number" min="1" value={amount} onChange={(event) => setAmount(Number(event.target.value) || 0)} className="h-12 rounded-none border-2 border-rescue-ink bg-rescue-paper text-lg font-bold text-rescue-ink focus-visible:ring-rescue-coral" /></label>
              <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-xs font-bold text-rescue-ink">YOUR NAME<Input required name="name" placeholder="Alex Morgan" className="h-11 rounded-none border-2 border-rescue-ink bg-rescue-paper text-rescue-ink placeholder:text-rescue-ink/40 focus-visible:ring-rescue-coral" /></label><label className="grid gap-2 text-xs font-bold text-rescue-ink">EMAIL<Input required type="email" name="email" placeholder="alex@example.com" className="h-11 rounded-none border-2 border-rescue-ink bg-rescue-paper text-rescue-ink placeholder:text-rescue-ink/40 focus-visible:ring-rescue-coral" /></label></div>
              <Button type="submit" disabled={amount < 1} className="rounded-none border-2 border-rescue-ink bg-rescue-ink py-6 font-display text-xs text-rescue-yellow shadow-[4px_4px_0_var(--color-rescue-coral)] hover:bg-rescue-ink hover:text-rescue-paper">GIVE ${amount || 0} <Heart className="fill-rescue-yellow" /></Button>
              <p className="flex items-center justify-center gap-2 text-center text-[10px] font-bold text-rescue-ink/55"><ShieldCheck className="size-3.5" /> Secure supporter form · no payment is taken in this demo</p>
            </form>
          )}
        </div>

        <aside className="space-y-5">
          <div className="border-2 border-rescue-ink bg-rescue-ink p-6 text-rescue-paper">
            <Sparkles className="size-7 text-rescue-yellow" />
            <h2 className="mt-5 font-display text-xl text-rescue-yellow">YOUR GIFT IN ACTION</h2>
            <ul className="mt-5 space-y-4 text-sm font-bold leading-relaxed text-rescue-paper/75"><li><span className="text-rescue-yellow">$10</span> helps cover a warm meal.</li><li><span className="text-rescue-yellow">$25</span> helps stock medicine.</li><li><span className="text-rescue-yellow">$50</span> helps fund a safe ride home.</li></ul>
          </div>
          <div className="border-2 border-rescue-ink bg-rescue-paper p-6 text-rescue-ink"><p className="font-display text-[10px] text-rescue-coral">THE PROMISE</p><p className="mt-3 text-sm font-bold leading-relaxed text-rescue-ink/70">We keep every rescue mission practical, transparent, and full of care.</p></div>
        </aside>
      </section>
    </div>
  );
}