## Routing in ReactJs

-  Before Routing few important things to know:
   1.  **Single page applications:**
   2.  **Client side bundle**
   3.  **Client side routing**

  - In pre-react days when we visit some websites say `linkedin.com/home`, client sends request to backend and backend send response with corresponding html/css/js file, then when another request goes to `linkedin.com/messages` then another html/css/js gets returned, this is called **Hard Reload** of page
  - React can let you create **single page applications** => all html/css/js came in one go, and instead of hard reloading here we can change the view of single page somehow, this is **Client side routing**. Code for this is what we write using `react-router-dom`.
  - Here can also make optimizations like getting required or whole bundle and accordingly show view using client side routing:

     `client side <--------Whole bundle html/css/js----------- server`

     `client side <--------required bundle html/css/js-------- server`
  
- **Client side bundle:** It is the HTML/CSS and big JS file code (bundle) which we get from backend which contains all the code for different routes etc /message, /home etc
- In Routing, we are talking about frontend routes, like we created routes for backend using express
- `react-router-dom` to do routing in using **BrowserRouter**, **Routes**, **Route**
- [Example]()