import { createFileRoute } from "@tanstack/react-router";
import { AuthForm, AuthLayout } from "@/components/AuthLayout";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Join the Aniverse club — free account" },
      {
        name: "description",
        content:
          "Create a free Aniverse account to build watchlists, rate shows and get seasonal release reminders.",
      },
      { property: "og:title", content: "Join the Aniverse club" },
      {
        property: "og:description",
        content: "Watchlists, ratings and seasonal reminders — free.",
      },
    ],
  }),
  component: () => (
    <AuthLayout
      eyebrow="Join the club"
      title="Build your"
      accent="anime library."
      subtitle="Free forever. Watchlists, ratings, reminders and history sync from day one."
    >
      <AuthForm mode="signup" />
    </AuthLayout>
  ),
});
