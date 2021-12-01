//Exercici 6

var num1  = prompt('Introdueix un número:')
var num2  = prompt('Introdueix un segon número:')
var num3  = prompt('Introdueix un tercer número:')

function ordenar(num1,num2,num3){

    if (num1>=num2 && num2>=num3) {
        console.log(num1 + ' ' + num2 + ' ' + num3)
    }
    else if (num1>=num3 && num3>=num2) {
        console.log(num1 + ' ' + num3 + ' ' + num2)
    }
    else if(num2>=num1 && num1>=num3){
        console.log(num2 + ' ' + num1 + ' ' + num3)
    }
    else if(num2>=num3 && num3>=num1){
        console.log(num2 + ' ' + num3 + ' ' + num1)
    }
    else if (num3>=num1 && num1>=num2) {
        console.log(num3 + ' ' + num1 + ' ' + num2)
    }
    else{
        console.log(num3 + ' ' + num2 + ' ' + num1)
    }

}
console.log(ordenar(num1,num2,num3))