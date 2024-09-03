/*
// In express we used to write like:

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
	res.send('Hello First server!'); // send() to send texts
});

app.listen(port, function () {
	console.log(`click: http://localhost:${port}/`);
});

*/

//------------------------------------------------------------

// Basic response

// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		// return new Response('Prince Bansal');
// 		return Response.json({
// 			msg: 'This is how we return JSON response',
// 		});
// 	},
// } satisfies ExportedHandler<Env>;

// Routing:
// Doing routing is hard here, but with fetch function call and
// with request object we can extract almost everything and write
// logic accordingly

export default {
	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(req.body); // null
		console.log(req.method); // GET
		console.log(req.headers);

		if (req.method === 'GET') {
			return Response.json({
				msg: 'received GET request',
			});
		} else {
			return Response.json({
				msg: "didn't receive the GET request",
			});
		}
	},
} satisfies ExportedHandler<Env>;
