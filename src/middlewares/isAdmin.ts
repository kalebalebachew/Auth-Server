import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
  if (req.user && req.user.role === 'admin') {
    next(); 
  } else {
    res.status(403).json({ msg: "Access denied. Admins only." });
  }
};
