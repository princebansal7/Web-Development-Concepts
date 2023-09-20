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
    if (char === "{" || char === "(" || char === "[") {
      return ++accumulator;
    } else if (char === "}" || char === ")" || char === "]") {
      return --accumulator;
    }
    return accumulator;
  }, 0);
}

console.log(isBalanced("{{}}"));
console.log(isBalanced("[[[[{{{]]]]"));
console.log(isBalanced("{{{{{[[[(())}}]}}]}]"));
