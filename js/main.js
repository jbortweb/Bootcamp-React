//Objetos

/* var marca = 'Ferrari';
var modelo = "Serie X";
var anyoFabricacion = '2020';
var nPuertas = 4;
var deposito = 30; */

var Ferrari = {
  marca : 'Ferrari',
  modelo : "Serie X",
  anyoFabricacion : '2020',
  nPuertas : 4,
  deposito : 30,
  autonomia : 500
  };

  var Mercedes = {
    marca : 'Mercedes',
    modelo : "Serie 3",
    anyoFabricacion : '2018',
    nPuertas : 2,
    deposito : 60,
    autonomia : 800
    };

  console.log(Ferrari.modelo);
  console.log(Mercedes.modelo);

  function MejorAutonomia(coche1, coche2){
    if(coche1.autonomia > coche2.autonomia){
        console.log(coche1.marca);
    }else{
      console.log(coche2.marca);
    }
  }

  MejorAutonomia(Ferrari, Mercedes);

  //Objetos en Arrays


  