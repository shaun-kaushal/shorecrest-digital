import { createFileRoute, redirect } from "@tanstack/react-router";

// ClientForge has been retired; send old links to the services overview.
export const Route = createFileRoute("/services/scaling")({
  beforeLoad: () => {
    throw redirect({ to: "/services", replace: true, statusCode: 301 });
  },
});
