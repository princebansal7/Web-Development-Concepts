// Generics

// T is representing generic type
function anyType<T>(arg: T): T {
    return arg;
}

// we send data type too with call
const ans1 = anyType<number>(69);
console.log(ans1);

const ans2 = anyType<string>("Hello");
console.log(ans2);
console.log(ans2.toUpperCase());

const ans3 = anyType<boolean>(true);
console.log(ans3);

const ans4 = anyType<number[]>([1, 2, 3]);
console.log(ans4);

// Solving problem, returning first value of array
// which can have number or string

function firstValue<T>(arr: T[]): T {
    return arr[0];
}
console.log(firstValue<number>([99, 2, 3]));
console.log(firstValue<string>(["prince", "Value", "String"]));

// TS can infer from arg input too that what type is provided
console.log(firstValue([199, 2, 3]));
console.log(firstValue(["Bansal", "Value", "String"]));

const firstName = firstValue(["prince", "Value", "String"]);
console.log(firstName.toUpperCase());

// Other Examples

interface User {
    name: string;
    age: number;
}
const user = firstValue<User>([
    { name: "first", age: 26 },
    { name: "second", age: 69 },
]);
console.log(user);
