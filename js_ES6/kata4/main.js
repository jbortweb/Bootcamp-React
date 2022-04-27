        //spread
/*
const spread = (name, ps, atk, def, speed) => {
  console.log("Nombre: ", name);
  console.log("Vida: ", ps);
  console.log("Ataque: ", atk);
  console.log("Defensa: ", def);
  console.log("Velocidad: ", speed);
};
let Pokemon = ["Pikachu", 35, 55, 40, 90];
spread(...Pokemon);

        //...args

function f(...args) {
  console.log(args);
}
f(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5] Convierte a Array

function g(arg1, arg2, ...argRest) {
  console.log(arg1, arg2, argRest);
}
g(1, 2, 3, 4, 5); // 1 2 [3,4,5]  Convierte el resto a Array
*/

        //kata

        let spread = (nombre) => {
            let arr = [];

            for(let i = 0; i < nombre.length; i++){

                if(nombre[i].charCodeAt(0) >= 97 && nombre[i].charCodeAt(0) <= 236){
                arr.push(nombre[i].charCodeAt(0)-32);
                arr[i] = String.fromCharCode(arr[i]);
                }else{
                arr.push(nombre[i].charCodeAt(0));
                arr[i] = String.fromCharCode(arr[i]);
                }
                }

            return arr;
            };

            let nombre = "Hola Mundo!";
            let resultado = spread([...nombre]);
            console.log(resultado);