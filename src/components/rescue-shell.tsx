import { Link } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

export function RescueShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b-4 border-rescue-ink bg-rescue-coral">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="group inline-flex items-center gap-3" aria-label="Paws home">
            <span className="grid size-10 place-items-center border-2 border-rescue-ink bg-rescue-yellow pixel-shadow-sm transition-transform group-hover:-translate-y-0.5">
              <Heart className="size-5 fill-rescue-ink text-rescue-ink" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl tracking-tight text-rescue-yellow">PAWS.</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            <Link to="/adopt" className="font-display text-xs text-rescue-ink transition-colors hover:text-rescue-paper">
              ADOPT
            </Link>
            <Link to="/donate" className="font-display text-xs text-rescue-ink transition-colors hover:text-rescue-paper">
              DONATE
            </Link>
          </nav>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="border-2 border-rescue-ink bg-rescue-yellow text-rescue-ink shadow-none hover:bg-rescue-paper hover:text-rescue-ink md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {menuOpen ? (
          <nav className="border-t-2 border-rescue-ink bg-rescue-yellow px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-6xl gap-3">
              <Button asChild className="flex-1 rounded-none border-2 border-rescue-ink bg-rescue-paper font-display text-xs text-rescue-ink shadow-none hover:bg-rescue-coral hover:text-rescue-paper">
                <Link to="/adopt" onClick={() => setMenuOpen(false)}>ADOPT</Link>
              </Button>
              <Button asChild className="flex-1 rounded-none border-2 border-rescue-ink bg-rescue-ink font-display text-xs text-rescue-yellow shadow-none hover:bg-rescue-coral hover:text-rescue-paper">
                <Link to="/donate" onClick={() => setMenuOpen(false)}>DONATE</Link>
              </Button>
            </div>
          </nav>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t-4 border-rescue-ink bg-rescue-ink px-5 py-5 text-rescue-paper sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-[10px] tracking-wide text-rescue-yellow">PIXEL BY PIXEL · SAVING PAWS</span>
          <span className="font-bold text-rescue-paper/70">Every action gives an animal a second chance.</span>
        </div>
      </footer>
    </div>
  );
}