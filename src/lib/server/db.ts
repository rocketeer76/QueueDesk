import { neon } from "@neondatabase/serverless";
import { serverEnv } from "./env";
let client: ReturnType<typeof neon> | undefined;
export function db() {
  client ??= neon(serverEnv().DATABASE_URL);
  return client;
}
