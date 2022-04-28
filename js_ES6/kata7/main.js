        //kata
/*
class Vehiculo {
  constructor(marca, matricula, ruedas, puertas, años, velocidad) {
    this.marca = marca;
    this.matricula = matricula;
    this.ruedas = ruedas;
    this.puertas = puertas;
    this.años = años;
    this.velocidad = velocidad;
  }
  correr() {
    return (this.velocidad += 10);
  }
  frenar() {
    return (this.velocidad = 0);
  }
  aparcar() {
    return console.log("Aparcado!");
  }
}

class Coche extends Vehiculo {
  constructor(marca, matricula, ruedas, puertas, años, velocidad) {
    super(marca, matricula, ruedas, puertas, años, velocidad);
    this.consumo = "Diesel";
  }
}
class Moto extends Vehiculo {
  constructor(marca, matricula, ruedas, puertas, años, velocidad) {
    super(marca, matricula, ruedas, puertas, años, velocidad);
  }
}
class Patin extends Vehiculo {
  constructor(marca, matricula, ruedas, puertas, años, velocidad) {
    super(marca, matricula, ruedas, puertas, años, velocidad);
  }
}
class Bicicleta extends Vehiculo {
  constructor(marca, matricula, ruedas, puertas, años, velocidad) {
    super(marca, matricula, ruedas, puertas, años, velocidad);
  }
}

let coche = new Coche('Seat', '4563-CCJ', 4, 5, 2015, 220);
let moto = new Moto('Honda', '6763-DCJ', 2, 0, 2018, 180);
let patin = new Patin('Honda', 0, 2, 0, 2020, 40);
let bici = new Bicicleta('BH', 0, 2, 0, 2012, 60);

console.log(patin.velocidad);

*/

class Circuito {
  constructor(nombre, vueltas, kilometros) {
    this.nombre = nombre;
    this.vueltas = vueltas;
    this.kilometros = kilometros;
  }
}

class Montmelo extends Circuito {
  constructor(nombre, vueltas, kilometros){
  super(nombre, vueltas, kilometros);
  }
}

class Jarama extends Circuito {
  constructor(nombre, vueltas, kilometros){
  super(nombre, vueltas, kilometros);
  }
}

class Jerez extends Circuito {
  constructor(nombre, vueltas, kilometros){
  super(nombre, vueltas, kilometros);
  }
}

class Alcanyiz extends Circuito {
  constructor(nombre, vueltas, kilometros){
  super(nombre, vueltas, kilometros);
  }
}

let montmelo = new Montmelo('Montmelo', 15, 600);
let jarama = new Jarama('Jarama', 20, 580);
let jerez = new Jerez('Jerez', 18, 620);
let alcanyiz = new Alcanyiz('Alcañiz', 22, 650);

console.log(jerez.vueltas);

class Vehiculo{
  constructor(marca, velocidad, deposito, tiempoRepostaje, neumaticos){
    this.marca = marca;
    this.velocidad = velocidad;
    this.deposito = deposito;
    this.tiempoRepostaje = tiempoRepostaje;
    this.neumaticos = neumaticos;
  }
}

class Mercedes extends Vehiculo {
  constructor(marca, velocidad, deposito, tiempoRepostaje, neumaticos){
    super(marca, velocidad, deposito, tiempoRepostaje, neumaticos);
  }
}

class Bmw extends Vehiculo {
  constructor(marca, velocidad, deposito, tiempoRepostaje, neumaticos){
    super(marca, velocidad, deposito, tiempoRepostaje, neumaticos);
  }  
}

class Ford extends Vehiculo {
  constructor(marca, velocidad, deposito, tiempoRepostaje, neumaticos){
    super(marca, velocidad, deposito, tiempoRepostaje, neumaticos);
  }
}

class Citroen extends Vehiculo {
  constructor(marca, velocidad, deposito, tiempoRepostaje, neumaticos){
    super(marca, velocidad, deposito, tiempoRepostaje, neumaticos);
  }  
}

let mercedes= new Mercedes('Mercedes', 210, 40, 5, 350);
let bmv= new Bmw('BMW', 208, 45, 4, 330);
let ford= new Ford('Ford', 205, 65, 9, 315);
let citroen= new Citroen('Citroen', 202, 40, 7, 370);

console.log(montmelo.kilometros + ford.neumaticos);