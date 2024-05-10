import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { Hono } from "hono";
import { userTable } from "./db/schema/auth";
import { Env } from "./context";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  const sql = neon(c.env.DATABASE_URL);
  const db = drizzle(sql);

  const allUsers = await db.select().from(userTable);

  return c.json(allUsers);
});

export default app;
