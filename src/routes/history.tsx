import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock3, Play, Trash2 } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { HISTORY, byId } from "@/data/anime";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Watch history — every episode you've finished | Aniverse" },
      {
        name: "description",
        content:
          "An organised timeline of everything you've watched, with episode numbers, runtime and one-tap resume.",
      },
      { property: "og:title", content: "Your watch history | Aniverse" },
      { property: "og:description", content: "A clean timeline of every episode you've finished." },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  const [items, setItems] = useState(HISTORY);
  const minutes = items.reduce((n, i) => n + i.minutes, 0);

  return (
    <AppShell>
      <header className="stagger grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-end">
        <div className="min-w-0">
          <p className="eyebrow">Your library</p>
          <h1 className="display-title mt-4 text-[clamp(2.5rem,6vw,4.25rem)]">
            Everything
            <br />
            <span className="text-primary">you've watched.</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            [String(items.length), "Episodes"],
            [`${Math.round(minutes / 60)}h ${minutes % 60}m`, "Watch time"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-border bg-card px-6 py-4 shadow-soft">
              <p className="font-display text-2xl font-bold">{v}</p>
              <p className="text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="mt-10 space-y-3">
        {items.map((h, i) => {
          const a = byId(h.animeId)!;
          return (
            <div
              key={`${h.animeId}-${h.episode}`}
              className="stagger grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <Link to="/anime/$animeId" params={{ animeId: a.id }} className="shrink-0">
                <img
                  src={a.poster}
                  alt={a.title}
                  loading="lazy"
                  className="h-14 w-20 rounded-xl object-cover"
                />
              </Link>
              <div className="min-w-0">
                <p className="truncate font-display font-bold">{a.title}</p>
                <p className="truncate text-sm text-muted-foreground">
                  Episode {String(h.episode).padStart(2, "0")} · {h.minutes} min
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock3 className="h-3.5 w-3.5" /> {h.watchedAt}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 pr-1">
                <Link
                  to="/anime/$animeId"
                  params={{ animeId: a.id }}
                  aria-label={`Rewatch ${a.title}`}
                  className="grid h-9 w-9 place-items-center rounded-full bg-secondary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                >
                  <Play className="h-4 w-4 fill-current" />
                </Link>
                <button
                  onClick={() => setItems((list) => list.filter((x) => x !== h))}
                  aria-label={`Remove ${a.title} from history`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border transition-all hover:border-destructive hover:text-destructive hover:scale-110"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
        {items.length === 0 && (
          <div className="rounded-[1.75rem] border border-dashed border-border bg-card p-16 text-center animate-pop">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-lilac">
              <Clock3 className="h-6 w-6 text-lilac-foreground" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold">History cleared</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Start watching and your timeline rebuilds itself.
            </p>
          </div>
        )}
      </section>
    </AppShell>
  );
}
