// Template Strings: it's just a nicer way to combine JS variables with string

const year = new Date().getFullYear();
let ans = "This is year " + year;
console.log(ans);

// Using Template String: for 'variables' and 'expressions' use $ and {} inside `` backticks !

ans = `This is year ${year}`; // variable
console.log(ans);
ans = `This is year ${year * 2}`; // expression
console.log(ans);
ans = `This is year ${year + 2}`; // expression
console.log(ans);
ans = `This is year ${year - 3}`; // expression
console.log(ans);
ans = `This is year ${new Date().getFullYear()}`; // expression
console.log(ans);

// avoid doing below mistake

// assume initial value was:
ans = `This is year  ${year}`;
// later changed to:
ans = `${year}`; // no error but also no need

// simply use like that:
ans = year;
console.log(ans);

// Examples:------------------------------------------

// eg-1
let number = 69;
let val1 = "Your number doubled is " + 2 * number;
console.log(val1);
// Refactor
val1 = `Your number doubled is ${2 * number}`;
console.log(val1);

// eg-2

const firstName = "Prince";
const lastName = "Bansal";
let fullName = firstName + " " + lastName;
console.log(fullName);

fullName = `${firstName} ${lastName}`;
console.log(fullName);
