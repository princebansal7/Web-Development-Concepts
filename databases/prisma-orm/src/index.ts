import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// using prisma: clean code unlike pg library where we were creating client, connecting to db, closing connection etc

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
        // select: if we need some specific data in output, (by default returns all the fields)
    });
    console.log(result);
};
insertUserData(
    "prince.bansal7@gmail.com",
    "princebansal_",
    "ede2922ee",
    "Prince",
    "Bansal"
);
