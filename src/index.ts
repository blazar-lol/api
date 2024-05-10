import { Hono } from "hono";
import { Env } from "./context";
import { usersRoute } from "./routes/users";

const app = new Hono<{ Bindings: Env }>();

app.basePath("/api").route("/users", usersRoute);

export default app;
