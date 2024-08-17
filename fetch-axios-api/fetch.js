// fetch is natively provided (by both browser and node) api (asynchronous function)
//  - Helps to hit a backend server
//  - It returns a Promise

// Promise then catch syntax
// const getTodos = () => {
//     fetch("http://localhost:3000/todos")
//         .then(response => {
//             // - We are getting JSON data from the backend => we use response.json()
//             // - If we were getting another kind of data, we would use 'response' accordingly
//             //    e.g., response.text()
//             return response.json();
//         })
//         .then(responseInJson => {
//             // - Why is response async?
//             //    It takes some time to convert the fetched response to JSON.
//             console.log(responseInJson); // Handle the JSON data here
//         })
//         .catch(error => {
//             console.error("Error fetching todos:", error); // Handle any errors
//         });
// };

// Promises: Async await syntax

// 1. GET request using fetch()
const getTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const responseInJson = await response.json();
    console.log(responseInJson);
};
// getTodos();

// 2.1 POST request using fetch()
const getTodosPost1 = async () => {
    const response = await fetch(
        "https://www.postb.in/1723937379484-5005326138343",
        {
            method: "POST",
        }
    );
    const responseInText = await response.text();
    console.log(responseInText);
};
getTodosPost1();

// 2.2 POST request using fetch() with body
const getTodosPost2 = async () => {
    const response = await fetch("https://api.freeapi.app/api/v1/todos/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "test title",
            description: "Test Todo - Mac",
        }),
    });
    const responseInJson = await response.json();
    console.log(responseInJson);
};
// getTodosPost2();
