// - When we have to give objects a type, then we use interfaces

// - Telling type of user object with interface
// - Interfaces helps in defining a collective type

interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string, // Optional (use '?' symbol)
}

function isEligible2(user: User): boolean {
    return user.age >= 18 ? true : false;
}

function information2(user: User) {
    console.log(`
User information is:
Fist Name: ${user.firstName}
Last Name: ${user.lastName}
Age: ${user.age}
Email: ${user.email}`);
}

console.log(
    isEligible2({
        firstName: "Prince",
        lastName: "Bansal",
        age: 26,
        email: "test@gmail.com",
    })
); // true
console.log(isEligible2({ firstName: "John", lastName: "Mac", age: 16 })); // false

information2({
    firstName: "Prince",
    lastName: "Bansal",
    age: 26,
    email: "test@gmail.com",
});
information2({ firstName: "John", lastName: "Mac", age: 26 });
