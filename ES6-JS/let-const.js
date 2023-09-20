/*

# var:   1. "Function Scoped" => available everywhere in which function it is defined 
       2. if not defined in function => becomes global scoped &
          var varibles can be redefined with the same name again.
       3. we can use 'var' defined variables before defining them.
          example:
                  console.log(x);
                  var x;
                (above program lines won't generate error, and shows x as undefined)
      4. var is old way to declare variables before ES6, and do not use 'var' from now on.

# let, const: ("Block Scoped", available only the blocks they are defined, like c,c++ variables) introduced
            in ES6.
        NOTE:
             const doesn't let us change the value of variable. But it allows to let us change the
             different properties
             of const value.
             eg: const obj = {name: "Prince"};
                 obj.name = "Bansal"; // allowed 
                 but 
                 obj = 29;  // ERROR
                 or 
                 obj = {val:"69"}; // ERROR
    - very Helpul in code understanding as coder gets clear idea what can change and what can not in complex codes

*/

// var name = "Prince";
// var profile = "Software Engineer";

// Refactoring in ES6

const name = "Prince"; // as name can't change with time
let profile = "Software Engineer"; // profile can change with time

// some time later

profile = "Sr Software Engineer";

/*

Example:
var statuses = [
  { code: "OK", response: "Request successful" },
  { code: "FAILED", response: "There was an error with your request" },
  { code: "PENDING", response: "Your reqeust is still pending" },
];
var message = "";
var currentCode = "OK";

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
            |
            |
            V
   (refactoring above code)

*/

const statuses = [
  { code: "OK", response: "Request successful" },
  { code: "FAILED", response: "There was an error with your request" },
  { code: "PENDING", response: "Your reqeust is still pending" },
];
let message = "";
let currentCode = "OK";

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
console.log(message);
