document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const sliderInner = document.querySelector(".slider-inner");
  const prevArrow = document.querySelector(".arrow.prev");
  const nextArrow = document.querySelector(".arrow.next");

  const slideWidth = slider.clientWidth;
  let currentSlide = 0;

  // Função para mover para o slide anterior
  function goToPrevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      sliderInner.style.transform = `translateX(-${
        currentSlide * slideWidth
      }px)`;
    }
  }

  // Função para mover para o próximo slide
  function goToNextSlide() {
    if (currentSlide < sliderInner.children.length - 1) {
      currentSlide++;
      sliderInner.style.transform = `translateX(-${
        currentSlide * slideWidth
      }px)`;
    }
  }

  // Adiciona os eventos de clique nas setas de navegação
  prevArrow.addEventListener("click", goToPrevSlide);
  nextArrow.addEventListener("click", goToNextSlide);
});
