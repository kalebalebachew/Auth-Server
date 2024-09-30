import { db } from "../config/db";
import { UsersTable } from "../database/schema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const role = "user";
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await db
      .insert(UsersTable)
      .values({ username, email, password: hashedPassword, role });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};
