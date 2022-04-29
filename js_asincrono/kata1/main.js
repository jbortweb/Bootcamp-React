function resultado(total) {
    document.getElementById('cifra').innerHTML = total;
}


document.querySelector("#operar").addEventListener('click',() =>
{   
    let a = parseInt(document.querySelector("#a").value);
    let b = parseInt(document.querySelector("#b").value);

    var valor = a + b ;
    resultado(valor);
})

document.querySelector("#restar").addEventListener('click',() =>
{   
    let a = parseInt(document.querySelector("#a").value);
    let b = parseInt(document.querySelector("#b").value);

    var valor = a - b ;
    resultado(valor);
})

document.querySelector("#multiplicar").addEventListener('click',() =>
{   
    let a = parseInt(document.querySelector("#a").value);
    let b = parseInt(document.querySelector("#b").value);

    var valor = a * b ;
    resultado(valor);
})

document.querySelector("#dividir").addEventListener('click',() =>
{   
    let a = parseInt(document.querySelector("#a").value);
    let b = parseInt(document.querySelector("#b").value);

    var valor = a / b ;
    resultado(valor);
})

