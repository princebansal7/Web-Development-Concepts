
// Write a function which prints id of a user (id can be number or string)

// 1. without using type
// - How to print either kind of data ?

function printId(id: (number | string)) {
    console.log("id is:" + id)
}

printId(69)
printId("69")


console.log();

// 2. using type
//   - this can be done using 'type' but not 'interface'

type idArgType = number | string // doing union of types of data

function printId2(id: idArgType) {
    console.log("id is:" + id)
}
printId2(690)
printId2("690")