// Old approach

// Finding a particular user

var users = [
  { name: "Alex", billId: 2 },
  { name: "Prince", billId: 69 },
  { name: "Heisenberg", billId: 1 },
  { name: "Prince", billId: 100 },
];
var user;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "Prince") {
    user = users[i].name;
    break;
  }
}
console.log("user is:", user);

console.log();

// Now:
// find(): helper method, return element when it finds according to mentioned logic and also here iterator function returns Truthy or Falsy values => if Truthy, returns value
// otherwise keeps on iterating till finds truthy value and then stops
// Also it returns the 1st matching value only (drawback)

var result = users.find(function (user) {
  return user.name === "Prince";
});
console.log(result);
// console.log(typeof result);

// Exmaples:

// Eg-1:

var posts = [
  { id: 4, title: "New Post" },
  { id: 2, title: "Old Post" },
];
var comment = { postId: 4, content: "Great Post" };

/*

// Way-1 of writing the function


function postForComment(posts, comment) {
  return posts.find(function (post) {
    return comment.postId === post.id;
  });
}
var foundPost = postForComment(posts, comment);
console.log(foundPost);


*/

// Way-2 of writing above functions (using arrow functions)

var foundPost = (posts, comment) => {
  return posts.find((post) => {
    return comment.postId === post.id;
  });
};

console.log(foundPost(posts, comment)); // when calling arrow functions, have to pass arguments too

// Eg-2: finding admin
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

/* way-1

    var admin = users.find(function (user) {
        return user.admin === true;
    });

*/
// way-2
var admin = users.find((user) => user.admin);
console.log(admin);

// Eg-3: Finding balance
var accounts = [
  { id: 1, balance: -10 },
  { id: 2, balance: 12 },
  { id: 3, balance: 0 },
];
var idObj = accounts.find((account) => account.balance === 12);
console.log(idObj);

console.log();

// Eg-4:

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
];

function findWhere(ladders, criteria) {
  return ladders.find(function (item) {
    var property = Object.keys(criteria)[0];
    // console.log(property);
    return item[property] === criteria[property];
  });
}

console.log(findWhere(ladders, { height: 25 }));
