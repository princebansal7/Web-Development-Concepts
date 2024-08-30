import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL environment variable is not set.");
}

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
    const client = new Client({ connectionString: process.env.POSTGRES_URL });

    try {
        await client.connect(); // Ensure client connection is established
        const query = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const result = await client.query(query, values);

        if (result.rows.length > 0) {
            // Output user data, as unique email, only 1 value will be found
            console.log("User found:", result.rows[0]);
            return result.rows[0]; // Return the user data
        } else {
            console.log("No user found with the given email.");
            return null; // Return null if no user was found
        }
    } catch (err) {
        console.error("Error during fetching user:", err);
        throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end(); // Close the client connection
    }
}

// Example usage
getUser("prince.bansal@gmail.com").catch(console.error);
