//Exercici 7

var num = prompt('Introdueix un número:')

for(var i = 0; i <= num; i++){
    if (i %2 === 0) {
        console.log(i + ' es un numero parell.')
    }
    else{
        console.log(i + ' es un numero senar.')
    }
}