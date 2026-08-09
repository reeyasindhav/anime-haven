import { Link, useRouterState } from "@tanstack/react-router";
import {
  CalendarDays,
  Clock3,
  Compass,
  Heart,
  Home,
  Search,
  Sparkles,
  UserRound,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/discover", label: "Discover", icon: Compass },
  { to: "/seasonal", label: "Seasonal", icon: CalendarDays },
] as const;

const library = [
  { to: "/watchlist", label: "Watchlist", icon: Heart },
  { to: "/history", label: "History", icon: Clock3 },
] as const;

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary">
        <span className="h-3 w-3 rounded-full border-[3px] border-ink" />
      </span>
      <span
        className={cn(
          "font-display text-xl font-bold tracking-tight",
          tone === "light" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        ani<span className="text-primary">verse</span>
      </span>
    </Link>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { watchlist } = useStore();

  const item = (to: string, label: string, Icon: typeof Home, badge?: number) => (
    <Link
      key={to}
      to={to}
      onClick={onNavigate}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300",
        pathname === to
          ? "bg-primary text-primary-foreground shadow-coral"
          : "text-ink-muted hover:bg-sidebar-accent hover:text-ink-foreground",
      )}
    >
      <Icon className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:scale-110" />
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {badge ? (
        <span className="grid h-5 min-w-5 shrink-0 place-items-center rounded-full bg-sidebar-accent px-1.5 text-[11px] text-ink-foreground">
          {badge}
        </span>
      ) : null}
    </Link>
  );

  return (
    <nav className="flex flex-1 flex-col gap-8 px-4">
      <div className="space-y-1">
        <p className="px-4 pb-2 text-[11px] font-bold tracking-[0.18em] text-ink-muted">BROWSE</p>
        {nav.map((n) => item(n.to, n.label, n.icon))}
      </div>
      <div className="space-y-1">
        <p className="px-4 pb-2 text-[11px] font-bold tracking-[0.18em] text-ink-muted">
          YOUR LIBRARY
        </p>
        {library.map((n) =>
          item(n.to, n.label, n.icon, n.to === "/watchlist" ? watchlist.length : undefined),
        )}
      </div>
    </nav>
  );
}

function SidebarInner({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-sidebar py-7">
      <div className="px-6 pb-10">
        <Logo />
      </div>
      <NavList onNavigate={onNavigate} />
      <div className="mt-auto space-y-4 px-4 pt-8">
        <div className="relative overflow-hidden rounded-2xl bg-sidebar-accent p-5">
          <span className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-sun/80 animate-float" />
          <Sparkles className="relative h-5 w-5 text-sun" />
          <p className="relative mt-3 font-display text-lg font-bold leading-tight text-ink-foreground">
            Find your next
            <br />
            favorite story.
          </p>
          <Link
            to="/discover"
            onClick={onNavigate}
            className="relative mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Explore →
          </Link>
        </div>
        <Link
          to="/profile"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-sidebar-accent"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sun font-display font-bold text-sun-foreground">
            R
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold text-ink-foreground">Riya</span>
            <span className="block truncate text-xs text-ink-muted">My profile</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-[280px] lg:block">
        <SidebarInner />
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/60 animate-fade-in"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[280px] animate-pop">
            <SidebarInner onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col lg:pl-[280px]">
        <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:px-8">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="relative min-w-0 max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search anime, characters..."
                className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/60 focus:shadow-coral/30 focus:ring-4 focus:ring-primary/15"
              />
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Link
                to="/profile"
                className="hidden h-10 w-10 place-items-center rounded-full border border-border bg-card transition-colors hover:border-primary sm:grid"
                aria-label="Profile"
              >
                <UserRound className="h-[18px] w-[18px]" />
              </Link>
              <Link
                to="/signup"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-coral transition-transform hover:-translate-y-0.5"
              >
                Join the club <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </header>
        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 sm:py-10">{children}</main>
      </div>
    </div>
  );
}
