import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL environment variable is not set.");
}

const runDatabaseOperations = async () => {
    // connection string format: postgresql://<username>:<password@host/database>
    const client = new Client({ connectionString: process.env.POSTGRES_URL });
    try {
        await client.connect();
        console.log("Connected to the database.");

        // Create the users table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(100) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await client.query(createTableQuery);
        console.log("Table created successfully.");

        // Insert data into the users table
        const insertQuery = `
            INSERT INTO users (username, email, password)
            VALUES ('princebansal', 'prince.bansal@gmail.com', 'shouldBeHashedIdeally')
        `;
        await client.query(insertQuery);
        console.log("Inserted value successfully.");
    } catch (error) {
        console.error("Error during database operations:", error);
    } finally {
        await client.end();
        console.log("Database connection closed.");
    }
};

runDatabaseOperations();
