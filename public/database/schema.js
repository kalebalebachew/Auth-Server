"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.UsersTable = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    username: (0, pg_core_1.text)("username").notNull(),
    email: (0, pg_core_1.text)("email").notNull(),
    password: (0, pg_core_1.text)("password").notNull(),
    createdAt: (0, pg_core_1.timestamp)("createdAt").defaultNow().notNull(),
}, (users) => {
    return {
        uniqueIdx: (0, pg_core_1.uniqueIndex)("unique_idx").on(users.email),
    };
});
