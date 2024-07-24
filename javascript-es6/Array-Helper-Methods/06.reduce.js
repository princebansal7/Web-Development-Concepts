// Old way

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// Now, Understanding reduce() array helper method:------------------------
// reduce(): here we pass some initial value too with iterator function

// Working: A) 1st argument's (sumNew) value comes from initial value (initialVal), and 2nd argument's (number) value comes from array elements one by one.
// B) Then each time sumNew gets iteratered to new iterations

var initialVal = 0;
var result = numbers.reduce(function (sumNew, number) {
  return sumNew + number;
}, initialVal);

console.log(result);

// EXAMPLES:-------------------------------------------

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// we want o/p: ['red','yellow','blue'] => can do with map() helper too
// as we want array as result, so we passed initial values as empty array
// we generally name 1st argument as 'accumulator' as it keeps on accumalting the result based on initial value and logic provided

var requiredColorArray = primaryColors.reduce(function (
  accumulator,
  primaryColor
) {
  accumulator.push(primaryColor.color);
  return accumulator;
},
[]);

console.log(requiredColorArray);
console.log();
console.log();

// ********* Interview Example: **********

// Balanced paranthesis with reduce() helper method
// 1. "()()()()" => balanced
// 2. "{{({})}}" => balanced
// 3. "{())}"  => not balanced

function isBalanced(stringParanthesis) {
  // 1. convert string to array using string method split()
  var stringToArray = stringParanthesis.split("");

  // 2. we will increase the accumulator (initially is 0) once we find starting part of braces pair
  // we will decrease the accumulator once we find starting part of braces pair

  return !stringToArray.reduce(function (accumulator, char) {
    if (accumulator < 0) return accumulator;
    if (char === "{" || char === "(" || char === "[") {
      return ++accumulator;
    } else if (char === "}" || char === ")" || char === "]") {
      return --accumulator;
    }
    return accumulator;
  }, 0);
}

console.log(isBalanced("{{}}")); // true
console.log(isBalanced("[[[[{{{]]]]")); // false
console.log(isBalanced("{{{{{[[[(())}}]}}]}]")); // true
console.log(isBalanced("())(")); // false
console.log(isBalanced("][")); // false (incorrect order)

console.log();

// Eg-1
var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function (acc, trip) {
  return acc + trip.distance;
}, 0);
console.log(totalDistance);

// Eg-2: Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.

var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

var deskTypes = desks.reduce(
  function (accumulatorObj, desk) {
    if (desk.type === "sitting") {
      accumulatorObj.sitting++;
    } else {
      accumulatorObj.standing++;
    }
    return accumulatorObj;
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);

console.log();
console.log();
/*
Eg-3:Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.   

*/

var numbers = [1, 1, 2, 3, 4, 4, 69, 69, 69];

function unique(numbers) {
  return numbers.reduce(function (accumulatorArray, num) {
    // using find(), we will check whether number (num) in final answer array (accumulatorArray) exists or not (by comparing given array element (num) and accumulatorArray element (targetVal))
    // => if exits : do not push
    // => if doesn't exists : push it
    var existingNum = accumulatorArray.find(function (targetVal) {
      return num === targetVal;
    });
    // console.log(accumulatorArray);
    if (!existingNum) {
      accumulatorArray.push(num);
    }
    return accumulatorArray;
  }, []);
}

console.log(unique(numbers));
