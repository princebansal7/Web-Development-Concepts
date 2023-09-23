// Let's make a function to make ajax request, where function will take argument 'url' and request method type as 'method'
// method can be 'GET', 'PUT', 'POST' etc (most common is GET method)

function makeAjaxRequest(url, method) {
    // if user don't provide any method then make 'GET' as default method as most commonly used
    if (!method) {
        method = "GET";
    }

    // logic to make request
    //......
    //......
    console.log(method);
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "GET");
// In above both calls "GET" method gets assigned as method
// But had to write seperate check manually

console.log();
console.log();

//*******So, ES6 have default arguments concepts in functions:************
// Like C++ default args concept

// Provided default argument to method => if user doesn't passes => automatically gets assigned
function makeAjaxRequest(url, method = "GET") {
    // logic to make request
    //......
    //......

    console.log(method);
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "GET");
makeAjaxRequest("google.com", "PUT");
makeAjaxRequest("google.com", null); // if we don't want to assign any method, use 'null'

// EXAMPLES--------------------------

// Eg-1
// After default argument all formal args must have default args too else if user doesn't pass all, will give wrong result (like c++ rule)

let add = function (x, y) {
    return x + y;
};
console.log(add(2, 3)); // 5

add = function (x, y = 0, z) {
    return x + y + z;
};
console.log(add(1, 4, 2)); // 7 (all passed)

add = function (x, y = 0, z = 0) {
    return x + y + z;
};

console.log(add(3)); // 3 (one passed and order of default args is correct)

add = function (x = 0, y, z = 0) {
    return x + y + z;
};

console.log(add(4)); // NaN => because all values not passed and default arg's order not correct

// Example-2

function sum(a, b) {
    if (a === undefined) {
        a = 0;
    }
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}

// REFACTORED

function sum(a = 0, b = 0) {
    return a + b;
}

// Example-3

function addOffset(style) {
    if (!style) {
        style = {};
    }
    style.offset = "10px";
    return style;
}

// REFACTORED

function addOffset(style = {}) {
    style.offset = "10px";
    return style;
}
