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

- first program | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/01.tsc-basics/01.firstTS.ts)
- Potential error | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/01.tsc-basics/02.secondTS.ts)
- How to assign type when passing in function arguments | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/01.tsc-basics/03.basicTypes.ts)
- How to assign type when passing function as argument | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/01.tsc-basics/04.functionTypes.ts)

### tsconfig.json file

In `tsconfig.json` file, we can toggle some line according to which transpilation happens

  - `target`: specify ECMA Script version here, like `es4`, `es5`, `es2016` etc, and accordingly `tsc` compiler will generate the final JS code (can be helpful when writing browser specific TS applications)
  - `rootDir`: We provide the path here where we want compiler to look for `.ts` files, Good practice is to use `./src` folder.
  - `outDir`: We provide the path here where we want compiler to spit out the `.js` files after transpilation, Good practice is to use `./dist` folder.
  - `removeComments`: we can enable whether to include or not include the comments in transpiled `.js` files, we usually set to `true` so that file js files doesn't become bulky as no one reads them. They are just for browsers/node runtime to understand.
  - `noImplicitAny`: It allows or disallows of 'any' type, be default it's `true`, That's why when we don't specify the types explicitly, by default it gives error as variables takes 'any' as a default type which is not strict types. To learning purpose we can set it to `false`.
  - Check `tsconfig.json` and `./src/Test.ts file` | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/typescript/02.tsconfig-toggles)

### Interface in TS

- `interface` helps in defining a collective type like for objects i.e, helps to `aggregate` the data
  - Without interface | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/03.interfaces/src/01.withoutInterface.ts)
  - With interface | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/03.interfaces/src/02.interface.ts)
  - React with TypeScript | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/04.react-typescript-demo/src/App.tsx)
- **Interface** can be implemented by `class`, similar like `java` language, but with **type** you can not.
  - above is also an important difference between **interface** and **type**
  - interface can **extend** other interface but **type** can not.
  - class implementing an interface | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/05.implement-interface/src/implement.ts)

### type in TS

- `type` also helps in aggregation of data | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/06.type/src/01.type.ts)
- type can let you do few extra things like
  - **union**: use **"|"** symbol, lets you take either of data type | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/06.type/src/02.union.ts)
  - **intersection**: use **"&"** symbol, helps in let you have every property of multiple `type` or `interface` | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/06.type/src/03.intersection.ts)

### Arrays in TS

  - To create array type in TS, simple add `[]` next to type like: 
    ```ts
      let arr: number[] = [1,2,3];
      let str: string[] = ["1","Prince","Bansal"];
      let bool: boolean[] = [true,false,true,true];
    ```
  - array type [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/07.arrays/src/array.ts)
  
### enum in TS

- **enums** (short for Enumerations) is feature which allows you to define a set of **named constants**
- enum | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/08.enums/src/01.enums.ts)
- enum express use case | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/08.enums/src/02.expressUseCase.ts)

### Generics in TS

- `generic` enables the programmer to write a **General Algorithm** which will work for all **data types**
- It is the same concept as `templates` in C++
- Without Generics | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/09.generics/src/withoutGenerics.ts)
- With Generics concept | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/typescript/09.generics/src/generics.ts)

### Advance API in TS

  - `Pick<>`: Allows you to create a new type by selecting a set of properties (keys) from an existing type (Type) | [example]()
  - `Partial<>`: Makes all properties of type optional => creates a type with same properties but each marked as optional | [example]()
  - `Readonly<>`: To make some configuration object read only and it can't be altered once initialized  | [example]()