import { userTable } from "../../db/schema/auth";
import { eq } from "drizzle-orm";
import { ServerlessDatabase } from "../../types/db";

export const getUsers = async (db: ServerlessDatabase) => {
  const result = await db.select().from(userTable);

  return result;
};

export const getUserById = async (userId: string, db: ServerlessDatabase) => {
  const result = await db
    .select()
    .from(userTable)
    .where(eq(userTable.id, userId));

  return result[0];
};
