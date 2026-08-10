import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Shield, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aniverse" },
      {
        name: "description",
        content:
          "Aniverse is the anime platform built for fans — streaming discovery, seasonal calendars, watchlists and history in one place.",
      },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  [
    "2024",
    "Aniverse was born from a simple frustration: fans juggling too many tabs just to track what they love.",
  ],
  ["2025", "Launched seasonal calendar, community ratings and cross-device watchlist sync."],
  ["2026", "Reached 12K+ titles, 1.8M community ratings and a global fan community."],
];

const values = [
  {
    icon: Heart,
    title: "Fan-first",
    body: "Every feature is designed around your experience, not advertising profiles or engagement metrics.",
  },
  {
    icon: Shield,
    title: "Privacy by default",
    body: "We collect only what's needed to make Aniverse work. No selling data, no third-party ad trackers.",
  },
  {
    icon: Sparkles,
    title: "Crafted, not cloned",
    body: "The UI is built for anime culture — art-forward, calm, and intentional. No dark patterns, no clutter.",
  },
  {
    icon: Users,
    title: "Community led",
    body: "Community scores, reviews and seasonal reminders are shaped by fans. Aniverse listens first.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link to="/" className="[&_span]:!text-foreground [&_.text-primary]:!text-primary">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary">
              <span className="h-3 w-3 rounded-full border-[3px] border-ink" />
            </span>
            <span className="ml-2.5 font-display text-xl font-bold tracking-tight text-foreground">
              ani<span className="text-primary">verse</span>
            </span>
          </Link>
          <Link
            to="/"
            className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-sun/5" />
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="eyebrow">About Aniverse</p>
            <h1 className="display-title mt-5 text-[clamp(2.25rem,5vw,3.5rem)]">
              The home for
              <br />
              <span className="text-primary">every story you love.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
              Aniverse brings streaming discovery, seasonal calendars, watchlists, ratings and
              history into one art-driven space — built for fans, not algorithms.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            <div>
              <h2 className="font-display text-2xl font-bold">Our mission</h2>
              <p className="mt-4 text-muted-foreground">
                Anime fans deserve a home that respects their time, taste and privacy. Too many
                platforms treat anime as a content bucket to maximise watch-time. Aniverse is
                different: we believe discovery should feel personal, history should stay yours, and
                the calendar should actually work.
              </p>
              <p className="mt-4 text-muted-foreground">
                We're here to replace the five-tab workflow with one calm, cohesive space — where
                community scores surface the shows people actually finish, seasonal reminders never
                miss a premiere, and your watchlist travels with you across devices.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {[
                ["12K+", "Titles"],
                ["1.8M", "Ratings"],
                ["Weekly", "Calendar sync"],
                ["2026", "Founded"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <p className="font-display text-3xl font-bold">{n}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="eyebrow">Our story</p>
            <h2 className="display-title mt-4 text-[clamp(2rem,4.5vw,3rem)]">
              From frustration
              <br />
              <span className="text-primary">to a real product.</span>
            </h2>
            <div className="mt-10 space-y-6">
              {milestones.map(([year, text]) => (
                <div
                  key={year}
                  className="stagger grid gap-4 rounded-2xl border border-border bg-background p-6 sm:grid-cols-[auto_1fr] sm:items-start"
                  style={{ animationDelay: "0ms" }}
                >
                  <span className="font-display text-lg font-bold text-primary">{year}</span>
                  <p className="text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow">What guides us</p>
          <h2 className="display-title mt-4 text-[clamp(2rem,4.5vw,3rem)]">
            Principles we
            <br />
            <span className="text-primary">actually follow.</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="stagger rounded-3xl border border-border bg-card p-7 card-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lilac">
                  <v.icon className="h-5 w-5 text-lilac-foreground" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="eyebrow text-sun">Built in public</p>
            <h2 className="display-title mt-4 text-[clamp(2rem,4.5vw,3rem)] text-ink-foreground">
              Small team,
              <br />
              <span className="text-primary">big care.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-ink-muted">
              Aniverse is made by a tight team of designers, developers and anime fans. We ship
              carefully, listen to feedback, and treat every pixel as part of the experience. No
              growth hacks, no dark patterns — just a calmer place for anime.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Design", "Art-forward UI, built for long sessions."],
                ["Engineering", "Fast, accessible, and respectful of your device."],
                ["Community", "Feedback shapes every new feature."],
              ].map(([role, text]) => (
                <div key={role} className="rounded-2xl border border-ink-soft bg-ink-soft/50 p-6">
                  <p className="font-display text-lg font-bold text-ink-foreground">{role}</p>
                  <p className="mt-2 text-sm text-ink-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="rounded-[1.75rem] border border-border bg-card p-8 sm:p-12">
            <p className="eyebrow">Get in touch</p>
            <h2 className="display-title mt-4 text-[clamp(2rem,4.5vw,3rem)]">Say hello.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Questions, feedback, press, or just want to talk anime? We read every message.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="mailto:hello@aniverse.demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-coral transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                hello@aniverse.demo
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-4 font-bold transition-all hover:border-primary hover:gap-4"
              >
                Join free →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="[&_span]:!text-foreground [&_.text-primary]:!text-primary">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary">
                <span className="h-3 w-3 rounded-full border-[3px] border-ink" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                ani<span className="text-primary">verse</span>
              </span>
            </Link>
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
            <Link to="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">© 2026 Aniverse. Mock data for demo.</p>
        </div>
      </footer>
    </div>
  );
}
