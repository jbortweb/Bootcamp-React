/*
let contador = string => {
    return string.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
    }, {});
    };
    //depositamos el resultado que retorna la función a una variable
    let resultado = contador("Hola mundo");
    console.log(resultado);
*/

        //RETO

let contador = string => {

    var vocales = ["á","é","í","ó","ú"];
    var acentos = 0;
    var mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var totalmayus = 0;
    
    const palabras = string.split(' ').length;
    const sinEspacios = string.split(" ").join("").length;
    const sinPuntosNiEs = string.replace(/[,.;]/g," ").split(" ").join("").length;

    for ( let i = 0; i < string.length; i++) {

        for (let j = 0; j < vocales.length; j++){

            if ( string[i] == vocales[j] ){
                acentos++;
            }
        }
    }
    
    for ( let i = 0; i < string.length; i++) {

        for (let j = 0; j < mayusculas.length; j++){

            if ( string[i] == mayusculas[j] ){
                totalmayus++;
            }
        }
    }

    carac = 'El total de caracteres es '+ string.length;
    
    palab = 'En numero de palabras son ' + palabras + "\n";
    sines = 'Los caracteres sin espacios son ' + sinEspacios + "\n";
    sinpun = 'Los caracteres sin espacios ni signos de puntuación son ' + sinPuntosNiEs + "\n";
    sinacen = 'Los caracteres sin contar las vocales acentuadas son '+ (string.length - acentos) + "\n";
    sinmayus = 'Los caracteres sin contar las mayusculas son '+ (string.length - totalmayus);

    return palab + sines + sinpun + sinacen + sinmayus;
    
}


let resultado = contador ("Lá prímERa frase, Que sE me ócuRre.");
console.log(resultado);
