import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// using prisma: clean code unlike pg library where we were creating
// client, connecting to db, closing connection etc

const insertUserData = async (
    email: string,
    username: string,
    password: string,
    first_name: string,
    last_name: string
): Promise<void> => {
    const result = await prisma.user.create({
        // data: to what data we need to put
        data: {
            email,
            username,
            password,
            first_name,
            last_name,
        },
        // select: if we need some specific data in output,
        // (by default returns all the fields)
    });
    console.log(result);
};

// In case of error like putting same user, auto increment still updates
// and accordingly id number will be alloted in User table

insertUserData(
    "prince.bansal007@gmail.com",
    "princebansal7",
    "ede2922ee",
    "Prince",
    "Bansal"
);

//-------------------
// Update user data

interface UserDataParameters {
    first_name: string;
    last_name: string;
}

const updateUserData = async (
    username: string,
    { first_name, last_name }: UserDataParameters
): Promise<void> => {
    const res = await prisma.user.update({
        where: { username },
        data: { first_name, last_name },
    });
    console.log(res);
};

updateUserData("princebansal7", {
    first_name: "Tanjiro1",
    last_name: "Kamado",
});

//-------------------
// reading user data

const getUserData = async (): Promise<void> => {
    const result = await prisma.user.findMany();
    console.log(result);
};
getUserData();

// finding user by email

const findUserByEmail = async (email: string): Promise<void> => {
    const user = await prisma.user.findFirst({
        where: { email },
    });

    console.log("user found:\n", user);
};
findUserByEmail("prince.bansal7@gmail.com");

//--------------------
// deleting userData

const deleteUser = async (username: string): Promise<void> => {
    const res = await prisma.user.delete({
        where: {
            username,
        },
    });
    console.log("user deleted\n", res);
};
deleteUser("princebansal2");
