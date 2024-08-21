## Counter App

1. Check files: `App.jsx` and `main.jsx`
2. We start components with Capital alphabets (standard convention)
  
3. Whenever we need any js variable or expression in 
   react component, wrap it in {}, it renders an dynamic
   variable
4. in jsx we write XML not HTML
   
    => in html: 
    ```html
    <button onclick="increaseCounter()"></button>
    ```
    => in jsx:  
    ```html
    <button onClick={functionName or function-itself}></button>
    ```
5. we have defined a global variable named state => but when we update it 
    react doesn't re-render the component

   **why ?**

   Because React isn't watching it 
    
   - we have to define state variables in react 
    a certain way so that react will watch it and whenever they get change 
    accordingly components who are having those state variables should re-render

   - to use state variable as per react expectation so that react watches we 
       need to use a **'hook'** named **"useState()"**

      ```js
       const [counter,setCounter] = useState(initial_val)
      ```
   - `useState()` hook returns array with:
      - 1st value as state variable value
      - 2nd value as react internal dispatch function which re-renders the component when state variable value changes
6. Hence, using react it is that easy to do same thing we did in [`02.counter-state-component`](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/02.counter-state-component/counter-state-component.html) in just few lines of code

7. More about `useState()` hook:
   - It lets you describe the state of your app, whenever state updates, it triggers a re-render which finally results in a DOM update.
   - [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/03.react-counter-app/src/App.jsx)
   - **Interview question** related to when `useState()` updates the value also added in above example.