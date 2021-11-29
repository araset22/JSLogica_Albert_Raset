//Exercici 3
var nota = prompt("Introdueix una nota d'examen:")
switch (true){
    case (nota >= 0 && nota < 5):
        console.log('Està suspès.')
        break;
    case (nota >= 5 && nota < 6):
        console.log('Te un suficient.')
        break;
    case (nota >= 6 && nota < 7):
        console.log('Te un bé.')
        break;
    case (nota >= 7 && nota < 9):
        console.log('Te un notable.')
        break;
    case (nota >= 9 && nota <= 10):
        console.log('Te un excel·lent.')
        break;
    default:
        console.log('Introdueix una nota vàlida.')
}