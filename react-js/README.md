# ReactJS in Detail

- Codebase | [Click](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js)
- Previously in [DOM Manipulation](https://github.com/princebansal7/Web-Development-Concepts/blob/main/dom-manipulation/03.todo.html) we saw the need of `react` and `react dom`
- In `static` website we don't need react but in `Dynamic` websites where content is getting changed as per user activity, `React` removes a lot of headache which if we simply use DOM manipulation, we can't avoid.
- Counter (using DOM Manipulation) | [Link](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/01.counter-with-dom/counter.html), we need to write a lot of code for such simple DOM Manipulation and to make it dynamic.
- In Real world applications like LinkedIn, facebook have lot of dynamic content so DOM code gets much complex.
- So, people realized it's hard to do DOM Manipulation in conventional way
- So, There were different libraries came into the picture which made DOM Mani. slightly easy but still for complex big apps it was still hard (**JQuery**)

## Why React JS?

- Eventually ReactJS/VueJs created new syntax to do Frontend and under the hood react compiler converts code to **HTML/CSS/JS**
- So libraries like React Js, which uses complex DOM manipulation under the hood keeping developer side code simple and efficient.
- React is just easier way to write **HTML/CSS/JS**
- It's a new syntax which under the hood gets converted into **HTML/CSS/JS**
  
## React JS

- **React essentials**
  - Creators of Frontend realized all websites can effectively be divided in 3 parts:
  
    - **`State`**: An object which represents current `state` of the application, it represents dynamic things in your app (i.e, things that change, e.g: value of the *counter*) in previous example, for counter example state will look like:
      ```js
          {
              counter:1
          }
      ```
    - **`Components`**: It is how a DOM element should render given a state => It is reusable, dynamic, HTML snippet that changes given a state. In Counter example, button is a component, which takes state (counter) as a input and is supposed to render accordingly
    - **`Re-Rendering`**: whenever state get updated (from backend requests or any way), then react takes only the changed value from state and updates the component and DOM, this is called re-rendering. `state` change triggers a `re-render` => **re-render represents the actual DOM being manipulated when the state changes.**
    - Thumb Rule of React is to have **minimum Re-Rendering**
  
- **React expectation?**
  - High level React expectation from developers is: 
    1. give me the `state` of your app => give me a object which have dynamic parts of app
    2. give me all your individual `components` and how they are structured together
    3. give me how the `state` is connected to the given `components` 
  - React essentially after having the above things updates DOM etc under the hood.
  - You usually have to define all of your **components** once and then all you have to do is update the **state** of your app and React takes care of **re-rendering** your app.
  - Counter app with state, components and re-rendering (without using reactJS) | [Link](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/02.counter-state-component/counter-state-component.html)

- **React JS install and build**
  - to install use:  `npm create vite@latest`
  - when we use: `npm run build` it takes all our react code and creates a `dist` folder which have html and js file (which essentially browser understand)
  - we just need `dist` folder to host our app.
  
- **ReactJS - Important points**
  - React `Component returns` only **one element (top level xml)** => can't return multiple siblings! [**Why**](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/06.react-experiments#readme)
  - To visualize `Re-rendering`, install react dev tools extension > in Component > click setting icon > check `Highlight updates when components render.`
  - A Parent component re-render triggers all the children components re-rendering | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/06.react-experiments/src/App.jsx)
  - To minimize above case, one way would be to **push down the state** to the `lowest common ancestor` of the child where the state is required and not put the state in root | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/07.react-minimize-renders/README.md)
  - Another way would be using `React.memo()` | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/08.react-minimize-renders-memo#how-can-we-minimize-this-re-rendering-behavior-parent-to-child)
  - Concept of `key` in React when using list or arrays | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/09.react-keys-with-todo#readme)
  - `Wrapper Components`: It takes the inner react component as input. | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/10.react-wrapper-component#readme)
  - `side effects`: concept of side effects encompasses any operation that reach outside the functional scope of react component means, other then rendering there can be other tasks like Async operations => anything which is **not related** to **rendering** are called **side effects**. they can like using *setTimeout(), setInterval(), fetch() or directly manipulating DOM* etc.
  
- **Hooks in ReactJs**
  - `Hooks` feature introduced in React 16.8 that allows you to use state and other React features without writing a class.
  - They enable functional components to have access to stateful logic and lifecycle features, which were previously possible with only class components, this led in writing more concise and readable way of writing components in react.
  - `Hooks` are the functions which starts with `use` like: **useState(), useMemo(), useEffect()** etc. They allow you to `hook into` react state and lifecycle features from function components.
  - `Lifecycle features` ? => when react syntax was class based, it gave access to lifecycle functions like: `onComponentMount()`,`componentDidMount()`, `onComponentUnMount()`, `onRender()` etc. basically when component 1st time rendered (mounted), removed from the DOM (unMounted) or re-rendered, they we would do certain tasks using these lifecycle functions
  - But, it was hard to know when what will get render and accordingly put logic and we needed to know this quite often, so to solve these kind of issues `hooks` were introduced in **functional components**.
  - `useState()` | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/03.react-counter-app#readme)
  - `useEffect()` | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/11.react-todo-useEffect#readme)
    - For instance in our [ToDo project](https://github.com/princebansal7/Web-Development-Concepts/blob/main/projects/03-todo-app/frontend/src/App.jsx), when we were using `fetch()` it was infinitely re-rendering, so to solve this we could use **useEffect()** which is also a lifecycle function which solves that problem.
  - `useMemo()` | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/13.react-useMemo#readme)
  - `useCallback()` | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/14.react-useCallback#readme)
  - `useRef()` | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/15.react-useRef#useref-hook)

- **Routing in ReactJS**
  - Routing and related concepts in react | [Check here](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/17.react-routing#readme) 
  - `useNavigate()` hook | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/18.react-useNavigate#usenavigate-hook)
  - `Lazy Loading` | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/19.react-lazy-loading#readme)

- **Prop Drilling & Context API**
  - How should be the state managed ? keep everything at top level component? (NO), keep everything as low as possible? (Yes, at LCA of children that need a state), we already saw [pushing down](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/07.react-minimize-renders#readme) the state as low as possible!
  - [Prop Drilling](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/20.react-prop-drilling#prop-drilling)
  - [Context API](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/21.react-context-api#context-api)
  - [Context API Problem](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/22.react-context-api-drawback#context-api-shortcoming-and-drawbacks)
  - Now, we know keeping component and state separate is beneficial.

- **State Management using Recoil**
  - `recoil` has a concept of `atom` to store the state, it can be defined outside the component and can be teleported to any component. [check video](https://www.youtube.com/watch?v=_ISAA_Jt9kI) 
  - [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/23.react-state-management-recoil#state-management-using-recoil)
  - [Selector in Recoil](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/24.react-recoil-selector#selector-in-recoil)
 
## Examples:
  - Counter app with react | [Link](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/03.react-counter-app)
  - Counter app with props | [Link](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/04.react-counter-app-props)
  - Basic ToDo app | [Link](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/05.todo-basic-react)
