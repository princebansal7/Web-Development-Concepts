// standard old approach:

// We want a new list where we want to filter out the products accourding to their types.

var products = [
  { name: "banana", type: "fruit", quantity: 2, price: 20 },
  { name: "raddish", type: "vegetable", quantity: 43, price: 2 },
  { name: "grapes", type: "fruit", quantity: 3, price: 28 },
  { name: "peas", type: "vegetable", quantity: 0, price: 34 },
  { name: "apple", type: "fruit", quantity: 14, price: 10 },
  { name: "saag", type: "vegetable", quantity: 33, price: 90 },
];

var filteredArray = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredArray.push(products[i]);
  }
}
console.log(filteredArray);

console.log();

// filter(): helper method, like map helper method, filter() also returns new array but here iterator function returns Truthy or Falsy values => if Truthy, puts relevant value in resulted array
// otherwise keeps on iterating till finds truthy value and then stops

var typeOfProducts = products.filter(function (product) {
  return product.type === "vegetable";
});

console.log(typeOfProducts);
// as we can see, it reduces the code

console.log();
// Other examples:
// filter products where: type is 'fruit', quantity > 10 and price < 25

var newProducts = products.filter(function (product) {
  return product.type === "fruit" && product.quantity > 0 && product.price < 25;
});

console.log(newProducts);

console.log();

// Real-Life Example: finding out comments of particular postid

var post = { id: 4, title: "New Post" };
var comments = [
  { postId: 4, content: "awesome bro" },
  { postId: 1, content: "Okayish" },
  { postId: 3, content: "Hey" },
  { postId: 4, content: "Hell No" },
  { postId: 4, content: "TaDaaa" },
];

function filterComment(post, comments) {
  var ans = comments.filter(function (comment) {
    return comment.postId === post.id;
  });
  return ans;
}

console.log(filterComment(post, comments));

// eg1: getting list filtering numbers > 50

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var filteredNumbers = numbers.filter(function (num) {
  return num > 50;
});
console.log(filteredNumbers);

// eg2: getting list by filtering users with admin access

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

var filteredUsers = users.filter(function (user) {
  return user.admin;
  //   return user.admin === true;
});
console.log(filteredUsers);

console.log();
console.log();

// This time we will use another function with return to filter things.-----------------

// EXAMPLE-3: Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.

var nums = [10, 14, 89, 69, 34, 90, 13, 1];

function iteratorFunction(num) {
  return num > 15;
}

function reject(nums, iteratorFunction) {
  // writing function expression (arrow function) this time, as iteratorFunction will put values one by one in the new array
  return nums.filter((number) => {
    return !iteratorFunction(number);
  });
}

console.log(reject(nums, iteratorFunction));
