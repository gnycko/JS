const wrapper = document.getElementById('scrollWrapper');
const cards = document.querySelectorAll('.horizontal-scroll-wrapper > .card ');
const scrollSpeed = 1; // Puedes ajustar la velocidad

let scrolling = true; // Variable para controlar si se debe desplazar o no

// Clonar y agregar las tarjetas al final para crear la ilusión de un desplazamiento infinito
cards.forEach(card => {
const clone = card.cloneNode(true);
wrapper.appendChild(clone);
});

function moveCards() {
if (!scrolling) return; // No desplazar si scrolling es false

// Desplazar el wrapper
wrapper.scrollLeft += scrollSpeed;

// Una vez que las tarjetas originales están completamente fuera de la vista, reinicia la posición del scroll
if (wrapper.scrollLeft >= cards[0].offsetWidth * cards.length) {
wrapper.scrollLeft = 0;
}
}

wrapper.addEventListener('mouseover', () => {
  scrolling = false; // Detener el desplazamiento cuando el cursor está sobre el wrapper
});

wrapper.addEventListener('mouseout', () => {
  scrolling = true; // Continuar el desplazamiento cuando el cursor ya no está sobre el wrapper
});

// Iniciar el desplazamiento
setInterval(moveCards, 30);


