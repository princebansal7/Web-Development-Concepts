import { client } from "./01.connectingToDB";

export const updateUser = async (
    username: string,
    newEmail: string,
    newPassword: string
): Promise<void> => {
    try {
        const updateQuery = `
            UPDATE users
            SET email = $1, password = $2
            WHERE username = $3
            RETURNING *;
        `;
        const result = await client.query(updateQuery, [
            newEmail,
            newPassword,
            username,
        ]);

        if (result.rowCount && result.rowCount > 0) {
            console.log(`User '${username}' updated successfully.`);
            console.log("Updated Data:", result.rows[0]);
        } else {
            console.log(`User '${username}' not found.`);
        }
    } catch (error) {
        console.error("Error updating user:", error);
    }
};
