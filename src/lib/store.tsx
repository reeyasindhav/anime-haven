import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Store = {
  watchlist: string[];
  ratings: Record<string, number>;
  signedIn: boolean;
  toggleWatch: (id: string) => void;
  isWatched: (id: string) => boolean;
  rate: (id: string, value: number) => void;
  setSignedIn: (v: boolean) => void;
};

const StoreContext = createContext<Store | null>(null);

const KEY = "aniverse.state.v1";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [watchlist, setWatchlist] = useState<string[]>(["moonlit-atelier"]);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.watchlist)) setWatchlist(parsed.watchlist);
        if (parsed.ratings) setRatings(parsed.ratings);
        if (typeof parsed.signedIn === "boolean") setSignedIn(parsed.signedIn);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ watchlist, ratings, signedIn }));
    } catch {
      /* ignore */
    }
  }, [watchlist, ratings, signedIn]);

  const toggleWatch = useCallback((id: string) => {
    setWatchlist((list) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]));
  }, []);

  const rate = useCallback((id: string, value: number) => {
    setRatings((r) => ({ ...r, [id]: value }));
  }, []);

  const value = useMemo<Store>(
    () => ({
      watchlist,
      ratings,
      signedIn,
      toggleWatch,
      isWatched: (id: string) => watchlist.includes(id),
      rate,
      setSignedIn,
    }),
    [watchlist, ratings, signedIn, toggleWatch, rate],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
