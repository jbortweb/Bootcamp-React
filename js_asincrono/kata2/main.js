let edad = 32;

const promise = new Promise((resolve, reject) => {

    if (edad > 18){
        resolve ('Entrada aceptada');
    }else{
        reject ('Entrada rechazada');
    }

});

promise
.then (value =>{
    return value + '. Eres mayor de edad.';  //Se pueden concatenar then
})
.then(value =>{
    console.log(value);
})
.catch(error =>{
    console.log(error)
})
.finally(() =>{
    console.log('Siempre entra');
});


