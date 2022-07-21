var swiper = new Swiper(".womens__slider", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let heroClick = document.querySelector('#hero__click');
  let heroAdd = document.querySelector('#hero__add');
  heroClick.addEventListener('click', function(){
    heroAdd.classList.toggle('hero__add');
  });