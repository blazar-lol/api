import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

export const openConnection = async (databaseUrl: string) => {
  const pool = new Pool({ connectionString: databaseUrl });
  const db = drizzle(pool);

  return { pool, db };
};
