## ES6 - Import Export

- In file `a.js`
  
  ```js
    export const a = 1;
    export const b = 69;
    const c = 100;
    export default c;
  ```
- In file `b.js` 
- while importing and destructuring name should be same, expect for the default exported value
- Can give any name to Default exported value

  ```js
    import c, { a , b } from "./a.js"
    console.log(c);

    // or

    import AnyNameForImportedC, { a , b } from "./a.js"
    console.log(a);
    console.log(b);
    console.log(AnyNameForImportedC);
  ```
- TypeScript by default uses **ES6**  import export
- In JavaScript, in `package.json` if want to use ES6 import/export add `"type": "module`
  
  ```json
    {
      "type": "module", // Like this
      "author": "Prince Bansal",
      "dependencies": {
        "axios": "^1.7.4"
      }
    }
  ```