
// Interface
// - class can implement types

interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string, // Optional (use '?' symbol)
}

// type
// - class can not implement types

type User2 = {
    firstName: string,
    lastName: string,
    age: number,
    email?: string, // Optional (use '?' symbol)
}

function isEligible(user: User): boolean {
    return user.age >= 18 ? true : false;
}

function isEligible2(user: User2): boolean {
    return user.age >= 18 ? true : false;
}
