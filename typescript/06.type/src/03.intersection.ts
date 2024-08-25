type Manager = {
    name: string,
    department: string
}

type Employee = {
    name: string,
    startDate: Date
}

// Takes intersection of all properties from both types
// - takes repeated properties one time
// - takes all unique properties from both

type TechLead = Manager & Employee;

const teachLead: TechLead = {
    name: "Prince",
    department: "DevOps & AWS",
    startDate: new Date()
}

console.log(teachLead)