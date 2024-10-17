// Partial: Makes all properties of type optional
// => creates a type with same properties but each marked as optional
// This is helpful when we want to update data but not all and give user optional values instead
// of updating all

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

// first pick the values you want to update using Pick<>
type UpdateUser = Pick<User, "name" | "email" | "age" | "password">;

// Make them optional using Partial<>
type UpdatedUserOptional = Partial<UpdateUser>;

/// Creates this:
// type UpdatedUserOptional = {
//     name?: string | undefined;
//     email?: string | undefined;
//     age?: number | undefined;
//     password?: string | undefined;
// };

function updateUser(updateUser: UpdatedUserOptional) {
    // logic
}
