'use strict';

let iterate = 1;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
const MIN_ITERATE = 1;
const MAX_ITERATE = slides.length;

const carousalBackward = function () {
  if (iterate > MIN_ITERATE) {
    iterate--;
    slides.forEach((slide) => {
      slide.classList.remove('active');
      if (slide.classList.contains(`slide-${iterate}`)) {
        slide.classList.add('active');
      }
    });
  }
};

const carousalForward = function () {
  if (iterate < MAX_ITERATE) {
    iterate++;
    slides.forEach((slide) => {
      slide.classList.remove('active');
      if (slide.classList.contains(`slide-${iterate}`)) {
        slide.classList.add('active');
      }
    });
  }
};

// const playCarousal = setInterval(function () {
//   prevBtn.addEventListener('click', carousalBackward);
//   nextBtn.addEventListener('click', carousalForward);
//   if (iterate < MAX_ITERATE) {
//     iterate++;
//     slides.forEach((slide) => {
//       slide.classList.remove('active');
//       if (slide.classList.contains(`slide-${iterate}`)) {
//         slide.classList.add('active');
//       }
//     });
//   } else {
//     iterate = 0;
//   }
// }, 3000)();

prevBtn.addEventListener('click', carousalBackward);
nextBtn.addEventListener('click', carousalForward);
