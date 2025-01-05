const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentPosition = 0;
const totalItems = 10;
let autoRotate;
const rotationAngle = 360 / totalItems;

// Función para actualizar la rotación manualmente (con transición)
function updateRotation() {
  const angle = currentPosition * -rotationAngle; // Se invierte el ángulo para corregir los botones
  slider.style.transform = `perspective(1000px) rotateX(-8deg) rotateY(${angle}deg)`;
}

// Función para avanzar a la siguiente imagen
function nextSlide() {
  currentPosition = (currentPosition + 1) % totalItems;
  updateRotation();
  pauseCarousel();
}

// Función para retroceder a la imagen anterior
function prevSlide() {
  currentPosition = (currentPosition - 1 + totalItems) % totalItems;
  updateRotation();
  pauseCarousel();
}

// Pausar el carrusel e iniciar el temporizador
function pauseCarousel() {
  slider.classList.add("paused");
  clearTimeout(autoRotate);
  autoRotate = setTimeout(() => {
    slider.classList.remove("paused");
  }, 10000); // Reanuda después de 10 segundos
}

// Listeners para los botones (corregidos)
nextBtn.addEventListener("click", nextSlide); // Flecha derecha: avanzar
prevBtn.addEventListener("click", prevSlide); // Flecha izquierda: retroceder

// Inicio automático
pauseCarousel();
