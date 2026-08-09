import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, ChevronRight, Plus } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { SCHEDULE, byId } from "@/data/anime";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/seasonal")({
  head: () => ({
    meta: [
      { title: "Seasonal anime calendar — Spring 2026 line-up | Aniverse" },
      {
        name: "description",
        content:
          "The full weekly seasonal calendar with air times, episode numbers and one-tap reminders for every show currently airing.",
      },
      { property: "og:title", content: "The seasonal line-up | Aniverse" },
      {
        property: "og:description",
        content: "Track every airing anime by day, with times and reminders.",
      },
    ],
  }),
  component: Seasonal,
});

function Seasonal() {
  const [active, setActive] = useState(0);
  const selected = SCHEDULE[active]!;
  const anime = byId(selected.animeId)!;

  return (
    <AppShell>
      <header className="stagger grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
        <div className="min-w-0">
          <p className="eyebrow">Release radar</p>
          <h1 className="display-title mt-4 text-[clamp(2.5rem,6vw,4.25rem)]">
            The seasonal
            <br />
            <span className="text-primary">line-up.</span>
          </h1>
        </div>
        <div className="flex items-center justify-between gap-6 rounded-2xl border border-border bg-card px-6 py-4 shadow-soft">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Current season</p>
            <p className="font-display text-lg font-bold">Spring 2026</p>
          </div>
          <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
        </div>
      </header>

      <div className="mt-10 overflow-x-auto">
        <div className="flex min-w-max border-b border-border">
          {SCHEDULE.map((s, i) => (
            <button
              key={s.day}
              onClick={() => setActive(i)}
              className={cn(
                "relative flex-1 px-8 py-4 text-center transition-colors",
                active === i ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="block text-[11px] font-bold tracking-[0.16em]">{s.day}</span>
              <span className="mt-1 block font-display text-2xl font-bold">{s.date}</span>
              {active === i && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary animate-fade-in" />
              )}
            </button>
          ))}
        </div>
      </div>

      <section
        key={anime.id}
        className="stagger mt-8 overflow-hidden rounded-[1.75rem] bg-ink p-6 sm:p-8"
      >
        <p className="text-xs font-bold tracking-[0.2em] text-sun">● COMING UP NEXT</p>
        <div className="mt-6 grid gap-7 sm:grid-cols-[240px_minmax(0,1fr)]">
          <img
            src={anime.poster}
            alt={anime.title}
            loading="lazy"
            className="h-52 w-full rounded-2xl object-cover sm:h-full"
          />
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-[0.14em] text-primary">
              {selected.day} · {selected.time}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink-foreground">
              {anime.title}
            </h2>
            <p className="mt-3 max-w-lg text-ink-muted">
              Episode {String(selected.episode).padStart(2, "0")} is almost here. Add it to your
              calendar so you never miss a moment.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {anime.genres.map((g) => (
                <span
                  key={g}
                  className="rounded-full bg-ink-soft px-3.5 py-1.5 text-xs font-semibold text-ink-foreground"
                >
                  {g}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => toast.success(`Reminder set for ${anime.title}`)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-coral transition-transform hover:-translate-y-1"
              >
                <Plus className="h-4 w-4" /> Add reminder
              </button>
              <Link
                to="/anime/$animeId"
                params={{ animeId: anime.id }}
                className="inline-flex items-center gap-2 rounded-xl border border-ink-soft px-6 py-3.5 font-bold text-ink-foreground transition-all hover:gap-4"
              >
                Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-bold">Full schedule</h2>
          <p className="shrink-0 text-sm text-muted-foreground">Week of April 14–20</p>
        </div>
        <div className="space-y-3">
          {SCHEDULE.map((s, i) => {
            const a = byId(s.animeId)!;
            return (
              <div
                key={s.day}
                onClick={() => setActive(i)}
                className={cn(
                  "stagger grid cursor-pointer grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft",
                  active === i ? "border-primary/40 bg-secondary" : "border-border bg-card",
                )}
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <div className="w-12 shrink-0 text-center">
                  <p className="font-display text-xl font-bold">{s.date}</p>
                  <p className="text-[10px] font-bold tracking-[0.14em] text-muted-foreground">
                    {s.day}
                  </p>
                </div>
                <img
                  src={a.poster}
                  alt={a.title}
                  loading="lazy"
                  className="h-12 w-16 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-display font-bold">{a.title}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    Episode {String(s.episode).padStart(2, "0")}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3 pr-2">
                  <span className="text-sm font-semibold text-muted-foreground">{s.time}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toast.success(`Reminder set for ${a.title} · Ep ${s.episode}`);
                    }}
                    aria-label={`Remind me about ${a.title}`}
                    className="grid h-8 w-8 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                  >
                    <Bell className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
