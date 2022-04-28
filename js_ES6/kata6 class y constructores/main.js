/*
class Tarea {
    constructor(texto, id) {
    console.log('tarea instanciada! con el texto:', texto);
    this.texto = texto;
    this.id = id;
    this.fecha = new Date();
    }
    fechaHoy() {
    this.fecha = new Date();
    }
    }
    let tarea = new Tarea('comprar leche', 1); // "tarea instanciada!"

    console.log(typeof tarea); // object
    console.log(tarea); // Tarea { texto: 'comprar leche', id: 1,
    fecha:{}
*/

        //kata

    class Coche {
      constructor(nombre, marca, velocidad) {
        this.nombre = nombre;
        this.marca = marca;
        this.velocidad = velocidad;
      }
      acelerar() {
        return this.velocidad + 30;
      }
      frenar() {
        return (this.velocidad = 0);
      }
    }
    let coche = new Coche('Seat', 'Cordoba', 220);
    console.log(coche);
    console.log(coche.frenar());