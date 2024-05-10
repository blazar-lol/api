import { Hono } from "hono";
import { getUserById, getUsers } from "../utils/users/db";
import { Env } from "../context";
import { openConnection } from "../utils/db";

export const usersRoute = new Hono<{ Bindings: Env }>()
  .get("/", async (c) => {
    const { db, pool } = await openConnection(c.env.DATABASE_URL);

    const users = await getUsers(db);

    pool.end();

    return c.json(users);
  })
  .get("/:id", async (c) => {
    const { db, pool } = await openConnection(c.env.DATABASE_URL);

    const id = c.req.param("id");
    const user = await getUserById(id, db);

    pool.end();

    if (!user) {
      return c.notFound();
    }

    return c.json(user);
  });
