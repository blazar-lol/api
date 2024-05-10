import { NeonDatabase } from "drizzle-orm/neon-serverless";

export type ServerlessDatabase = NeonDatabase<Record<string, never>>;
