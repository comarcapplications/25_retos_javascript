const container = document.getElementById('container')
const colors = ['#00af91', '#007965', '#f58634', '#ffcc29', '#af0069']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square) 
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#444'
   element.style.boxShadow = '0 0 2px #111'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}