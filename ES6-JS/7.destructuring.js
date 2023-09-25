// ES5

var expense1 = { type1: "Business", amount1: "$69 USD" };
var type1 = expense1.type1;
var amount1 = expense1.amount1;
console.log(type1, amount1);

//------ES6 (Destructuring)----------------------------

// Way-1 (still repeating code)

var expense2 = { type2: "Business", amount2: "$69 USD" };
const { type2 } = expense2; // => 'type' referencing to 'type' property of 'expense' object and creates and same name variable
const { amount2 } = expense2; // => 'amount' referencing to 'amount' property of 'expense' object and creates and same name variable
console.log(type2, amount2);

// Way-2

var expense3 = { type: "Business", amount: "$69 USD" };
const { amount, type } = expense3;
console.log(type, amount);

// Rules: 1. Variables name must be same as object's properties name (order doesn't matter)
//       2. Can create variables for only those properties who exists
//          eg: var expense = { type: "Business", amount: "$69 USD" };
//              const {type,amount,title} = expense;
//              => title => undefined, as it doesn't exist in object (expense.title => undefined)

console.log();
console.log();
//------------------Destructuring Arguments Object----------------

// ES5

var savedFile = {
    extension: "jpeg",
    name: "4K-Wallpaper",
    size: 7969,
};

function fileSummary1(file) {
    return `${file.name}.${file.extension} is of size ${file.size} bytes`;
}

console.log(fileSummary1(savedFile));

// ES6

function fileSummary2({ extension, name, size }) {
    return `${name}.${extension} is of size ${size} bytes`;
}

console.log(fileSummary2(savedFile));

// Example

function fileSummary3({ extension, name, size }, { color }) {
    return `${name}.${extension} is of size ${size} bytes, Apple is ${color}`;
}

console.log(fileSummary3(savedFile, { color: "red" }));

console.log();

//------------------Destructuring Arrays------------------
// Rules: 1. Can name anything while creating variables
//        2. Order matters => 1st variable will corresponds to 1st element of array, 2nd to 2nd element and so on..
//        3. We can create more variables then number of array elements but they will be undefined

const companies = ["Apple", "Google", "Tesla", "Flipkart"]; // arrays have 'length' property

// ES5
console.log(companies[0]);
console.log(companies[1]);

console.log();

// ES6

const [iPhone, pixel, tesla, shopping, extraVar] = companies; // to destructure 'elements' => use []
console.log(iPhone); // Apple
console.log(pixel); // Google
console.log(tesla, shopping); // Tesla Flipkart
console.log(extraVar); // undefined

const { length } = companies; // to destructure 'properties' use {}, arrays have 'length' property => we can destructure it using {}
console.log(length); // 4

// we can use rest operator here too.
const [firstCompany, ...restCompanies] = companies;
console.log(firstCompany); // Apple
console.log(restCompanies); // [ 'Google', 'Tesla', 'Flipkart' ]

const [first, second, ...restOfCompanies] = companies;
console.log(first); // Apple
console.log(second); // Google
console.log(restCompanies); // [ 'Tesla', 'Flipkart' ]

console.log();
console.log();

//------------Mixing Arrays and Objects Destructuring----------------------------

// 1.Object's in Array => [{}]
//  => first [] get solved, then {}

const company = [
    { name: "Apple", location: "San-Francisco" },
    { name: "Google", location: "Mountain-View" },
    { name: "Tesla", location: "Menlo-Park" },
    { name: "Flipkart", location: "Bengaluru" },
];

// ES5 way
let compName = company[0].name;
let compLocation = company[0].location;
console.log(compName, compLocation); // Apple San-Francisco

// ES6 Way

const [getFirstElementOfArray] = company; // this way we get first element (which is an object)
console.log(getFirstElementOfArray); // { name: 'Apple', location: 'San-Francisco' }
// => if we keep this name same as object's property name and then again destructure it (to get property, use {})

const [{ location }] = company; // first got array's 1st object => then destructured it to get object's property => pehle ye [], then ye {}
console.log(location); //  San - Francisco;
console.log();

// 2.Array's in Object => {[]}
//  => first {} get solved, then []

const Google = {
    roles: ["SDE", "SWE", "Automation Engineer", "DevOps Engineer"],
    locations: ["India", "USA", "Dubai"],
};

// ES5 Way

let role1 = Google.roles[0];
let role4 = Google.roles[3];
console.log(role1); // SDE
console.log(role4); // DevOps Engineer

// ES6 Way

const { roles } = Google; // 1st get the roles
console.log(roles); // [ 'SDE', 'SWE', 'Automation Engineer', 'DevOps Engineer' ]

// now we want to walk through 'roles' property's array => further destructure it (I know it's confusing)
const {
    roles: [roles1, roles2, roles3],
} = Google;
console.log(roles1); // SDE
console.log(roles2); // SWE
console.log(roles3); // Automation Engineer

