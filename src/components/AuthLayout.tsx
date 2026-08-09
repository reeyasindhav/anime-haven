import { Link, useNavigate } from "@tanstack/react-router";
import { ANIME } from "@/data/anime";
import { Logo } from "@/components/AppShell";
import { useStore } from "@/lib/store";
import { toast } from "sonner";

export function AuthLayout({
  eyebrow,
  title,
  accent,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const art = ANIME[1]!;
  return (
    <div className="grid min-h-screen lg:grid-cols-[1fr_1.05fr]">
      <div className="flex min-w-0 flex-col justify-center px-6 py-12 sm:px-14">
        <div className="mx-auto w-full max-w-md stagger">
          <div className="[&_span]:!text-foreground [&_.text-primary]:!text-primary">
            <Logo tone="dark" />
          </div>
          <p className="eyebrow mt-12">{eyebrow}</p>
          <h1 className="display-title mt-3 text-[clamp(2.25rem,5vw,3.25rem)]">
            {title}
            <br />
            <span className="text-primary">{accent}</span>
          </h1>
          <p className="mt-4 text-muted-foreground">{subtitle}</p>
          {children}
        </div>
      </div>
      <div className="relative hidden overflow-hidden bg-ink lg:block">
        <img
          src={art.banner}
          alt="Aniverse artwork"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sun">✦ NOW STREAMING</p>
          <p className="mt-3 font-display text-4xl font-bold text-ink-foreground">
            {art.title}
          </p>
          <p className="mt-2 max-w-md text-ink-muted">{art.synopsis.slice(0, 120)}…</p>
        </div>
      </div>
    </div>
  );
}

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const { setSignedIn } = useStore();
  const navigate = useNavigate();

  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSignedIn(true);
        toast.success(mode === "login" ? "Welcome back, Riya" : "Account created — welcome!");
        navigate({ to: "/home" });
      }}
    >
      {mode === "signup" && (
        <label className="block">
          <span className="text-sm font-semibold">Display name</span>
          <input
            required
            placeholder="Riya"
            className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
          />
        </label>
      )}
      <label className="block">
        <span className="text-sm font-semibold">Email</span>
        <input
          type="email"
          required
          placeholder="you@aniverse.tv"
          className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold">Password</span>
        <input
          type="password"
          required
          placeholder="••••••••"
          className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
        />
      </label>
      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-primary py-4 font-bold text-primary-foreground shadow-coral transition-transform hover:-translate-y-1"
      >
        {mode === "login" ? "Log in" : "Create account"}
      </button>
      <p className="text-center text-sm text-muted-foreground">
        {mode === "login" ? (
          <>
            New here?{" "}
            <Link to="/signup" className="font-semibold text-primary">
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already a member?{" "}
            <Link to="/login" className="font-semibold text-primary">
              Log in
            </Link>
          </>
        )}
      </p>
      <p className="text-center text-xs text-muted-foreground">
        Demo only — no credentials are stored or verified.
      </p>
    </form>
  );
}
