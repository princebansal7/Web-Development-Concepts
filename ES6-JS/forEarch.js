var colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log();
// forEach(): Array helper method
// passed anonymous fucntion as argument, which takes each element of array one by one as argument (in 'color')

colors.forEach(function (color) {
  console.log(color);
});

// Eg: Sum of Array elements

let nums = [2, 3, 7, 1, -6];
let sum = 0;
nums.forEach(function (num) {
  sum += num;
});
console.log("Sum is: " + sum);
