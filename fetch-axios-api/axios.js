// axios is external provided api library
//  - Helps to hit a backend server
//  - we need to explicitly install it using npm
//  - provides cleaner syntax

import axios from "axios";

// 1. GET request using axios
const getTodos = async () => {
    // axios automatically understands what kind of data it's getting
    const response = await axios.get("http://localhost:3000/todos");
    console.log(response); // gives a bunch of data like status code, actual data returned, res etc
    console.log(response.data); //logging actual data
    console.log(response.data.todos);
    console.log("number of todos returned:", response.data.todos.length);
};
// getTodos();

// 2.1 POST request using axios
const getTodosPost1 = async () => {
    const response = await axios.post(
        "https://www.postb.in/1723937379484-5005326138343"
    );
    console.log(response.data);
};
// getTodosPost1();

// 2.2 POST request using axios with body
//     - args: 1st: URL
//     -       2nd: body
//     -       3rd: headers
// - Any other request (PUT, DELETE etc which can send body, could have 2nd args as body)
const getTodosPost2 = async () => {
    const response = await axios.post("https://api.freeapi.app/api/v1/todos/", {
        title: "test title - axios",
        description: "Test Todo axios - Mac",
    });
    console.log(response.data);
};
// getTodosPost2();

//-------------------------------
// Syntax and stuff, with args URL, body, header
const getTodosPost3 = async () => {
    const response = await axios.post(
        " https://httpdump.app/dumps/4ca51896-2dd5-4da7-b074-9d327449c6a8",
        {
            title: "test title - axios",
            description: "Test Todo axios - Mac",
        },
        {
            headers: {
                Authorization: "Bearer 123",
            },
        }
    );
    console.log(response.data);
};

// getTodosPost3();

//-------------------------------
// In GET request: 1st is URL
//                 2nd is Header (here we don't send body)
const getTodosPost4 = async () => {
    const response = await axios.get(
        " https://httpdump.app/dumps/4ca51896-2dd5-4da7-b074-9d327449c6a8?id=69",
        {
            headers: {
                Authorization: "Bearer 12369",
            },
        }
    );
    console.log(response.data);
};
// getTodosPost4();

//------------------------------------------
// With just axios => add in single block, body is send using 'data'
const getTodosPost5 = async () => {
    const response = await axios({
        url: " https://httpdump.app/dumps/4ca51896-2dd5-4da7-b074-9d327449c6a8",
        method: "POST",
        headers: {
            Authorization: "Bearer 1236113933223",
        },
        data: {
            title: "axios way",
            description: "axios way to send request",
        },
    });
    console.log(response.data);
};
getTodosPost5();
