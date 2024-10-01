import { Request, Response, NextFunction } from 'express';
import { Role } from '../database/schema'; 
import user from '../types/custom'
export default function roleCheck(roles: Role[]) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.user || !roles.includes(req.user.role as Role)) {
    res.status(403).json({ msg: `Role ${req.user?.role || 'unknown'} not authorized` });
    }
  };
}
