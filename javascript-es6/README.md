## ES6 - Import Export

- In file `a.js`
  
  ```js
    export const a = 1;
    export const b = 69;
    const c = 100;
    export default c;
  ```
- While importing and destructuring name should be same, execpt for the default exported value
- Can give any name to default exported value
- In file `b.js` 

  ```js
    import c, { a , b } from "./a.js"
    console.log(c); // 100

    // or

    import AnyNameForImportedC, { a , b } from "./a.js"
    console.log(a); // 1
    console.log(b); // 69
    console.log(AnyNameForImportedC); // 100
  ```
- TypeScript by default uses **ES6**  import export
- In JavaScript, in `package.json` if you want to use ES6 import/export then add `"type": "module"`
  
  ```json
    {
      "type": "module",
      "author": "Prince Bansal",
      "dependencies": {
        "axios": "^1.7.4"
      }
    }
  ```
