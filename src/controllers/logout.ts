import { Request, Response } from "express";

export const logoutUser = (req: Request, res: Response) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (token) {
  }

  req.user = undefined;

   res.status(200).json({ msg: "Logged out Byeee" });
};
