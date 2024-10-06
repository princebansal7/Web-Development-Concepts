// - You have a user type with some values like: name, id, email, password etc
// - if you want to update user's some values using an function you will pass those arguments
// - later in future that might be the case that user have more values and we also want to update them
//   => we will have to increase number of arguments!

// Example:
// interface or type

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

function updateUser1(name: string, age: number, password: string) {
    // logic
}

// Now someone can do, that can create a new interface from updated props
// and keep on adding the new values that would need to updated later

interface UpdatedValues {
    name: string;
    email: string;
    password: string;
    age: number;
}
function updateUser2(updateUser: UpdatedValues) {
    // logic
}

// Above solution is good, but what if we need to change type of id from string to number?
// we will need to update in both interfaces => hence not good

// Solution?
// - User interface is single source of truth => ideally we should be able to "pick" properties
//   from it
// - can do using Pick<object from where to pick, properties that needs to be picked>

type updateUser = Pick<User, "name" | "email" | "age">;

// creates this:
// type UpdateUser = {
//     name: string;
//     email: string;
//     age: number;
// };

function updateUser3(updateUser: updateUser) {
    // logic
}

// This is helpful in when making DB calls
