const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    // Remove hover image display behavior
    // elemC.addEventListener("mouseenter", function () {
    //     fixed.style.display = "block"
    // })
    // elemC.addEventListener("mouseleave", function () {
    //     fixed.style.display = "none"
    // })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        // Remove hover image display behavior
        // e.addEventListener("mouseenter", function () {
        //     var image = e.getAttribute("data-image")
        //     fixed.style.backgroundImage = `url(${image})`
        // })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                coverflowEffect: {
                    rotate: 30,
                    stretch: 0,
                    depth: 80,
                    modifier: 1,
                    slideShadows: true,
                },
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
                coverflowEffect: {
                    rotate: 40,
                    stretch: 0,
                    depth: 90,
                    modifier: 1,
                    slideShadows: true,
                },
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                coverflowEffect: {
                    rotate: 45,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 110,
                    modifier: 1,
                    slideShadows: true,
                },
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 50,
                coverflowEffect: {
                    rotate: 55,
                    stretch: 0,
                    depth: 120,
                    modifier: 1,
                    slideShadows: true,
                },
            },
        },
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    if(menu) {
        menu.addEventListener("click", function () {
            if (flag == 0) {
                if(full) full.style.top = 0;
                if(navimg) navimg.style.opacity = 0;
                flag = 1
            } else {
                if(full) full.style.top = "-100%";
                if(navimg) navimg.style.opacity = 1;
                flag = 0
            }
        })
    }
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()
