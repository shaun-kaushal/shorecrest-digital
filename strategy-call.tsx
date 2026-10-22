import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/strategy-call")({
  beforeLoad: () => {
    throw redirect({ to: "/strategy", replace: true, statusCode: 301 });
  },
});
