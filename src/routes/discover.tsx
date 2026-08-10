import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Compass } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { AnimeCard } from "@/components/AnimeCard";
import { ANIME, GENRES } from "@/data/anime";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover anime by genre, mood and community score | Aniverse" },
      {
        name: "description",
        content:
          "Filter a hand-picked anime library by genre in real time and sort by community rating, newest release or popularity.",
      },
      { property: "og:title", content: "Discover your next obsession | Aniverse" },
      {
        property: "og:description",
        content: "Real-time genre filtering and community-rated anime discovery.",
      },
    ],
  }),
  component: Discover,
});

const sorts = ["Top rated", "Newest", "Most popular", "A–Z"] as const;

function Discover() {
  const [genre, setGenre] = useState("All shows");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Top rated");

  const shows = useMemo(() => {
    const list = ANIME.filter((a) => genre === "All shows" || a.genres.includes(genre));
    const sorted = [...list];
    if (sort === "Top rated") sorted.sort((a, b) => b.score - a.score);
    if (sort === "Newest") sorted.sort((a, b) => b.year - a.year || b.score - a.score);
    if (sort === "Most popular")
      sorted.sort((a, b) => parseFloat(b.members) - parseFloat(a.members));
    if (sort === "A–Z") sorted.sort((a, b) => a.title.localeCompare(b.title));
    return sorted;
  }, [genre, sort]);

  return (
    <AppShell>
      <header className="stagger grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="min-w-0">
          <p className="eyebrow">The library</p>
          <h1 className="display-title mt-4 text-[clamp(2.5rem,6vw,4.25rem)]">
            Discover your
            <br />
            <span className="text-primary">next obsession.</span>
          </h1>
        </div>
        <p className="text-muted-foreground lg:pb-3">
          Explore a hand-picked universe of stories. Filter by mood, genre, or let the community
          lead the way.
        </p>
      </header>

      <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="flex min-w-0 flex-wrap gap-2.5">
          {GENRES.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                genre === g
                  ? "border-ink bg-ink text-ink-foreground shadow-coral"
                  : "border-border bg-card text-foreground hover:border-primary hover:text-primary",
              )}
            >
              {g}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as (typeof sorts)[number])}
          className="h-11 rounded-full border border-border bg-card px-5 text-sm font-semibold outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
          aria-label="Sort shows"
        >
          {sorts.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {shows.length} {shows.length === 1 ? "show" : "shows"} · {genre}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
        {shows.map((a, i) => (
          <AnimeCard key={a.id} anime={a} index={i} />
        ))}
      </div>

      {shows.length === 0 && (
        <div className="mt-16 rounded-3xl border border-dashed border-border bg-card p-16 text-center animate-pop">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-lilac">
            <Compass className="h-6 w-6 text-lilac-foreground" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold">Nothing here yet</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            Try a different genre filter.
          </p>
        </div>
      )}
    </AppShell>
  );
}
