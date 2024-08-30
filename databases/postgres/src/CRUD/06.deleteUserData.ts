import { client } from "./01.connectingToDB";

export const deleteUser = async (username: string): Promise<void> => {
    try {
        const deleteQuery = `
            DELETE FROM users
            WHERE username = $1
            RETURNING *;
        `;
        const result = await client.query(deleteQuery, [username]);

        if (result.rowCount && result.rowCount > 0) {
            console.log(`User '${username}' deleted successfully.`);
        } else {
            console.log(`User '${username}' not found.`);
        }
    } catch (error) {
        console.error("Error deleting user:", error);
    }
};
