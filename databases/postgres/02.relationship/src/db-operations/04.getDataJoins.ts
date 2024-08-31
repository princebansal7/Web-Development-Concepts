import { client } from "./01.connectingToDB";

// Async function to fetch user data and their address together
export const getUserDetailsWithAddress = async (userId: string) => {
    try {
        const query = `
            SELECT u.user_id, u.username, u.email, a.city, a.pincode, a.country
            FROM users u
            JOIN addresses a ON u.user_id = a.user_id
            WHERE u.user_id = $1
        `;
        const result = await client.query(query, [userId]);

        if (result.rows.length > 0) {
            console.log("User and address found:", result.rows[0]);
            return result.rows[0];
        } else {
            console.log("No user or address found with the given ID.");
            return null;
        }
    } catch (err) {
        console.error("Error during fetching user and address:", err);
        throw err;
    }
};
