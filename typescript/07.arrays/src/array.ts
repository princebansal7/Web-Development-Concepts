// 1. Basic array

let arr: number[] = [1, 2, 3];
let str: string[] = ["1", "Prince", "Bansal"];
let bool: boolean[] = [true, false, true, true];

console.log(arr);
console.log(str);
console.log(bool);

// 2. filter all the users above age 18

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUsers(user: User[]) {
    return user.filter(x => x.age >= 18)
}

console.log(
    filterUsers([
        { firstName: "Prince", lastName: "Bansal", age: 26 },
        { firstName: "John", lastName: "Doe", age: 16 },
        { firstName: "James", lastName: "Bond", age: 36 },
    ])
);
