//Exercici 11

var num = 235654
var array = Array.from([2, 3, 5, 6, 5, 4]) 
console.log(array)
var count = 0
for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        var temp = array[i]
        array[i] = array[i - 1]
        array [i - 1]
    }
}
console.log(array)