import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  pgEnum,
} from "drizzle-orm/pg-core";

const roleEnum = pgEnum("role", ["admin", "user", "guest"]);

export const UsersTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    username: text("username").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    role: roleEnum("role").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);
