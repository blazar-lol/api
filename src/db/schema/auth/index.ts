import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: text("id").primaryKey().notNull(),
  email: text("email").unique().notNull(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  passwordHash: text("password_hash").notNull(),
});

export const sessionTable = pgTable("sessions", {
  id: text("id").primaryKey().notNull(),
  expiresAt: timestamp("expires_at", {
    mode: "date",
    withTimezone: true,
  }).notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
});
