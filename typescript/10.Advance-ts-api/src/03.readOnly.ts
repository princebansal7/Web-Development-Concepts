// To make values read only so that they can't be updated
// like array and object even if defined as const, their values can be updated

const arr = [1, 2, 3, 4];
arr[1] = 69; // No error
console.log(arr);

// or

const obj1 = {
    name: "John",
    age: 33,
};
obj1.name = "Prince"; // No error

// using ReadOnly<> we can ensure that such values can't be updated
// it won't even let update like: arr[1] = 69 // error

// Example:

type UserNew = {
    readonly name: string;
    readonly age: number;
    mobile: string;
};

const obj: UserNew = { name: "John", age: 22, mobile: "03202320309" };
// obj.name = "Prince" // error

// Making whole object as read only
const newObj: Readonly<UserNew> = {
    name: "Hello",
    age: 32,
    mobile: "4233243423",
};

// newObj.mobile = "429282838280" // Error

// Helpful when we define some configuration, make it as read only
