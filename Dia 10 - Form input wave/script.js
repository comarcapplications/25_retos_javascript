const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText //Obtener el texto interno 
        .split('') //Divide en cada matríz, por eso se pone vacia.
        .map((letter, idx) => `<span style="transition-delay:${idx * 200}ms">${letter}</span>`) //para convertirlo en una nueva matríz. El indice comienza en 0 y aumenta con cada elemento de la matríz.
        .join('') //Convierte la matriz en una cadena
}) 