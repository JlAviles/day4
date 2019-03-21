let countries = ["Italy", "France", "Venezuela", "Spain"]

countries.push("Germany")

console.log(countries)

countries.unshift("Denmark")

console.log(countries)

//this adds a new element in the position index 2 (third actually!) 
//please note the zero, indicating no removal
countries.splice(2, 0, "Charly")

console.log(countries)