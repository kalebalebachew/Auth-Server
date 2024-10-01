import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../interfaces/user"; // Adjust as necessary

export interface AuthenticatedRequest extends Request {
  user?: User; 
}

interface JwtPayload {
  id: User["id"]; 
  role: User["role"]; 
}

export const auth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ msg: "No token, authorization denied" });
    return; 
  }

  if (!process.env.JWT_SECRET) {
    res.status(500).json({ msg: "JWT secret not configured" });
    return; 
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

    req.user = {
      id: decoded.id,
      role: decoded.role,
      username: '',
      email: '',    
      password: '', 
      createdAt: new Date() 
    };

    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ msg: "Token is not valid" });
    return; 
  }
};
