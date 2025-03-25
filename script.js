let contentBrands = document.querySelector('.content__brands')
let myButton = document.querySelector('.content__button');
let imgButton = document.querySelector('.content__button_img');
let textButton = document.querySelector('.content__button_text');




var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: ".true",
  },
  slidesPerView: 'auto',
  autoHeight: 'false',
  limitRotation: 'false',

});


// var swiper = new Swiper('.mySwiper', {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: ".true",
//   },
//   slidesPerView: 'auto',
//   autoHeight: 'false',
//   limitRotation: 'false',
// });
// if (window.matchMedia('(max-width: 768px)').matches) {swiper.destroy();}


// window.addEventListener('resize', function () { 
//   if (window.innerWidth <= 768) { 
//     mySwiper.destroy(); } else { mySwiper.init(); } 
//   });



// swiper.disable()



// window.addEventListener("resize", function() {
//   if (window.innerWidth > 768) {
//   swiper.disable(true);
//   } else {
//      swiper = new Swiper(".mySwiper", {
//      pagination: {
//          el: ".swiper-pagination",
//          clickable: ".true",
//        },
//          slidesPerView:'auto',
//          autoHeight:'false',
//          limitRotation:'false',

//      });
//    }
//    });





myButton.addEventListener('click', function () {
  if (document.getElementById('brandsId').className === 'swiper-wrapper content__brands') {
    document.getElementById('brandsId').className = 'swiper-wrapper brands_show'
  }
  else { document.getElementById('brandsId').className = 'swiper-wrapper content__brands' }



})

myButton.addEventListener('click', function () {
  if (textButton.textContent === 'Показать все') {
    textButton.textContent = 'Скрыть'
  } else { textButton.textContent = 'Показать все' }
});

// myButton.addEventListener('click', function () {
//   if (myButton.classList.contains('content__button')) {
//       myButton.classList.toggle('button_translate')
//   }
// });

myButton.addEventListener('click', function () {
  if (imgButton.classList.contains('content__button_img')) {
    imgButton.classList.toggle('img_rotate')
  }
});



