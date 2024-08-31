import { client } from "./01.connectingToDB";

export const createUserTable = async (): Promise<void> => {
    try {
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
    } catch (error) {
        console.error("Error creating table:", error);
    }
};
