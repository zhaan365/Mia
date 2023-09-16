let burger = document.querySelector(".header__burger")
let menu = document.querySelector(".header__menu")
let menuClose = document.querySelector(".header__menu-close")
 burger.addEventListener("click", () => {
     menu.classList.toggle("active")
 } )
menuClose.addEventListener("click", () => {
    menu.classList.toggle("active")
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
      768 : {
          slidesPerView: 3,
      },
      553: {
          slidesPerView: 1,
      },
      542: {
            slidesPerView: 1,
        },
      425: {
          slidesPerView: 1,
      },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


