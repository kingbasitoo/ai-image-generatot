var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints:{
        0:{
            slidesPerView : 1
        },
        768:{
            slidesPerView : 2
        },
        1024:{
            slidesPerView : 3
        }
    }
});