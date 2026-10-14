import { createServerFn } from "@tanstack/react-start";

export const getGaMeasurementId = createServerFn({ method: "GET" }).handler(
  async () => {
    return process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"] ?? null;
  },
);
