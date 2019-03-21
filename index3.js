var names = ["pepe", "ernesto", "edu"]

let output = names.map(name => {
    return {name: name, id: Math.floor(Math.random() * 10000)}
})

// console.log(names)
// console.log(output)

let employees = [
    {name: "dani", dept: "teacher"},
    {name: "marina", dept: "admissions"},
    {name: "victor", dept: "pm"}
]

let employeesWithSalaries = employees.map(employee => {
    let salary;
    
    if (employee.dept === "teacher") {
        salary = 100000    
    }

    if (employee.dept === "admissions") {
        salary = 200000    
    }

    if (employee.dept === "pm") {
        salary = 300000    
    }

    return {
        ...employee,
        salary: salary
    }
})

// console.log(employeesWithSalaries)

var filteredHighSalaries = 
employeesWithSalaries.filter(employee => employee.salary > 100000)

console.log(filteredHighSalaries)
console.log(filteredHighSalaries.length)