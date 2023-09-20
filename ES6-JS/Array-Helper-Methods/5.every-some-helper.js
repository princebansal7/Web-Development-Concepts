// let we a list of computers which have specific RAM, we want to know whether all or some have required amount of RAM or not

// old way

var computers = [
  { model: "apple", ram: 16 },
  { model: "acer", ram: 8 },
  { model: "hp", ram: 4 },
  { model: "asus", ram: 32 },
];

// initial value
var allComputerCanRunProgram = true; // we assumed all have 16 gb RAM
var onlySomeComputerCanRunProgram = false; // we assumed all have => some don't

for (var i = 0; i < computers.length; i++) {
  if (computers[i].ram < 16) {
    allComputerCanRunProgram = false;
  } else {
    onlySomeComputerCanRunProgram = true;
  }
}

console.log(allComputerCanRunProgram);
console.log(onlySomeComputerCanRunProgram);

console.log();

// Now Helper Methods:------------------

// 1. every() helper method: returns true if "all the array elements" satisfies required condition else returns false => => returns truthy or falsy values. (does && to all boolean values for elements to give final result)

allComputerCanRunProgram = computers.every(function (computer) {
  return computer.ram >= 16;
});

console.log(allComputerCanRunProgram);
// false: because "all computers" does not have RAM greater than 16 GB

// 2. some() helper method: returns true even if "atleast of the array element" satisfies the condition else returns false => returns truthy or falsy values. (does || to  all boolean values for elements to give final result)

onlySomeComputerCanRunProgram = computers.some(function (computer) {
  return computer.ram >= 16;
});

// true: because "some computers" do have RAM greater than 16 GB

console.log(onlySomeComputerCanRunProgram);

console.log();

// EXAMPLES:-------------------------------------------------

// eg-1:
names = ["Prince", "Bansal", "Chandler", "Monica", "Joey", "Boo"];

var isAllNameLenMoreThanFour = names.every(function (name) {
  return name.length > 4;
});

console.log(isAllNameLenMoreThanFour);

var isSomeNameLenMoreThanFour = names.some(function (name) {
  return name.length > 4;
});

console.log(isSomeNameLenMoreThanFour);

// eg-2: Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

var hasSubmitted = users.every((user) => user.hasSubmitted);

// var hasSubmitted = users.every(function (user) {
//   return user.hasSubmitted;
// });

console.log(hasSubmitted);

// eg-3: Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.

var requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" },
];

var inProgress = requests.some((request) => request.status === "pending");

// var inProgress = requests.some(function (request) {
//   return request.status === "pending";
// });

console.log(inProgress);

console.log();
// eg-4

var isBelowThreshold = (currentValue) => currentValue < 40;
var nums = [1, 30, 39, 29, 10, 13];
console.log(nums.every(isBelowThreshold));

// eg-5

const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// Expected output: true
