import { db } from "../config/db";
import { eq, lt, gte, ne } from "drizzle-orm";
import { UsersTable } from "../database/schema";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

  try {
    const [user] = await db
      .select({
        username: UsersTable.username,
        password: UsersTable.password,
      })
      .from(UsersTable)
      .where(eq(UsersTable.username, username));

    if (!user) {
      res
        .status(404)
        .json({ msg: "whoopsie no user with that username bro" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
       res
        .status(400)
        .json({ msg: "wrong password you ain't getting in" });
    }

     res.status(200).json({ msg: "Login successful, there you go!" });
  } catch (error) {
    console.error(error);
     res.status(500).json({ msg: "whoops the server tweaked" });
  }
};
