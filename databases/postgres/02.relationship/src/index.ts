import {
    connectToDatabase,
    closeDatabaseConnection,
} from "./db-operations/01.connectingToDB";
import {
    createUserTable,
    createAddressTable,
} from "./db-operations/02.createTable";
import {
    insertUserData,
    insertAddressData,
    insertUserAndAddress,
} from "./db-operations/03.insertData";
import { getUserDetailsWithAddress } from "./db-operations/04.getDataJoins";

const runDatabaseOperations = async (): Promise<void> => {
    await connectToDatabase();

    await createUserTable();
    await insertUserData(
        "prince",
        "prince.bansal007@hotmail.com",
        "shouldBeHashedIdeally"
    );
    await createAddressTable();
    await insertAddressData(1, "Chandigarh", "160003", "India");
    await insertAddressData(1, "Mumbai", "400098", "India");
    await insertAddressData(1, "Bengaluru", "560066", "India");
    await insertUserAndAddress(
        "Tanjiro",
        "demon.slayer@ninja.com",
        "xxx007",
        "Japan",
        "Tokyo",
        "101010"
    );
    await insertAddressData(2, "Konoha", "707070", "Japan");
    await getUserDetailsWithAddress("1");
    await getUserDetailsWithAddress("2");
    await closeDatabaseConnection();
};

runDatabaseOperations();

/*
Output:

        Connected to the database.
        Table created successfully.
        Inserted value successfully.
        Table created successfully.
        Inserted address successfully.
        Inserted address successfully.
        Inserted address successfully.
        User and address inserted successfully
        Inserted address successfully.
        User and address found: {
        user_id: 1,
        username: 'prince',
        email: 'prince.bansal007@hotmail.com',
        city: 'Chandigarh',
        pincode: '160003',
        country: 'India'
        }
        User and address found: {
        user_id: 2,
        username: 'Tanjiro',
        email: 'demon.slayer@ninja.com',
        city: 'Japan',
        pincode: '101010',
        country: 'Tokyo'
        }
        Database connection closed.

*/
