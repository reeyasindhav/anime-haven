import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { AnimeCard } from "@/components/AnimeCard";
import { ANIME } from "@/data/anime";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/watchlist")({
  head: () => ({
    meta: [
      { title: "My watchlist — saved anime | Aniverse" },
      {
        name: "description",
        content:
          "Everything you've saved for later, in one organised watchlist with scores, genres and quick access to episodes.",
      },
      { property: "og:title", content: "My watchlist | Aniverse" },
      { property: "og:description", content: "Your saved anime, organised and ready to watch." },
    ],
  }),
  component: Watchlist,
});

function Watchlist() {
  const { watchlist } = useStore();
  const saved = ANIME.filter((a) => watchlist.includes(a.id));

  return (
    <AppShell>
      <header className="stagger">
        <p className="eyebrow">Your library</p>
        <h1 className="display-title mt-4 text-[clamp(2.5rem,6vw,4.25rem)]">
          Saved for
          <br />
          <span className="text-primary">later tonight.</span>
        </h1>
        <p className="mt-5 max-w-lg text-muted-foreground">
          {saved.length} title{saved.length === 1 ? "" : "s"} waiting. Tap the heart on any card to
          add or remove a show.
        </p>
      </header>

      {saved.length ? (
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
          {saved.map((a, i) => (
            <AnimeCard key={a.id} anime={a} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-[1.75rem] border border-dashed border-border bg-card p-16 text-center animate-pop">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-lilac">
            <Heart className="h-6 w-6 text-lilac-foreground" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold">Your watchlist is empty</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            Save shows while you browse and they'll queue up here.
          </p>
          <Link
            to="/discover"
            className="mt-7 inline-flex rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-coral transition-transform hover:-translate-y-1"
          >
            Discover shows →
          </Link>
        </div>
      )}
    </AppShell>
  );
}
