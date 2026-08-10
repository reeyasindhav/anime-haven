import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Aniverse" },
      {
        name: "description",
        content:
          "Aniverse respects your privacy. Learn how we collect, use, and protect your data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="eyebrow">Privacy Policy</p>
        <h1 className="display-title mt-5 text-[clamp(2.25rem,5vw,3.5rem)]">
          How we handle
          <br />
          <span className="text-primary">your data.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Your privacy is non-negotiable. This page explains what we collect, why we collect it, and
          how you stay in control.
        </p>

        <div className="mt-14 space-y-12 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">What we collect</h2>
            <p className="mt-3">
              We only collect information that helps Aniverse work for you: watch history,
              preferences, watchlist entries, and basic account details (name, email). We do not
              sell this data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">How we use it</h2>
            <p className="mt-3">
              Your data powers features like continue-watching, personalized recommendations,
              seasonal reminders, and cross-device sync. Every feature is designed around your
              experience, not advertising profiles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Your control</h2>
            <p className="mt-3">
              You can update your profile, clear watch history, or delete your account at any time.
              When you delete your account, we remove your personal data within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Security</h2>
            <p className="mt-3">
              We use standard encryption, access controls, and secure storage. While no system is
              perfect, we audit and improve our protections regularly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Cookies &amp; analytics
            </h2>
            <p className="mt-3">
              We use minimal analytics to understand site performance and fix bugs. No third-party
              advertising cookies are used. You can disable non-essential cookies in your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Contact</h2>
            <p className="mt-3">
              Questions or concerns? Reach us at privacy@aniverse.demo. We read every request.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-border pt-10 text-sm text-muted-foreground">
          Last updated: August 2026
        </div>
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
