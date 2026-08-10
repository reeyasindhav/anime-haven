import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Star } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { AnimeCard, SectionHeading } from "@/components/AnimeCard";
import { ANIME, CONTINUE_WATCHING, byId } from "@/data/anime";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Your Aniverse home — continue watching & trending" },
      {
        name: "description",
        content:
          "Pick up where you left off, see what's featured this week and browse the shows trending across the Aniverse community.",
      },
      { property: "og:title", content: "Your Aniverse home" },
      {
        property: "og:description",
        content: "Continue watching, featured picks and trending anime in one dashboard.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const hero = ANIME[0]!;

  return (
    <AppShell>
      <section className="stagger relative overflow-hidden rounded-[1.75rem] bg-ink">
        <img
          src={hero.banner}
          alt={`${hero.title} banner`}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        <div className="relative max-w-xl px-6 py-12 sm:px-10 sm:py-16">
          <p className="text-xs font-bold tracking-[0.2em] text-sun">● FEATURED THIS WEEK</p>
          <h1 className="display-title mt-4 text-[clamp(2.25rem,5vw,3.75rem)] text-ink-foreground">
            Find your
            <br />
            <span className="text-primary">next story.</span>
          </h1>
          <p className="mt-5 max-w-md text-ink-muted">
            Unforgettable worlds, bold characters, and stories that stay with you. Curated for
            curious fans.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/anime/$animeId"
              params={{ animeId: hero.id }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-coral transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <Play className="h-4 w-4 fill-current" /> Start exploring
            </Link>
            <Link
              to="/seasonal"
              className="inline-flex items-center gap-2 font-semibold text-ink-foreground transition-all hover:gap-4"
            >
              View seasonal calendar →
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-between gap-4 px-6 pb-6 sm:absolute sm:inset-x-0 sm:bottom-0 sm:px-10 sm:pb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/60 px-3 py-1.5 text-xs font-bold text-ink-foreground backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-sun text-sun" /> {hero.score} Community score
          </span>
          <div className="hidden text-right sm:block">
            <p className="text-xs text-primary">01</p>
            <p className="font-display text-2xl font-bold uppercase text-ink-foreground">
              {hero.title}
            </p>
            <p className="text-[11px] tracking-[0.18em] text-ink-muted">
              {hero.genres.join(" · ").toUpperCase()} · {hero.episodes} EPISODES
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading title="Continue watching" action="View history" to="/history" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {CONTINUE_WATCHING.map((c, i) => {
            const a = byId(c.animeId)!;
            return (
              <Link
                key={c.animeId}
                to="/anime/$animeId"
                params={{ animeId: a.id }}
                className="stagger group rounded-2xl border border-border bg-card p-3 card-lift"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={a.banner}
                    alt={a.title}
                    loading="lazy"
                    className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-sun text-sun-foreground transition-transform group-hover:scale-110">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                </div>
                <div className="px-2 pb-1 pt-3">
                  <h3 className="truncate font-display font-bold">{a.title}</h3>
                  <div className="mt-1 flex items-center justify-between gap-3 text-sm text-muted-foreground">
                    <span className="truncate">
                      Episode {String(c.episode).padStart(2, "0")} of {c.total}
                    </span>
                    <span className="shrink-0 font-bold text-primary">{c.progress}%</span>
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-muted">
                    <span
                      className="block h-full rounded-full bg-primary transition-all duration-700"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading title="Trending right now" action="See all" to="/discover" />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4">
          {ANIME.slice(3, 7).map((a, i) => (
            <AnimeCard key={a.id} anime={a} index={i} />
          ))}
        </div>
      </section>

      <section className="mt-12 overflow-hidden rounded-[1.75rem] bg-lilac px-7 py-10 sm:px-12">
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-[0.2em] text-lilac-foreground">
              ✦ THE ANIVERSE GUIDE
            </p>
            <h2 className="display-title mt-3 text-4xl text-lilac-foreground">
              What's airing
              <br />
              <span className="text-primary">this season?</span>
            </h2>
            <Link
              to="/seasonal"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-bold text-ink-foreground transition-transform hover:-translate-y-1"
            >
              Open calendar →
            </Link>
          </div>
          <div className="text-right">
            <p className="font-display text-xl font-bold text-lilac-foreground">SPRING</p>
            <p className="display-title text-6xl text-primary">2026</p>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
