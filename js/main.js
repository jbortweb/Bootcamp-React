//Arrays
/*        
var notas = [5, 6, 7, 8, 3, 2, 4, 10, 3];

console.log (notas[2]); // 7
console.log (notas.length)  //9

notas[2] = 5;
console.log (notas[2]); // 5

for (let i = 0; i < notas.length; i++){

    console.log ('Bucle nº '+ i);
    console.log (notas[i]);
}
*/
//Metodo Push

var notas = [];
var notasClaseB = [3, 5, 8];
var nAlumnos = 5;

for (var i = 1; i <= nAlumnos; i++) {
  var newNota = prompt("Introduce la nota nº " + i);
  notas.push(Number(newNota));
}
console.log('Metodo push, añade al final');
console.log(notas);

//Metodo Concat
console.log('Metodo contac (3, 5, 8)');
console.log(notas.concat(notasClaseB));

//Metodo Join
console.log('Metodo join, string separado por puntos');
console.log(notas.join('.'));

//Metodo unshift
console.log('Metodo unshift, coloca delante del array');
console.log(notas.unshift(2));
console.log(notas);

//Metodo shift
console.log('Metodo shift, elimina primer elemento');
console.log(notas.shift());
console.log(notas);

//Metodo pop
console.log('Metodo pop, elimina ultimo elemento');
console.log(notas.pop());
console.log(notas);

//Metodo Reverse
console.log('Metodo reverse');
console.log(notas.reverse());
