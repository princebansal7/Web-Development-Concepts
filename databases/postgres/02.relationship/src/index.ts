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
    await insertAddressData(2, "Konoha", "707070", "Leaf");
    await closeDatabaseConnection();
};

runDatabaseOperations();
