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
//             //    It takes some time to convert the fetched response to JSON. (Check detailed
//             //    reason at end)
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

/*

The `json()` function is asynchronous because it reads the entire body of the HTTP 
request, which can be a time-consuming process, especially for large payloads or when
the data is being transmitted over a network. Here’s a breakdown of what happens under
the hood that makes it asynchronous:

- What `json()` Does:

1. Reads the Request Body:
   - When a request is made, the body of the request is sent in chunks over the network.
     These chunks may arrive at different times, so the body is not immediately available in full.
   - The `json()` function reads these chunks from the request stream. This operation is
     asynchronous because it waits for all the chunks to arrive and be read completely.

2. Parsing JSON:
   - Once the entire body is read, it’s typically stored as a string of raw bytes.
   - The `json()` function then parses this string into a JavaScript object using 
   `JSON.parse()`. While parsing itself is synchronous, the overall process is still
    asynchronous because it depends on the completion of the body reading.

3. Promise-Based API:
   - Due to the asynchronous nature of reading data from the stream, `json()` returns 
     a Promise. This Promise resolves with the parsed JSON data once the reading and 
     parsing are complete.
   - If there’s an error in reading the body or if the body is not valid JSON, the Promise
     is rejected with an error.

- Why Asynchronous?

- Network Delays:
  - When dealing with HTTP requests, data doesn’t arrive all at once; it comes in pieces,
    which the server needs to assemble. The asynchronous nature allows the server to handle
    other tasks while waiting for the data to arrive, making it more efficient.
  
- Large Payloads:
  - If the request body is large, reading it in one go would block the event loop 
   (in Node.js), preventing the server from handling other requests. By being asynchronous,
   the server can continue processing other requests while waiting for the data to be fully read.

- Example Process:

Here’s an analogy to explain it:

- Imagine you’re downloading a large file from the internet. The download happens in chunks,
  and it takes time to complete. You can do other tasks while waiting for the download to finish.
- Similarly, the `json()` function “downloads” the request body in chunks. 
  It doesn’t know when the entire body will be available, so it returns a Promise.
  Once the body is fully downloaded, it’s parsed into JSON and the Promise resolves.

In summary, the `json()` function is asynchronous because it involves reading data from
the network, which is inherently a time-consuming and asynchronous operation. 
The Promise-based API allows the function to handle these operations efficiently 
without blocking the execution of other code.


*/
