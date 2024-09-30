import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from '../database/schema';

const db = drizzle(sql, { schema });

export { db };
