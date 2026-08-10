import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ANIME } from "@/data/anime";
import { useStore } from "@/lib/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Riya's profile — stats, ratings and preferences | Aniverse" },
      {
        name: "description",
        content:
          "Your Aniverse profile: watch stats, favourite genres, ratings you've left and account preferences.",
      },
      { property: "og:title", content: "My Aniverse profile" },
      { property: "og:description", content: "Watch stats, favourite genres and your ratings." },
    ],
  }),
  component: Profile,
});

function Profile() {
  const { watchlist, ratings, signedIn, setSignedIn } = useStore();
  const rated = Object.entries(ratings).filter(([, v]) => v > 0);
  const [signOutOpen, setSignOutOpen] = useState(false);

  return (
    <AppShell>
      <section className="stagger relative overflow-hidden rounded-[1.75rem] bg-ink p-8 sm:p-10">
        <span className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sun/70 animate-float" />
        <div className="relative grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-sun font-display text-3xl font-bold text-sun-foreground">
            R
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-[0.2em] text-primary">MEMBER SINCE 2024</p>
            <h1 className="display-title mt-2 text-4xl text-ink-foreground">Riya Sharma</h1>
            <p className="mt-2 text-ink-muted">
              Slice-of-life apologist. Currently in Spring 2026.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        {[
          [String(watchlist.length), "In watchlist"],
          [String(rated.length), "Shows rated"],
          ["164", "Episodes watched"],
          ["62h", "Total watch time"],
        ].map(([v, l], i) => (
          <div
            key={l}
            className="stagger rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-primary/50 hover:shadow-lift"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <p className="font-display text-3xl font-bold">{v}</p>
            <p className="mt-1 text-sm text-muted-foreground">{l}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <section className="rounded-[1.75rem] border border-border bg-card p-7">
          <h2 className="font-display text-xl font-bold">Your ratings</h2>
          {rated.length ? (
            <div className="mt-5 space-y-3">
              {rated.map(([id, value]) => {
                const a = ANIME.find((x) => x.id === id);
                if (!a) return null;
                return (
                  <Link
                    key={id}
                    to="/anime/$animeId"
                    params={{ animeId: id }}
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border p-3 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft"
                  >
                    <img
                      src={a.poster}
                      alt={a.title}
                      loading="lazy"
                      className="h-12 w-16 shrink-0 rounded-lg object-cover"
                    />
                    <p className="min-w-0 truncate font-semibold">{a.title}</p>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold">
                      <Star className="h-4 w-4 fill-sun text-sun" /> {value}/5
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">
              You haven't rated anything yet — tap the stars on any show page.
            </p>
          )}
        </section>

        <aside className="space-y-6">
          <div className="rounded-[1.75rem] border border-border bg-card p-7">
            <h2 className="font-display text-xl font-bold">Favourite genres</h2>
            <div className="mt-5 space-y-4">
              {[
                ["Fantasy", 82],
                ["Action", 64],
                ["Slice of Life", 51],
                ["Mystery", 37],
              ].map(([g, pct]) => (
                <div key={g as string}>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">{g}</span>
                    <span className="text-muted-foreground">{pct}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                    <span
                      className="block h-full rounded-full bg-primary transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-card p-7">
            <h2 className="font-display text-xl font-bold">Account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {signedIn ? "You're signed in on this device." : "Demo session — not signed in."}
            </p>
            {signedIn ? (
              <Dialog open={signOutOpen} onOpenChange={setSignOutOpen}>
                <DialogTrigger asChild>
                  <button className="mt-5 w-full rounded-xl border border-border py-3 font-bold transition-colors hover:border-destructive hover:text-destructive">
                    Sign out
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Sign out?</DialogTitle>
                    <DialogDescription>
                      You'll need to sign in again to sync your watchlist, ratings and history
                      across devices.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setSignOutOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        setSignedIn(false);
                        setSignOutOpen(false);
                      }}
                    >
                      Sign out
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ) : (
              <Link
                to="/login"
                className="mt-5 block rounded-xl bg-primary py-3 text-center font-bold text-primary-foreground shadow-coral"
              >
                Sign in
              </Link>
            )}
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
