// 1. Say we want to return 1st element of an array
//    array can be of type 'string' or 'number'

// Without generics

function getFirstValue(arr: (string | number)[]): number | string {
    return arr[0];
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue(["Hello", "world"]));

// OR

type Random = string | number;
function getFirstValue2(arr: Random[]): Random {
    return arr[0];
}
console.log(getFirstValue2([69, 2, 3]));
console.log(getFirstValue2(["Whole", "world"]));

// Problem-1 ?
//  - we can't use related method for this returned value, as returned value can
//    be an number too

const value = getFirstValue(["Whole", "world"]);
// console.log(value.toUpperCase()); // give error, as this method doesn't exist for our custom type

// Problem-2
// User can send mixed array too, TS will allow it
// as a dev we want user to send either complete number or string array
console.log(getFirstValue2([100, 2, "Prince", "Bansal"]));

// To fix above  problem we can do:

type Random2 = string[] | number[];
function getFirstValue3(arr: Random2) {
    return arr[0];
}

// console.log(getFirstValue3([100, 2, "Prince", "Bansal"])); // will give error now
