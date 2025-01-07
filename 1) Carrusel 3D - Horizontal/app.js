// Inicializar Swiper con efectos 3D
const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 0, // Sin espacio entre las imágenes
  slidesPerView: 3, // Mostrar 3 imágenes
  centeredSlides: true, // Centra la imagen activa
  effect: 'slide', // Efecto de deslizamiento normal
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
