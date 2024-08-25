// - When we have to give objects a type, then we use interfaces

// - telling type of user object without interface

function isEligible(user: {
    firstName: string,
    lastName: string,
    age: number,
    email?: string // Optional (use '?' symbol)
}): boolean {
    return user.age >= 18 ? true : false;
}

function information(user: {
    firstName: string,
    lastName: string,
    age: number,
    email?: string  // Optional (use '?' symbol)
}) {
    console.log(`
User information is:
Fist Name: ${user.firstName}
Last Name: ${user.lastName}
Age: ${user.age}
Email: ${user.email}`)
}

console.log(isEligible({ firstName: "Prince", lastName: "Bansal", age: 26, email: "test@gmail.com" })) // true
console.log(isEligible({ firstName: "John", lastName: "Mac", age: 16 })) // false


information({ firstName: "Prince", lastName: "Bansal", age: 26, email: "test@gmail.com" })
information({ firstName: "John", lastName: "Mac", age: 26 })

// Problems ?
// - Not following dry DRY, as defining type multiple times
// - error prone
// Fix ?
// - use Interface to define types