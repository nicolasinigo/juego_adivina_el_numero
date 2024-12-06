let numero = Math.floor(Math.random() * 100) + 1; // Numero Random

let numeroEntranda = document.getElementById('numeroEntrante'); //Numero ingresado por el input
let mensaje = document.getElementById('mensaje'); //elemento para mostrar el msj

let volverJugar = document.getElementById('volverJugar'); 
let boton= document.getElementById('boton');
let cantidadIntentos = document.getElementById('intentos');

let intentos=0;

function comprobarNumero() { //Funcion de comprobar

    cantidadIntentos.textContent = intentos+1;

    let numeroIngresado = parseInt(numeroEntranda.value); //numero ingresado convertido en int

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {

        mensaje.textContent = 'Ingresa un valor permitido';
        numeroEntranda.value='';
        return
    }
    if (numeroIngresado < numero) {

        mensaje.textContent = 'El numero es MAYOR';
        mensaje.style.color = 'red';
        numeroEntranda.value='';

    } else if (numeroIngresado > numero) {

        mensaje.textContent = 'El numero es MENOR';
        mensaje.style.color = 'red';
        numeroEntranda.value='';

    } else {

        mensaje.textContent = 'ADIVINASTE!!!';
        mensaje.style.color = 'green';
        numeroEntranda.disabled = true;

        volverJugar.style.visibility = 'visible';
        boton.style.visibility = 'visible';

    }

}
function volver(){

}