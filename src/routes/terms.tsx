import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Aniverse" },
      {
        name: "description",
        content: "Aniverse terms of service. Simple, fair rules for using the platform.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
        <p className="eyebrow">Terms of Service</p>
        <h1 className="display-title mt-5 text-[clamp(2.25rem,5vw,3.5rem)]">
          The rules of
          <br />
          <span className="text-primary">the road.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          These terms keep Aniverse fair, safe, and respectful for everyone. By using the platform,
          you agree to them.
        </p>

        <div className="mt-14 space-y-12 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Acceptance</h2>
            <p className="mt-3">
              By creating an account or using Aniverse, you agree to these terms. If you do not
              agree, please do not use the service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Accounts</h2>
            <p className="mt-3">
              You are responsible for keeping your account secure and for all activity under it. Do
              not share credentials or impersonate others.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Acceptable use</h2>
            <p className="mt-3">
              Do not misuse the platform, attempt to access restricted areas, or interfere with
              normal operation. Respect other users and the content you discover.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Content &amp; copyright
            </h2>
            <p className="mt-3">
              Aniverse does not host copyrighted video files. Metadata, posters, and descriptions
              are used for informational purposes. Rights holders may request removal.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Limitation of liability
            </h2>
            <p className="mt-3">
              The service is provided as-is. We are not liable for indirect or incidental damages
              arising from use or inability to use the platform.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Changes</h2>
            <p className="mt-3">
              We may update these terms occasionally. Continued use after changes means you accept
              the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Contact</h2>
            <p className="mt-3">Questions about these terms? Reach us at legal@aniverse.demo.</p>
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
