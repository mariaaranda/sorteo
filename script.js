'use strict'

let nodoNombre  = document.querySelector ("#nombre");
let nodoGuardar = document.querySelector ("#guardar");
let nodoSorteo  = document.querySelector ("#sortear")
let nodoLista   = document.querySelector ("#lista");


function guardar (concursante) {
    console.log( concursante ) 
    nodoLista.innerHTML = nodoLista.innerHTML + `<div class="nuevoconcursante"> <span>${concursante} </span></div>`;
}

nodoGuardar.addEventListener ("click", function( evento ){
    let concursante  = nodoNombre.value;   
    nodoNombre.value = ""; 
    guardar( concursante );
});

function aleatorio () {
    let num = Math.random() * listaConcursantes.length;
    console.log(num)
    return Math.trunc(num);//2.5 -> 2
    // return Math.round(num);//2.5 -> 3   
}
let listaConcursantes = [];

// nodoSorteo.addEventListener ("click", function () {        
        
//         let listaRemove = document.querySelectorAll (".ganador");
        
//         for (let i = 0; i < listaRemove.length; i++) {      
//             listaRemove [i].classList.remove ("ganador");     
//             console.log (listaRemove [i])
//         };

//         //OTRA MANERA DE RECORRER UNA LISTA
//         // listaRemove.forEach (function (cadaElemento){
//         //     cadaElemento.classList.remove ("ganador");
//         // })

//         listaConcursantes  = document.querySelectorAll (".nuevoconcursante");
//         console.log (listaConcursantes);

//         let ganador = aleatorio ();
//         console.log (ganador)
        
//         let nombreFinal = listaConcursantes [ganador];
//         console.log (nombreFinal)
//         nombreFinal.classList.add ("ganador");
// });

nodoSorteo.addEventListener ("click", function () {  
    let contador = 0;
    let intervalo = setInterval (function () {
        contador ++;
        if (contador>=50) {
            clearInterval (intervalo);
        }
        sortear ();
    }, 50);
});

function sortear () {
    let listaRemove = document.querySelectorAll (".ganador");
        
    for (let i = 0; i < listaRemove.length; i++) {      
        listaRemove [i].classList.remove ("ganador");     
        console.log (listaRemove [i])
    };

    //OTRA MANERA DE RECORRER UNA LISTA
    // listaRemove.forEach (function (cadaElemento){
    //     cadaElemento.classList.remove ("ganador");
    // })

    listaConcursantes  = document.querySelectorAll (".nuevoconcursante");
    console.log (listaConcursantes);

    let ganador = aleatorio ();
    console.log (ganador)
    
    let nombreFinal = listaConcursantes [ganador];
    console.log (nombreFinal)
    nombreFinal.classList.add ("ganador");
};
