import { createFileRoute } from "@tanstack/react-router";
import { AuthForm, AuthLayout } from "@/components/AuthLayout";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in to Aniverse" },
      {
        name: "description",
        content: "Sign in to sync your watchlist, ratings, reminders and viewing history.",
      },
      { property: "og:title", content: "Log in to Aniverse" },
      { property: "og:description", content: "Sync your watchlist, ratings and history." },
    ],
  }),
  component: () => (
    <AuthLayout
      eyebrow="Welcome back"
      title="Pick up where"
      accent="you left off."
      subtitle="Your watchlist, ratings and reminders are exactly where you left them."
    >
      <AuthForm mode="login" />
    </AuthLayout>
  ),
});
