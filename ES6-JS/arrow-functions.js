let add = function (a, b) {
    return a + b;
};
console.log(add(6, 9));

// 1. Remove 'function' keyword and use 'Fat Arrow'
add = (a, b) => {
    return a + b;
};
console.log(add(2, 2));

// 2. Returns single JS expression
// => remove curly braces
// => remove 'return' keyword (will return implicitily)

add = (a, b) => a + b;
console.log(add(3, 4));

// Note: if you use curly braces => you must use 'return' keyword too
//       when expression is too long, it's recommended to use return and braces

// 3. if we have single argument => can remove paranthesis around them too.

let double = function (num) {
    return 2 * num;
};
console.log(double(4));

// Refactoring it to ES6 arrow function

double = num => 2 * num; // most compact arrow function example
console.log(double(39));

// double = (num => 2 * num;) // remove semicolor, else Error
// console.log(double(39));

double = num => 2 * num; // can also write like this
console.log(double(39));

// 4.if we have 'multiple arguments' or 'zero arguments' we must use paranthesis

const greet = () => "Hello Folks!";
console.log(greet());

const greet2 = () => {
    return "Hello Folks-2!";
};
console.log(greet2());

// Examples:----------------------------

// This example is helpful in React js too.

const nums = [1, 2, 3, 4];

let res = nums.map(function (num) {
    return 2 * num;
});
console.log(typeof res);
console.log(res);

// Refactoring above code:

res = nums.map(num => 2 * num);
console.log(res);

// So, if we didn't had ES6 map() array helper or arrow functions, below is code we had to write

const resArray = [];
for (let i = 0; i < nums.length; i++) {
    resArray.push(2 * nums[i]);
}
console.log(resArray);

//****Another Problem: which can be solved by arrow functions:**************

let team = {
    members: ["Jane", "Elsie"],
    teamName: "Special 404",
    teamSummary: function () {
        return this.members.map(function (member) {
            return `${member} is Member of team ${this.teamName}`; // we can't read teamName using this here => gets 'undefined'
        });
    },
};

// got undefined because, when we passed iterator anonymous function to map() it gets lost hence we can't use this reference
console.log(team.members);
console.log(team.teamName);
console.log(team.teamSummary());

// Fix-1 (ES5)

team = {
    members: ["Jane", "Elsie"],
    teamName: "Special 404",
    teamSummary: function () {
        return this.members.map(
            function (member) {
                return `${member} is Member of team ${this.teamName}`;
            }.bind(this) // using bind() helper to find this to current function so it won't get lost (=> binds the function context to current context)
        );
    },
};
console.log(team.teamSummary());

// Fix-2 (Jquery way)

team = {
    members: ["Jane", "Elsie"],
    teamName: "Special 404",
    teamSummary: function () {
        var self = this; // caching reference to this in self
        return this.members.map(function (member) {
            return `${member} is Member of team ${self.teamName}`;
        });
    },
};
console.log(team.teamSummary());

// Fix-3 (Arrow function)

team = {
    members: ["Jane", "Elsie"],
    teamName: "Special 404",
    teamSummary: function () {
        // this === team
        return this.members.map(
            member => `${member} is Member of team ${this.teamName}`
        );
    },
};
console.log(team.teamSummary());

/* Why arrow function worked ?

1. Arrow functions use 'Lexical this' => depends upon where we are placing 'this' it will behave accordingly => Here 'this' automatically equals to surrounding context
                         =>    this === team

    So, arrow functions fixes all above problems as 'this' behaves like what we expected them too behave when using in arrow functions. (which it didn't behave when we used normal functions, and we didn't had to cache or learn bind() etc too)

*/

// Other Examples----------------------------------------

// Eg-1
let fibonacci = function (n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));

// Refactored to Arrow function:

fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(10));

// Eg-2

let profile = {
    name: "Alex",
    getName: function () {
        return this.name;
    },
};

console.log(profile.getName()); // Alex

// Refactoring above code

profile = {
    name: "Alex",
    getName: () => this.name,
};

console.log(profile.getName()); //  undefined

/*

The reason the first code works as expected while the second one returns `undefined` is due to the difference in how arrow functions (`() =>`) and regular functions (`function`) handle the `this` keyword in JavaScript.

In the first code:

```javascript
let profile = {
  name: "Alex",
  getName: function () {
    return this.name;
  },
};
```

Here, you are using a regular function for `getName`. Regular functions have their own `this` context, which is determined by how they are called. In this case, when you call `profile.getName()`, the `this` inside the function refers to the `profile` object, so `this.name` correctly accesses the `name` property of the `profile` object, and it returns "Alex."

In the second code:

```javascript
profile = {
  name: "Alex",
  getName: () => this.name,
};
```

Here, you are using an arrow function for `getName`. Arrow functions do not have their own `this` context; instead, they inherit the `this` value from the surrounding (lexical) context. In this case, when you create the `profile` object, there is no surrounding function that sets `this`, so `this` in the arrow function refers to the `this` value of the enclosing context, which is likely the global `this`. Since there is no `name` property on the global `this`, it returns `undefined`.

To summarize, regular functions have their own `this` context, which makes them suitable for methods of objects, while arrow functions inherit `this` from their surrounding context, which can lead to unexpected behavior when used in object methods like in the second example.

*/
