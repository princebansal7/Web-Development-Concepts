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

export const insertAddressData = async (
    userId: number,
    city: string,
    pincode: string,
    country: string
): Promise<void> => {
    try {
        const insertQuery = `
            INSERT INTO addresses (user_id, city, pincode, country)
            VALUES ($1, $2, $3, $4)
        `;
        await client.query(insertQuery, [userId, city, pincode, country]);
        console.log("Inserted address successfully.");
    } catch (error) {
        console.error("Error inserting address:", error);
    }
};

export const insertUserAndAddress = async (
    username: string,
    email: string,
    password: string,
    city: string,
    country: string,
    pincode: string
): Promise<void> => {
    try {
        // Start transaction
        await client.query("BEGIN");

        // Insert user
        const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING user_id;
        `;
        const userRes = await client.query(insertUserText, [
            username,
            email,
            password,
        ]);
        const userId = userRes.rows[0].user_id;

        // Insert address using the returned user ID
        const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, pincode)
            VALUES ($1, $2, $3, $4);
        `;
        await client.query(insertAddressText, [userId, city, country, pincode]);

        // Commit transaction
        await client.query("COMMIT");

        console.log("User and address inserted successfully");
    } catch (err) {
        await client.query("ROLLBACK"); // Roll back the transaction on error
        console.error("Error during transaction, rolled back.", err);
        throw err;
    }
};
