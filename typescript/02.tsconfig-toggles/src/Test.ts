// I have changed the target to es5 
// hence the final compiled code will be old school
// Check in dist/Test.js folder after compilation

// Run the compile command in root folder now, as it will automatically look for
// .ts file in /src folder and will spit the final .js file in /dist folder

const greet = (name: string): string => {
    return `Hello ${name}`
}

console.log(greet("Prince"));
// This comment won't be visible in dist/Test.js file, we configured the tsconfig file