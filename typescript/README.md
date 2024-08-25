# TypeScript

### Basics
 - TypeScript is superset of javaScript and is just a syntactical language
 - Where does TypeScript code runs?
   - TS code never runs on browser, Browsers only understand JavaScript
   - JS is the runtime language (which actually runs on browser/nodejs runtime)
   - TypeScript get compiles (transpile) down to JavaScript, and when while compilation itself, it gets `type checking` (similar to c++), hence if there is an error conversion gets failed and we get error beforehand and not at runtime.
 - `tsc` is the official TS compiler that can converts the TS code to JS
 - There are few other TS compiler too like: `esbuild`, `swc`
  
### Installing TypeScript compiler

 1. install typescript globally
    ```sh
        npm install -g typescript
    ```
 2. setup empty nodejs project with typescript
    ```sh
        mkdir node-tsc-app
        cd node-tsc-app
        npm init -y
        npx tsc --init
    ```
 3. Create an file with extension `.ts`
 4. To transpile the file  `tsc -b`, this will create a new file with `.js` extension. (will create separate **.js** file for all **.ts** files present)
 5. This JS file is what we actually run in browsers/node runtime
 6. Inside the folder where we ran `npx tsc --init` command, it creates `tsconfig.json` file and if this folder have multiple ts files (say **A.ts**, **B.ts**), we can not create same name variables in both files, it will give scope error.
 7. Basic types are:
    - `number`, `string`, `boolean`, `null`, `undefined` 

### Basic programs to understand types

- first program | [Example]()
- Potential error | [Example]()
- How to assign type when passing in function arguments | [Example]()
- How to assign type when passing function as argument | [Example]()

### tsconfig file

In `tsconfig.json` file, we can toggle some line according to which transpilation happens

  - `target`: specify ECMA Script version here, like `es4`, `es5`, `es2016` etc, and accordingly `tsc` compiler will generate the final JS code (can be helpful when writing browser specific TS applications)
  - `rootDir`: We provide the path here where we want compiler to look for `.ts` files, Good practice is to use `./src` folder.
  - `outDir`: We provide the path here where we want compiler to spit out the `.js` files after transpilation, Good practice is to use `./dist` folder.
  - `removeComments`: we can enable whether to include or not include the comments in transpiled `.js` files, we usually set to `true` so that file js files doesn't become bulky as no one reads them. They are just for browsers/node runtime to understand.
  - `noImplicitAny`: It allows or disallows of 'any' type, be default it's `true`, That's why when we don't specify the types explicitly, by default it gives error as variables takes 'any' as a default type which is not strict types. To learning purpose we can set it to `false`.
  - Check `tsconfig.json` and `./src/Test.ts file` | [Example]()

### Interfaces

- Interfaces helps in defining a collective type like for objects 
  - Without interface | [Example]()
  - With interface | [Example]()
  - React with TypeScript | [Example]()