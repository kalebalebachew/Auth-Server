import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    connectionString: process.env.POSTGRES_URL,
});

client.connect()
    .then(() => {
        console.log('Connected to the database successfully!');
        return client.end();
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });