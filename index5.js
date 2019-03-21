let salaries = [10000, 20000, 30000, 50000, 90000, 100000]

var total = 
    salaries.reduce((acumulator, cValue) => acumulator + cValue, 0)

console.log(total)

let names = ["a", "b", "c", "z"]

var finalString = names.reduce((ac, cValue) => ac + " " + cValue, "")

console.log(finalString)















// naive implementation :)

/*
var totalMoneySpentInSalaries = 0

for (var i = 0; i < salaries.length; i++) {
    totalMoneySpentInSalaries += salaries[i]
}

console.log(totalMoneySpentInSalaries)*/