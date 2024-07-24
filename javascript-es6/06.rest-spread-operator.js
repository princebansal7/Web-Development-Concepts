// these operator task is just to reduce the code

// Old - way
function addNum1(numbers) {
    return numbers.reduce(function (sum, num) {
        return sum + num;
    }, 0);
}

// New-way
function addNum2(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(addNum2([1, 2, 3, 4, 5]));

// What if we were not passing array and we want to sum bunch of numbers ?
// modifying function accordingly. (this makes code complex with so many arguments)

function addNum3(a, b, c, d, e, f) {
    const numbers = [a, b, c, d, e, f];
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(addNum3(1, 2, 3, 4, 5, 6)); // passing multiple args

console.log();
console.log();

//***************************************************/
// Using rest '...' operator with can capture any number of arguments => it Gathers elements
// Now, we can pass any number of arguments with worrying about accepting them separately in formal arguments
// '...' operator catches all the elements and puts in a single array

function addNum4(...numArray) {
    return numArray.reduce((sum, num) => sum + num, 0);
}

console.log(addNum4(1, 2, 4, 5, 6));
console.log(addNum4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(addNum4(1, 2));

console.log();
//***************************************************/
// Using spread '...' operator with can spread or flatten any number of arguments => it spreads the elements

// we want to show color pallette => merge both arrays
const defaultColors = ["red", "green", "black"];
const userColors = ["purple", "pink", "orange"];

// old way
console.log(defaultColors.concat(userColors));

// using spread operator, we created new array and spread all elements of other arrays

console.log([...defaultColors, ...userColors]);

// Doing this we just put array in new array, we have to use spread operator to open up it's elements
console.log([...defaultColors, userColors]);

// benefit is: can add spread any number of arrays and also can put single values in array too

const newColors = ["Titanium Black", "Matte Black"];
console.log([...defaultColors, ...userColors, ...newColors]);

console.log();

// below example makes array merging really easy using spread operator:
// as we an add new elements in array while joining different arrays
console.log([
    ...defaultColors,
    ...userColors,
    ...newColors,
    "green-light",
    "machine-red",
]);

//--------------------------------------------------------------------------

// EXAMPLES: (Mixing rest and spread operators)

// Eg-1.let we are validating shopping list and if 'milk' is not there in the list we must add it

function validateShoppingList(...list) {
    if (list.indexOf("milk") < 0) {
        return ["milk", ...list];
    }
    return list;
}

console.log(validateShoppingList("eggs", "bread", "fruits", "corn flakes"));

console.log();

// Eg-2

// let we have this object and it become famous => we want to optimize and
// add new method which does same task
let mathLibrary = {
    calProduct(a, b) {
        return a * b;
    },
};

// Modifying

mathLibrary = {
    calProduct(a, b) {
        return a * b;
    },
    multiply(a, b) {
        // some optimizations
        return a * b;
    },
};
console.log(mathLibrary.calProduct(2, 4));

// But above method have some logic for different to method and we want to depreciate old method
// we an use rest, spread operator here, so that other developers who are using old method in their won't break

// without changing name or removing old method we used new method by passing the args to new method

mathLibrary = {
    calProduct(...list) {
        console.log(
            "calProduct() method is depreciated, please use multiply() method"
        );
        // console.log(...list);
        return this.multiply(...list);
    },
    multiply(a, b) {
        // some optimizations
        console.log("using multiply() now..");
        return a * b;
    },
};

console.log(mathLibrary.calProduct(3, 5));

// Eg-3 (using rest operator)

function product1(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1);
}
console.log(product1(1, 2, 3, 4, 5));

// Refactored

function product2(...numbers) {
    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1);
}

console.log(product2(1, 2, 3, 4, 5));

// Eg-4 (using spread operator)

function join1(array1, array2) {
    return [...array1, ...array2];
}

console.log(join1([1, 2], [-9, -8]));

// refactored

function join2(array1, array2) {
    return [...array1, ...array2];
}
console.log(join2([1, 2, 4], [-9, -8, -90]));

// Eg-5 (Mixing rest and spread)

function unshift1(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
}
console.log(unshift1([-1, -2], 3, 4, 5, 6, 100));

// Refactored

function unshift2(array, ...array2) {
    return [...array2, ...array];
}

console.log(unshift2([-1, -2, -69], 3, 4, 5, 6, 69));
