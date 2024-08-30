import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL environment variable is not set.");
}

export const client = new Client({
    connectionString: process.env.POSTGRES_URL,
});

export const connectToDatabase = async (): Promise<void> => {
    try {
        await client.connect();
        console.log("Connected to the database.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
};

export const closeDatabaseConnection = async (): Promise<void> => {
    try {
        await client.end();
        console.log("Database connection closed.");
    } catch (error) {
        console.error("Error closing the database connection:", error);
    }
};
