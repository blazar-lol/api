import type { Config } from "drizzle-kit";

export default {
  dialect: "postgresql",
  out: ".drizzle",
  schema: ["src/db/schema/auth/*"],
} satisfies Config;
