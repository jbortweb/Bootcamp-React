//kata
/*
let nombre = prompt('Introduce tu nombre');
let numero = prompt('introduce un numero y te dire si es primo o no');

const isPrime = numero => {
    for(let i = 2; i < numero; i++)
    if(numero % i === 0) return false;
    return numero > 1;
    }
    
    if(!isPrime(numero)){
    console.log(`Hola ${nombre}, el número que has introducido, ${numero}, NO es primo`);
    }else{
    console.log(`Hola ${nombre}, el número que has introducido, ${numero}, SI es primo`);
    }
*/

//Reto

const calcular = () => {
  var nombre = document.getElementById("nombre").value;
  var numero = document.getElementById("numero").value;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      noprimo = document.getElementById("respuesta");
      noprimo.style.backgroundColor = "red";
      resnoprimo = "Hola " + nombre + ", el número " + numero + " no es primo";
      document.getElementById("respuesta").innerHTML = resnoprimo;
      break;
    } else {
      primo = document.getElementById("respuesta");
      primo.style.backgroundColor = "green";
      resprimo = "Hola " + nombre + ", el número " + numero + " si es primo";
      document.getElementById("respuesta").innerHTML = resprimo;
    }
  }
};

//For of Vs For in

let apellidos = ["perez", "garcia", "gomez"];

for (let setname of apellidos) {
  console.log(setname);
}

let apellido = ['perez', 'garcia', 'gomez'];
for (let index in apellido) {
console.log('apellido[' + index + '] = ' +
apellido[index]);
}
