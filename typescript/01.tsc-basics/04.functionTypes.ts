//  --- Giving type to a function ----

//  - Create a function that takes another function as input and runs it after 5 
//    seconds
// -  In previous example TS was able to infer the return type of function, so 
//    it was optional to give their type explicitly

// - TS is not that smart to infer functions too, so here we have to tell it 
//   explicitly

// Solution ---

// 2. like variable types, here we gave fxn1 type while passing it as an argument
//    -  '() => ' represents it's function which takes no arguments
//    -   void represents it returns nothing
function fxn2(fxn1: () => void) {
    setTimeout(fxn1, 5000)
    console.log("I am logging from fxn2")
}

// 1. fxn1 takes not arguments and returns nothing => that's what it's type is
function fxn1() {
    console.log("I am logging from fxn1");
}

fxn2(fxn1);


// Example-2

function fxn(multiplyCallback: (a: number, b: number) => number) {
    setTimeout(() => {
        console.log(multiplyCallback(10, 89))
    }, 2000)
    console.log("I am logging from fxn which have multiply callback")
}

// 1. fxn1 takes not arguments and returns nothing => that's what it's type is
function multiply(a: number, b: number): number {
    return a * b;
}

fxn(multiply);