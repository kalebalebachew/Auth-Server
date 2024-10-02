import { Request, Response } from "express";
import { db } from "../config/db";
import { UsersTable } from "../database/schema";
import { eq, lt, gte, ne } from "drizzle-orm";
import { Role } from "../database/schema";


export const changeUserRole = async (req: Request, res: Response) => {
  const { role } = req.body;
  const userId = parseInt(req.params.userId);
  const validRoles: Role[] = ["admin", "user", "guest"];
  if (!validRoles.includes(role)) {
     res.status(400).json({ msg: "Invalid role specified." });
  }

  try {
    const result = await db
      .update(UsersTable)
      .set({ role })
      .where(eq(UsersTable.id, userId))
      .execute();

    res.status(200).json({ msg: "User role updated successfully." });
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ msg: "Internal server error." });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);
  
    if (isNaN(userId)) {
       res.status(400).json({ message: 'Invalid user ID' });
    }
  
    try {
      const existingUser = await db.select().from(UsersTable).where(eq(UsersTable.id, userId)).limit(1);
      
      if (existingUser.length === 0) {
         res.status(404).json({ message: 'User not found' });
      }
  
      await db.delete(UsersTable).where(eq(UsersTable.id, userId));
  
       res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
       res.status(500).json({ message: 'Internal server error' });
    }
  };