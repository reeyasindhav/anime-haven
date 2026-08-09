import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import type { Anime } from "@/data/anime";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function AnimeCard({ anime, index = 0 }: { anime: Anime; index?: number }) {
  const { isWatched, toggleWatch, ratings, rate } = useStore();
  const saved = isWatched(anime.id);
  const myRating = ratings[anime.id];

  return (
    <article
      className="group stagger"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-muted card-lift">
        <Link to="/anime/$animeId" params={{ animeId: anime.id }} className="block">
          <img
            src={anime.poster}
            alt={`${anime.title} key visual`}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent" />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-xs font-bold text-ink-foreground backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-sun text-sun" />
            {anime.score.toFixed(1)}
          </span>
        </Link>
        <button
          onClick={() => toggleWatch(anime.id)}
          aria-label={saved ? `Remove ${anime.title} from watchlist` : `Save ${anime.title}`}
          className={cn(
            "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition-all duration-300 hover:scale-110",
            saved ? "bg-card text-primary" : "bg-ink/55 text-ink-foreground",
          )}
        >
          <Heart className={cn("h-[18px] w-[18px]", saved && "fill-primary")} />
        </button>
      </div>
      <h3 className="mt-3 truncate font-display text-base font-bold">
        <Link to="/anime/$animeId" params={{ animeId: anime.id }} className="hover:text-primary">
          {anime.title}
        </Link>
      </h3>
      <p className="truncate text-sm text-muted-foreground">{anime.genres.join(" · ")}</p>
      <button
        onClick={() => rate(anime.id, myRating ? 0 : 5)}
        className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <Star className={cn("h-4 w-4", myRating && "fill-sun text-sun")} />
        {myRating ? "Rated" : "Rate"}
      </button>
    </article>
  );
}

export function SectionHeading({
  title,
  action,
  to,
}: {
  title: string;
  action?: string;
  to?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <h2 className="font-display text-2xl font-bold tracking-tight">{title}</h2>
      {action && to ? (
        <Link
          to={to}
          className="shrink-0 text-sm font-semibold text-muted-foreground transition-all hover:text-primary"
        >
          {action} →
        </Link>
      ) : null}
    </div>
  );
}
