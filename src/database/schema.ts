import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  varchar,
  timestamp,
  uniqueIndex,
  pgEnum,
} from "drizzle-orm/pg-core";

const roles = pgEnum("role", ["admin", "user", "guest"]);

export const UsersTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    username: varchar("username").notNull(),
    email: varchar("email").notNull(),
    password: varchar("password").notNull(),
    role: varchar("role").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);
