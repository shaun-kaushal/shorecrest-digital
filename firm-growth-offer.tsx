import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/firm-growth-offer")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
