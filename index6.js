var strings = ["aaaa", "bbbbbbb", "cccccc", "ddddddddd"]

var output = strings
    .filter(string => string.length >= 5)
    .map(function (string) {
        return {
            str: string,
            length: string.length
        }
    })
    .reduce((ac, cValue) => cValue.length + ac, 0)

console.log(output)
