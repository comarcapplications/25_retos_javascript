const textoElemento = document.getElementById('texto');
const velocidadElemento = document.getElementById('velocidad');
const texto = 'We love programming!!';
let indicePosicion = 1;
let velocidad = 400 / velocidadElemento.value //.value obtiene el valor

escribirTexto();

function escribirTexto () {
    textoElemento.innerText = texto.slice(0, indicePosicion) //Representa el texto renderizado en el navegador.
        indicePosicion++ //Incrementador

        if (indicePosicion > texto.length) {//Verificar si es el final de la cadena que se esta escribiendo
            indicePosicion = 1;
        }

    setTimeout(escribirTexto, velocidad);
}


velocidadElemento.addEventListener('input', (event) => velocidad = 400/event.target.value )