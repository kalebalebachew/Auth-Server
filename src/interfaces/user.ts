import { UsersTable, Role } from '../database/schema'; // Adjust the path as necessary

export type User = {
  id: number;
  username: string;
  email: string;
  password: string; 
  role: Role; 
  createdAt: Date; 
};