import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';  

export default defineConfig({
  schema: './src/database/schema.ts', 
  out: './drizzle/migrations',      
  dialect: 'postgresql',              
  dbCredentials: {
    host: process.env.POSTGRES_HOST || '',
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DATABASE || '',
  },
});
