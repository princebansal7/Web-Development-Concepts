// greet function which takes string type as argument

// JS code
// function greet (firstName){
//     console.log("Hello",firstName);
// }
// greet("Prince")

// 'any' is type which shows it can be of any type

// -----------------------------------------------------------
// TS code

// 1. Function is of type take something and returns nothing
function greet(firstName: string) {
    console.log("Hello", firstName);
}
greet("Prince")


function information(firstName: string, lastName: string, age: number) {
    console.log(`\nYour Fist name is: ${firstName}\nLast name is: ${lastName}\nAge is: ${age}`)
}
information("Prince", "Bansal", 26)



// 2. take something, return something type function

// NOTE: Here it automatically figures out the function returns a number
//       because of type inference
function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(10, 20));


// Explicitly giving a return type
function subtraction(a: number, b: number): number {
    return a + b;
}
console.log(subtraction(30, 20));


// Returning boolean example

function isEligible(age: number): boolean {
    // return age >= 18 ? true : false;
    return age >= 18;
}

isEligible(14) ? console.log("Eligible") : console.log("Not eligible");