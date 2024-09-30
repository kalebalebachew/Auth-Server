import { db } from "../config/db";
import { UsersTable } from "../database/schema";
import { Request, Response } from "express";


export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const result = await db
    .insert(UsersTable)
    .values({ username, email, password });
};
