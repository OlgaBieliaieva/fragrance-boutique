let swiperInstance = null;

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768 && swiperInstance === null) {
    swiperInstance = new Swiper(".swiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1.3,
    });
  } else if (screenWidth >= 768 && swiperInstance !== null) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

initSwiper();

window.addEventListener("resize", initSwiper);
