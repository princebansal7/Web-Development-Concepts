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
