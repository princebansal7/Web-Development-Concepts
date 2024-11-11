// Map is used to create key-value pair, i.e, objects

// example-1

const users = new Map();

// users["user3"] = { name: "ken", age: 20, email: "ken@gmail.com" };
// console.log(users["user3"]);

users.set("user1", {
    name: "Prince",
    age: 27,
    email: "princebansal@gmail.com",
});
users.set("user2", {
    name: "Tanjiro",
    age: 30,
    email: "tan@gmail.com",
});
const user = users.get("user1");
console.log(user);

// Example-2 (giving types)

type User2 = { name: string; age: number; email: string };

const u2 = new Map<string, User2>();
u2.set("user1", {
    name: "Prince",
    age: 27,
    email: "princebansal@gmail.com",
});
u2.set("user2", {
    name: "Tanjiro",
    age: 30,
    email: "tan@gmail.com",
});
const user2 = u2.get("user2");
console.log(user2);
