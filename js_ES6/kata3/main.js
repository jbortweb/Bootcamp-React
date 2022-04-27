//Kata3
/*
let nombrerobot = (nombre, prefijo="RX") => prefijo + numero;

let numero = Math.floor(Math.random() * 999);

let resultado = nombrerobot(numero);

console.log (resultado);
*/

        //Reto

let nombre = (completo) => {

    let primera = completo[0]+completo[1];
    let minuscula = primera.toLowerCase();
    let mayuscula = primera.toUpperCase();
    let abecedario = 'abcdefghijklmnopqrstuvwxyz'
    let calcularuno = abecedario.indexOf(minuscula[0]) + 1;
    let calculardos = abecedario.indexOf(minuscula[1]) + 1;
    let total = mayuscula + calcularuno + calculardos;

    return  completo + ' ' + primera + ' ' + mayuscula + ' ' + mayuscula[0] + ' = ' + calcularuno + ' ' + mayuscula[1] + ' = ' + calculardos + ' ' + total;

}

let resultado = nombre("Javier");
console.log (resultado);
