import { client } from "./01.connectingToDB";

export const insertUserData = async (
    username: string,
    email: string,
    password: string
): Promise<void> => {
    try {
        const insertQuery = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
        `;
        await client.query(insertQuery, [username, email, password]);
        console.log("Inserted value successfully.");
    } catch (error) {
        console.error("Error inserting values:", error);
    }
};
