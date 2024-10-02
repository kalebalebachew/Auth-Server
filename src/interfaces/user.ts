import { UsersTable, Role } from '../database/schema'; 

export type User = {
  id: number;
  username: string;
  email: string;
  password: string; 
  role: Role; 
  createdAt: Date; 
};