import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/accelerator-offer")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
