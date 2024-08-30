import { client } from "./01.connectingToDB";

export const readUserByEmail = async (email: string): Promise<void> => {
    try {
        const readQuery = `
            SELECT * FROM users
            WHERE email = $1;
        `;
        const result = await client.query(readQuery, [email]);

        if (result.rowCount && result.rowCount > 0) {
            console.log(`User with email '${email}' found:`);
            console.log(result.rows[0]);
        } else {
            console.log(`User with email '${email}' not found.`);
        }
    } catch (error) {
        console.error("Error reading user data:", error);
    }
};
