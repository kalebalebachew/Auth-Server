import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}
interface JwtPayload {
  id: string;
  role: string;
}

export const auth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    if (!process.env.JWT_TOKEN) {
      return res.status(500).json({ msg: "JWT token not configured" });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN) as JwtPayload;

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
