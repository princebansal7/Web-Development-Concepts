import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL environment variable is not set.");
}

// Async function to insert data into a table (also Preventing SQL Injection)
async function insertData(username: string, email: string, password: string) {
    const client = new Client({ connectionString: process.env.POSTGRES_URL });

    try {
        await client.connect(); // Ensure client connection is established

        // Use parameterized query to prevent SQL injection
        const insertQuery =
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values); // putting values separately

        console.log("Insertion success:", res); // Output insertion result
    } catch (err) {
        console.error("Error during the insertion:", err);
    } finally {
        await client.end(); // Close the client connection
    }
}

insertData("john", "john@gmail.com", "832u23302");
