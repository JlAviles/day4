var distances = [100, 200, 600, 220]

//remove 2 elements from the array starting at pos 0
//warning! this mutates the original array!
//distances.splice(0, 2)

//this reverses the array, we are not sorting it yet
//console.log(distances.reverse())

var output = [...distances].sort((a, b) => a - b)

// console.log(distances)
// console.log(output)

//names array
//as per accepted SOverflow 
//https://stackoverflow.com/questions/51165/how-to-sort-strings-in-javascript
var names = ["a", "b", "A", "d", "c"]

var output = names.sort((a, b) => a.localeCompare(b))

console.log(output.reverse())