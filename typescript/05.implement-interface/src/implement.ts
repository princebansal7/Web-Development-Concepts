interface Person {
    myName: string,
    age: number,
    greet(message: string): void; // have a method, takes an string as input and returns nothing
}

class Employee implements Person {
    // In TS we have to define the properties too
    myName: string
    age: number

    constructor(n: string, a: number) {
        this.myName = n;
        this.age = a;
    }

    greet(message: string) {
        console.log(`${message} ${this.myName}`);
    }
}

const emp = new Employee("Prince", 26);

console.log(emp.myName);
console.log(emp.age);
emp.greet("Hello")