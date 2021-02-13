//Matríz con lista de id de los sonidos 
const sounds = [
    'applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'
]

//Recorrer la matríz para cada sonido
sounds.forEach(sound => { //crear una funcion
    const btn = document.createElement('button') //crear una variable boton
    btn.classList.add('btn'); //Le damos una clase a cada boton recorrido para darle el estilo  que se encuentra en el CSS

    btn.innerText = sound //le da el texto interno a cada boton

    btn.addEventListener ('click', () => {
        stopSounds()//Detener sonido cuando le da click a otro boton
        document.getElementById(sound).play()//busca el sonido en particular para reproducirlo
    })//Agregar un detector de eventos a cada boton. Cuando de click haga una funcion

    document.getElementById('buttons').
    appendChild(btn); //obtener el contenedor de botones pasando el boton https://www.w3schools.com/jsref/met_node_appendchild.asp
})

function stopSounds (){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);//Tomar la matriz sounds y para cada sonido crear una variable llamada song
        song.pause()
        song.currentTime = 0;//Poner el tiempo de reproduccion a cero
    })
}