# React Basics and need

- Previously in [DOM Manipulation](https://github.com/princebansal7/Web-Development-Concepts/blob/main/dom-manipulation/03.todo.html) we saw the need of `react` and `react dom`
- In `static` website we don't need react but in `Dynamic` websites where content is getting changed as per user activity, `React` removes a lot of headache which if we simply use DOM manipulation, we can't avoid.
- Counter (using DOM Manipulation) | [link](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/01.counter-with-dom/counter.html), we need to write a lot of code for such simple DOM Manipulation and to make it dynamic.
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
  - Creators of Frontend realized all websites can effectively be divided in 3 parts
    - **State**: An object which represents current `state` of the application, it represents dynamic things in your app (i.e, things that change, e.g: value of the *counter* in previous example)
    - for for counter example state will look like:
      ```js
          {
              counter:1
          }
      ```
    - **Components**: It is how a DOM element should render given a state => It is reusable, dynamic, HTML snippet that changes given a state. In Counter example, button is a component, which takes state (counter) as a input and is supposed to render accordingly
    - **Re-Rendering**: whenever state get updated (from backend requests or any way), then react takes only the changed value from state and updates the component and DOM, this is called re-rendering. `state` change triggers a `re-render` => **re-render represents the actual DOM being manipulated when the state changes.**
  
- **React expectation?**
  - High level React expectation from developers is: 
    1. give me the `state` of your app => give me a object which have dynamic parts of app
    2. give me all your individual `components` and how they are structured together
    3. give me how the `state` is connected to the given `components` 
  - React essentially after having the above things updates DOM etc under the hood.
  - You usually have to define all of your **components** once and then all you have to do is update the **state** of your app and React takes care of **re-rendering** your app.
  - Counter app with state, components (without reactJS) | [link](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/02.counter-state-component/counter-state-component.html)