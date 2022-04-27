/* let radio = Number(prompt('Indica la medida del radio'));
const pi = 3.14;

alert ('El perimetro del círculo es ' + (2*pi*radio) + '. El área del círculo es ' + (pi*(radio**2)));
*/
function calcular(){
let radio = document.getElementById('cifra').value;
const pi = 3.14;

document.getElementById("parrafo").innerHTML = ('El perimetro del círculo es ' + (2*pi*radio).toFixed(2) + '. El área del círculo es ' + (pi*(radio**2)).toFixed(2));
}