// eg
const {
    locations: [firstLoc],
} = Google;
console.log(firstLoc); // India

// eg
const {
    locations: [myLoc, ...restLoc],
} = Google;
console.log(myLoc, restLoc); // India [ 'USA', 'Dubai' ]

// eg

const {
    locations: [f1, f2, f3],
} = Google;
console.log(f1, f2, f3); // India USA Dubai

/* ******************************************************************
Practical Example: (when can we use Destructuring)


// Example-1

function signup(username, password) {
    // some code to create user
}

signup("myuser", "mypassword");

 //   After some time later, let we want user to give email, Dob etc too during signup
 //   => have to modify function now
 //   In big project, it's difficult to remember arguments order and have to make changes in 
 //    whole codebase while finding the signup() function:

function signup(username, password, email, dob, city) {
    // some code to create user
}
// Other code
// Other code
// Other code
// .....
// ......


signup("myuser", "mypassword","xyz@princebansal7",'19/03/1998', "Chandigarh"); // have to remember correct argument order while passing

*/

// fixing the problem:-

// Old function (where we had to maintian formal args order)

// function signup(username, password, email, dob, city) {
//     // some code to create user
// }

// New function: we destructure the passed object in formal args => we can any order
function signup({ email, username, dob, password, city }) {
    // some code to create user
}
// create a object which have all the arguments properties which is to be passed
const userDetails = {
    username: "myusername",
    password: "mypassword",
    email: "xyz@princebansal7",
    dob: "19/03/1998",
    city: "Chandigarh",
};

// now we can just pass this object in signup()
// and Destructure it in function
signup(userDetails);
console.log();
console.log();

// Example-2---------------------------------------

const points = [
    [2, 4],
    [6, 9],
    [7, 8],
];

/* we want to convert above array of arrays to something like this:

[
    {x:2,y:4},
    {x:6,y:9},
    {x:7,y:8},
]
*/

// One way would be

const pairsObjArray = [];

points.forEach(pointPair => {
    const pairObj = {
        x: pointPair[0],
        y: pointPair[1],
    };
    pairsObjArray.push(pairObj);
});

console.log(pairsObjArray); // [ { x: 2, y: 4 }, { x: 6, y: 9 }, { x: 7, y: 8 } ]

console.log();
// Proper ES6 Way------------------------

// 1.we will map (as map returns array) over the array and destructure x,y value of each pair (array's element is array)
// 2. then we'll use improved object literal syntax to return x,y value

let ans = points.map(point => {
    // const x = point[0];
    // const y = point[1];
    //       OR
    const [x, y] = point; // (destructure the array)
    // now we can use x,y varables
    return { x: x, y: y }; // OR we can use enhanced object literal here (same name => use once)
});

console.log(ans);

// Most compact version of above code:-----------
// we destructured array in seperate line, we can do the same in argument itself

ans = points.map(([x, y]) => {
    return { x, y }; // used enhanced object literal
});
console.log(ans);

//***********************************************************
// Practice Examples:

// Eg-1:

const profile = {
    title: "Engineer",
    department: "Engineering",
};

function isEngineer1(profile) {
    var title = profile.title;
    var department = profile.department;
    return title === "Engineer" && department === "Engineering";
}
console.log(isEngineer1(profile));

// Refactored function

function isEngineer2({ title, department }) {
    return title === "Engineer" && department === "Engineering";
}

console.log(isEngineer2(profile));

console.log();

// Eg-2:
// - Convert this array of arrays into an array of objects, where each object has the keys 'subject',
//    'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.
// - An array for a class has the form [subject, time, teacher]
// - The resulting data structure should look something like the following:
//    const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]

const classes = [
    ["Chemistry", "9AM", "Mr. Darnick"],
    ["Physics", "10:15AM", "Mrs. Lithun"],
    ["Math", "11:30AM", "Mrs. Vitalis"],
];

// way-1

let classesAsObject = classes.map(classArr => {
    const subject = classArr[0];
    const time = classArr[1];
    const teacher = classArr[2];
    return { subject: subject, time: time, teacher: teacher };
});
console.log(classesAsObject);

// way -2

classesAsObject = classes.map(classArr => {
    const [subject, time, teacher] = classArr; // Destructured array
    return { subject: subject, time: time, teacher: teacher };
});
console.log(classesAsObject);

// way-3

classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher }; // Enhanced Object literal used
});
console.log(classesAsObject);

console.log();
// Eg-3:

// Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will
// return a new array with all values inside of it multiplied by two.  Do not use any array helpers!
// Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways

const numbers = [1, 2, 3];

function double([num, ...rest]) {
    console.log(num, rest);
    if (num === undefined) {
        return [];
    }
    return [num * 2, ...double(rest)];
}

console.log("Result:", double(numbers));
