function suma(num1, num2){

    return num1 + num2;
}

console.log (suma(4,6));



        // Funcion anonima

var elevar = function(num,exp){
    return num**exp;
}
console.log (elevar(3,3));



        //Dibujar tabla multiplicar

function DibujarTabla(table){

    for( let i = 0; i <= 10; i++){
        console.log (table + ' X ' + i + ' = ' + (table*i));
    }
}

DibujarTabla(3);