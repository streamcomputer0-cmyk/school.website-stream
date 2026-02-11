// $(document).ready(function() {
  function onClickMenu(){
    document.getElementById("adx-main-menu").classList.toggle('icon');
    document.getElementById("adx-nav").classList.toggle('change');
  }
// });



(function () {
  "use strict";

  var carousels = function () {
    $(".testimonialsSlider").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        767: {
          items: 2,
          nav: false,
          loop: false
        },
        1024: {
          items: 3,
          nav: true
        },
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();


// (function () {
//   "use strict";

//   var carousels = function () {
//     $(".owl-carousel1").owlCarousel({
//       loop: true,
//       center: true,
//       margin: 0,
//       responsiveClass: true,
//       nav: false,
//       autoplay: true,
//       responsive: {
//         0: {
//           items: 1,
//           nav: false
//         },
//         680: {
//           items: 2,
//           nav: false,
//           loop: false
//         },
//         1000: {
//           items: 3,
//           nav: true
//         }
//       }
//     });
//   };

//   (function ($) {
//     carousels();
//   })(jQuery);
// })();



$(document).ready(function() {

  const swiper = new Swiper(".why-sarvottam", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1140: {
        slidesPerView: 4,
      },
    }  
  });

}); 

$(document).ready(function() {

  const swiper = new Swiper(".rankers", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1140: {
        slidesPerView: 4,
      },
    }  
  });

}); 


$(document).ready(function() {
  const swiper = new Swiper(".partners", {
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    loop: true,
    autoplay: {
      delay: 1500, 
      pauseOnMouseEnter: true, 
      disableOnInteraction: false, 
      easing: 'linear' 
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    speed: 1000,
  });

});  

// $(document).ready(function() {

//     const swiper = new Swiper(".parents", {
//         effect: "coverflow",
//         grabCursor: true,
//         centeredSlides: true,
//         slidesPerView: "auto",
//         coverflowEffect: {
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         },
//         loop: true,
//         autoplay: {
//             pauseOnMouseEnter: true
//         },
//         // pagination: {
//         //   el: ".swiper-pagination",
//         // },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           },
//     });

// });

// Initialize Swiper
const swiper = new Swiper('.parents', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiper.on('click', function (swiper, event) {
        const clickedSlide = swiper.clickedSlide;

        if (clickedSlide) {
            const slideIndex = swiper.slides.indexOf(clickedSlide);
            swiper.slideTo(slideIndex);

            const iframes = document.querySelectorAll('.swiper-slide iframe');
            iframes.forEach((iframe) => {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            });

            const activeIframe = clickedSlide.querySelector('iframe');
            if (activeIframe) {
                activeIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
        }
    });




$(document).ready(function() {

    const swiper = new Swiper(".awards", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
        autoplay: true,
        // pagination: {
        //   el: ".swiper-pagination",
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

});







// $(document).ready(function(){
//   const headerSearchIcon = document.getElementById('search-icon');
//   const headerSearchInput = document.getElementById('search');

//   headerSearchIcon.addEventListener("click", function() {
//     headerSearchInput.boder="2px solid red";
//     headerSearchInput.width="100%";
//     headerSearchInput.display="block";
//   });

// });


 const parentsSwiper = new Swiper(".parents-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  loopedSlides: 3,
  speed: 600,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Popup logic for Swiper 1
const popup = document.getElementById("videoPopup");
const iframe = document.getElementById("videoIframe");
const closeBtn = document.getElementById("closePopup");

function triggerPopup(realIndex) {
  const correctSlide = Array.from(document.querySelectorAll(".parents-swiper .swiper-slide")).find(
    (slide) => slide.getAttribute("data-swiper-slide-index") === realIndex
  );
  if (correctSlide) {
    const img = correctSlide.querySelector("img");
    const videoId = img.getAttribute("data-video");
    if (videoId) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      popup.classList.add("active");
    }
  }
}

document.querySelectorAll(".parents-swiper .swiper-slide").forEach((slide) => {
  slide.addEventListener("click", () => {
    const realIndex = slide.getAttribute("data-swiper-slide-index");
    if (slide.classList.contains("swiper-slide-active")) {
      triggerPopup(realIndex);
    } else {
      parentsSwiper.slideToLoop(parseInt(realIndex));
      setTimeout(() => triggerPopup(realIndex), 700);
    }
  });
});

closeBtn.addEventListener("click", () => {
  iframe.src = "";
  popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    iframe.src = "";
    popup.classList.remove("active");
  }
});

  // Click-to-center functionality
  document.querySelectorAll(".parents-swiper .swiper-slide").forEach((slide) => {
    slide.addEventListener("click", () => {
      const realIndex = slide.getAttribute("data-swiper-slide-index");
      parentsSwiper.slideToLoop(parseInt(realIndex));
    });
  });




