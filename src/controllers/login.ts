import { db } from "../config/db";
import jwt from "jsonwebtoken";
import { eq, lt, gte, ne } from "drizzle-orm";
import { UsersTable } from "../database/schema";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const [user] = await db
      .select({
        id: UsersTable.id,
        email: UsersTable.email,
        password: UsersTable.password,
        role: UsersTable.role,
      }) 
      .from(UsersTable) 
      .where(eq(UsersTable.email, email));

    if (!user) {
      res.status(404).json({ msg: "whoopsie no user with that email bro" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).json({ msg: "wrong password you ain't getting in" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET as jwt.Secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "whoops the server tweaked" });
  }
};
