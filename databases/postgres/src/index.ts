import {
    connectToDatabase,
    closeDatabaseConnection,
} from "./CRUD/01.connectingToDB";
import { createUserTable } from "./CRUD/02.createUserTable";
import { insertUserData } from "./CRUD/03.insertUserData";
import { readUserByEmail } from "./CRUD/04.readUserData";
import { updateUser } from "./CRUD/05.updateUserData";
import { deleteUser } from "./CRUD/06.deleteUserData";

const runDatabaseOperations = async (): Promise<void> => {
    await connectToDatabase();

    await createUserTable();
    await insertUserData(
        "tanjiro",
        "tanjiro@gmail.com",
        "shouldBeHashedIdeally"
    );
    await updateUser(
        "princebansal",
        "mynewEmail007@gmail.com",
        "newHashedPassword"
    );
    await readUserByEmail("prince.bansal@gmail.com");
    await deleteUser("john");

    await closeDatabaseConnection();
};

runDatabaseOperations();
