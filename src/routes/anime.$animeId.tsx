import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, Play, Plus, Star } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { AnimeCard } from "@/components/AnimeCard";
import { ANIME, byId } from "@/data/anime";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/anime/$animeId")({
  loader: ({ params }) => {
    const anime = byId(params.animeId);
    if (!anime) throw notFound();
    return { anime };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Show unavailable | Aniverse" }, { name: "robots", content: "noindex" }],
      };
    }
    const { anime } = loaderData;
    return {
      meta: [
        { title: `${anime.title} — ${anime.genres.join(", ")} anime | Aniverse` },
        { name: "description", content: anime.synopsis.slice(0, 155) },
        { property: "og:title", content: `${anime.title} | Aniverse` },
        { property: "og:description", content: anime.synopsis.slice(0, 155) },
        { property: "og:image", content: anime.banner },
        { name: "twitter:image", content: anime.banner },
      ],
    };
  },
  component: Detail,
});

function Detail() {
  const { anime } = Route.useLoaderData();
  const { isWatched, toggleWatch, ratings, rate } = useStore();
  const saved = isWatched(anime.id);
  const myRating = ratings[anime.id] ?? 0;
  const related = ANIME.filter(
    (a) => a.id !== anime.id && a.genres.some((g) => anime.genres.includes(g)),
  ).slice(0, 4);

  return (
    <AppShell>
      <section className="stagger relative overflow-hidden rounded-[1.75rem] bg-ink">
        <img
          src={anime.banner}
          alt={`${anime.title} banner`}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
        <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <img
            src={anime.poster}
            alt={anime.title}
            className="hidden w-full rounded-2xl object-cover shadow-lift lg:block"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-[0.2em] text-sun">
              {anime.status.toUpperCase()} · {anime.studio.toUpperCase()}
            </p>
            <h1 className="display-title mt-3 text-[clamp(2.25rem,5vw,3.75rem)] text-ink-foreground">
              {anime.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/60 px-3 py-1.5 font-bold text-ink-foreground backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-sun text-sun" /> {anime.score.toFixed(1)}
              </span>
              <span>{anime.year}</span>
              <span>·</span>
              <span>{anime.episodes} episodes</span>
              <span>·</span>
              <span>{anime.members} members</span>
            </div>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">{anime.synopsis}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[...anime.genres, anime.mood].map((g) => (
                <span
                  key={g}
                  className="rounded-full bg-ink-soft px-3.5 py-1.5 text-xs font-semibold text-ink-foreground"
                >
                  {g}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => toast.success(`Now playing · ${anime.title} Ep 01`)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-coral transition-transform hover:-translate-y-1"
              >
                <Play className="h-4 w-4 fill-current" /> Watch episode 1
              </button>
              <button
                onClick={() => toggleWatch(anime.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 font-bold transition-colors",
                  saved
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-ink-soft text-ink-foreground hover:border-primary",
                )}
              >
                <Heart className={cn("h-4 w-4", saved && "fill-primary")} />
                {saved ? "In watchlist" : "Add to watchlist"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="rounded-[1.75rem] border border-border bg-card p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Episodes</h2>
          <div className="mt-5 space-y-3">
            {Array.from({ length: Math.min(6, anime.episodes) }).map((_, i) => (
              <div
                key={i}
                className="stagger grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border p-3 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={anime.banner}
                  alt=""
                  loading="lazy"
                  className="h-14 w-24 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-semibold">
                    Episode {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="truncate text-sm text-muted-foreground">
                    {anime.mood} · 24 min · Subbed & dubbed
                  </p>
                </div>
                <button
                  onClick={() => toast.success(`Playing episode ${i + 1}`)}
                  aria-label={`Play episode ${i + 1}`}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Play className="h-4 w-4 fill-current" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[1.75rem] border border-border bg-card p-6">
            <h2 className="font-display text-lg font-bold">Rate this show</h2>
            <div className="mt-4 flex gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => {
                    rate(anime.id, n);
                    toast.success(`You rated ${anime.title} ${n}/5`);
                  }}
                  aria-label={`Rate ${n} out of 5`}
                  className="transition-transform hover:scale-125"
                >
                  <Star
                    className={cn(
                      "h-7 w-7",
                      n <= myRating ? "fill-sun text-sun" : "text-muted-foreground",
                    )}
                  />
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {myRating ? `Your rating: ${myRating}/5` : "No rating yet"}
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-lilac p-6">
            <p className="text-xs font-bold tracking-[0.18em] text-lilac-foreground">
              ✦ NEXT EPISODE
            </p>
            <p className="mt-3 font-display text-xl font-bold text-lilac-foreground">
              Friday · 23:30
            </p>
            <button
              onClick={() => toast.success("Reminder added")}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-ink-foreground transition-transform hover:-translate-y-1"
            >
              <Plus className="h-4 w-4" /> Add reminder
            </button>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-card p-6">
            <h2 className="font-display text-lg font-bold">Details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Studio", anime.studio],
                ["Status", anime.status],
                ["Episodes", String(anime.episodes)],
                ["Season", `Spring ${anime.year}`],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-bold">More like this</h2>
          <Link to="/discover" className="shrink-0 text-sm font-semibold text-primary">
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
          {related.map((a, i) => (
            <AnimeCard key={a.id} anime={a} index={i} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
