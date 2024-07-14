// classic for loop
var colors = ["red", "green", "blue"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log();

// forEach(): Array helper method
// passed anonymous fucntion as argument, which takes each element of array one by one as argument (in 'color')

colors.forEach(function (color) {
  console.log(color);
});

// Eg: Sum of Array elements

var nums = [2, 3, 7, 1, -6];
var sum = 0;
nums.forEach(function (num) {
  sum += num;
});
console.log("Sum is: " + sum);

// passed function (iterator function can be defined seperately too)

sum = 0;
function adder(num) {
  sum += num;
}
nums.forEach(adder); // passed reference of function as argument
console.log("Sum is: " + sum);

/* NOTE:
    nums.forEach(adder());
    wrting adder() means we are passing the result of adder() function as argument
*/

// Why to use forEach() ?----------
//  - Less Code
//  - Same end result as classic for loop

// Another example:

// eg1:
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];
var areas = [];
var i = 0;
images.forEach(function (image) {
  areas[i++] = image.height * image.width;
});
console.log(areas);

// eg2:

var posts = [
  { id: 23, title: "Daily JS News" },
  { id: 52, title: "Code Refactor City" },
  { id: 105, title: "The Brightest Ruby" },
];

posts.forEach(function (post) {
  console.log(post.title, post.id);
});
