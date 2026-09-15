import { z } from "zod";
const schema = z.object({
  DATABASE_URL: z.url(),
  APP_URL: z.url().default("http://localhost:4321"),
  SENTRY_DSN: z.url().optional(),
});
export function serverEnv() {
  return schema.parse({
    DATABASE_URL: import.meta.env.DATABASE_URL,
    APP_URL: import.meta.env.APP_URL,
    SENTRY_DSN: import.meta.env.SENTRY_DSN || undefined,
  });
}
