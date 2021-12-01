//Exercici 5

var text  = "1g22 1h4te 2ary 54st2 5yu4s"
var num = text.replace(/[^0-9]/gi, "")
var suma = 0

for (var i = 0; i < num.length; i++){
    suma += Number(num.charAt(i))
}

console.log(suma);