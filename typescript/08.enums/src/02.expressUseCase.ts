// when using express servers we have to return various status codes
// Instead of returning constant values, can use enum

enum StatusCode {
    OK = 200,
    MOVED_PERMANENTLY = 301,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    LENGTH = 411,
    SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    GATEWAY_TIMEOUT = 504,
}

// app.get("/",(req,res)=>{
//     if(){
//         res.status(StatusCode.BAD_GATEWAY)
//     }
// })
