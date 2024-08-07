## Context API shortcoming and drawbacks

- Even when we do not passing down any prop in some component and use context api to pass/teleport state variables, in between component still gets re-rendered
- Context API:
  - Makes re-rendering more efficient ? => No
  - Makes syntax cleaner/ get rid of prop drilling ? => Yes 
- Problem with Context API is **it doesn't fix re-rendering**, **only fixes Prop Drilling**[Example]()
- To solve this, which can do both i.e, doesn't let re-render and also fixes pop drilling, we can use **state management** using **recoil**