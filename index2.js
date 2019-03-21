var values = [10, 20, 50, 100]
var mappedValues = values.map(val => {
    return val * 2
})
var mappedValues = values.map(function (val) {
    return val * 2
})

// console.log(values)
// console.log(mappedValues)

var employees = [
    {
        id: 1,
        name: "name 1",
        salary: 20000
    },
    {
        id: 2,
        name: "name 2",
        salary: 30000
    },
    {
        id: 3,
        name: "name 3",
        salary: 60000
    }
]

let employeesWithTaxes = employees.map(employee => {
    const taxes = 22
    const deductions = employee.salary * (taxes / 100)
    const finalSalary = employee.salary - deductions

    let output = {
        ...employee,
        taxes: taxes,
        deductions: deductions,
        salary: finalSalary
    }

    //reactivate this if you want to destroy the salary prop
    //as per Pepe's question
    //delete output.salary

    return output
})

console.log(employeesWithTaxes)

let salaryWithCriteria = employeesWithTaxes.map(employee => {
    if (employee.salary > 20000) {
        return {
            id: employee.id,
            meetsCriteria: true
        }
    }

    return {
        id: employee.id,
        meetsCriteria: false
    }
})

console.log(salaryWithCriteria)