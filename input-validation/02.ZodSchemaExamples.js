const z = require("zod");

// 1. Check whether input is array of numbers or not?

function checkArrayOfNum(arr) {
    const schema = z.array(z.number()); // defining here
    const result = schema.safeParse(arr); // calling here
    console.log(result);
}

checkArrayOfNum([1, 2, 3]);

// 2. Validate email and pass
// {
//     email: string => have @ etc
//     password:  => atleast 8 char
// }

function checkUser(obj) {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
    });
    const result = schema.safeParse(obj);
    console.log(result);
}

checkUser({
    email: "prince.bansal007@gmail.com",
    password: "abcdefgh7",
});

// This is the benefit of using zod
// we don't have to write complex checks ourselves
