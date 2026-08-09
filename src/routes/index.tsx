import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Compass, History, Play, Star } from "lucide-react";
import { ANIME } from "@/data/anime";
import { Logo } from "@/components/AppShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aniverse — One home for every anime you love" },
      {
        name: "description",
        content:
          "Stream, track seasonal releases and keep your watch history in one vibrant place. Aniverse is the anime platform built for fans, not algorithms.",
      },
      { property: "og:title", content: "Aniverse — One home for every anime you love" },
      {
        property: "og:description",
        content:
          "Streaming, seasonal calendar, community ratings and history — finally in one cohesive, art-driven space.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Compass,
    title: "Discovery that has taste",
    body: "Filter by genre and mood in real time. Community scores surface the shows people actually finish, not the ones with the biggest marketing budget.",
  },
  {
    icon: CalendarDays,
    title: "A seasonal calendar that works",
    body: "Every airing show, laid out by day with local times and episode numbers. Set reminders once and never miss a premiere again.",
  },
  {
    icon: History,
    title: "History you can trust",
    body: "Resume mid-episode across devices, revisit what you watched last winter, and keep your entire viewing life in one organised timeline.",
  },
];

function Landing() {
  const hero = ANIME[0]!;
  const strip = [...ANIME.slice(0, 6), ...ANIME.slice(0, 6)];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <div className="min-w-0 [&_span]:!text-foreground [&_.text-primary]:!text-primary">
            <Logo tone="dark" />
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to="/home"
              className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Browse
            </Link>
            <Link
              to="/login"
              className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-coral transition-transform hover:-translate-y-0.5"
            >
              Join free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="stagger min-w-0">
            <p className="eyebrow">The anime universe, uncluttered</p>
            <h1 className="display-title mt-5 text-[clamp(2.75rem,7vw,5.25rem)]">
              Every story
              <br />
              <span className="text-primary">in one place.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Streaming, the seasonal calendar, community ratings and your watch history — stitched
              into a single space that actually looks like it belongs to anime culture.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/home"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-coral transition-transform hover:-translate-y-1"
              >
                <Play className="h-4 w-4 fill-current" /> Start exploring
              </Link>
              <Link
                to="/seasonal"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 font-bold transition-all hover:border-primary hover:gap-4"
              >
                View seasonal calendar →
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                ["12K+", "Titles catalogued"],
                ["1.8M", "Community ratings"],
                ["Weekly", "Calendar sync"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-bold sm:text-3xl">{n}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="stagger relative min-w-0" style={{ animationDelay: "140ms" }}>
            <div className="relative overflow-hidden rounded-[2rem] bg-ink shadow-lift">
              <img
                src={hero.banner}
                alt={`${hero.title} key visual`}
                className="h-[460px] w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-bold text-ink-foreground backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-sun text-sun" /> {hero.score} community score
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink-foreground">
                  {hero.title}
                </h2>
                <p className="mt-1 text-sm tracking-[0.14em] text-ink-muted">
                  {hero.genres.join(" · ").toUpperCase()} · {hero.episodes} EPISODES
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-3xl bg-sun animate-float sm:block" />
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border bg-card py-5">
          <div className="flex w-max animate-marquee gap-10 pr-10">
            {strip.map((a, i) => (
              <span
                key={i}
                className="font-display text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground"
              >
                {a.title} <span className="text-primary">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → solution */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Why we built it</p>
          <h2 className="display-title mt-4 text-[clamp(2rem,4.5vw,3.25rem)]">
            Fans shouldn't need
            <br />
            <span className="text-primary">five tabs open.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Streaming lives on one site, the seasonal chart on another, your history on a third.
            Aniverse collapses that into one interface with a real point of view.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="stagger rounded-3xl border border-border bg-card p-7 card-lift"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lilac">
                <f.icon className="h-5 w-5 text-lilac-foreground" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending preview */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="display-title text-3xl">Trending right now</h2>
          <Link to="/discover" className="shrink-0 text-sm font-semibold text-primary">
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {ANIME.slice(0, 5).map((a, i) => (
            <Link
              key={a.id}
              to="/anime/$animeId"
              params={{ animeId: a.id }}
              className="stagger group"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="overflow-hidden rounded-2xl card-lift">
                <img
                  src={a.poster}
                  alt={a.title}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 truncate font-display font-bold">{a.title}</h3>
              <p className="truncate text-sm text-muted-foreground">{a.genres.join(" · ")}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-lilac px-8 py-14 sm:px-14">
          <span className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-sun/70 animate-float" />
          <div className="relative max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] text-lilac-foreground">
              ✦ THE ANIVERSE CLUB
            </p>
            <h2 className="display-title mt-4 text-[clamp(2rem,4vw,3rem)] text-lilac-foreground">
              Build your library.
              <br />
              <span className="text-primary">It's free.</span>
            </h2>
            <p className="mt-4 text-lilac-foreground/80">
              Ratings, reminders, watchlists and history sync the moment you sign up.
            </p>
            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-bold text-ink-foreground transition-transform hover:-translate-y-1"
            >
              Create your account →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="[&_span]:!text-foreground [&_.text-primary]:!text-primary">
            <Logo tone="dark" />
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link to="/discover" className="hover:text-primary">
              Discover
            </Link>
            <Link to="/seasonal" className="hover:text-primary">
              Seasonal
            </Link>
            <Link to="/watchlist" className="hover:text-primary">
              Watchlist
            </Link>
            <Link to="/login" className="hover:text-primary">
              Log in
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">© 2026 Aniverse. Mock data for demo.</p>
        </div>
      </footer>
    </div>
  );
}
