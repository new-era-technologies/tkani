'use strict';

const slides = document.querySelectorAll('.slider__item'),
    arrowLeft = document.getElementById('slider-left'),
    arrowRight = document.getElementById('slider-right');
let slideIndex = 1;

showSlide(slideIndex);

arrowLeft.addEventListener('click', function () {
    showSlide(slideIndex -= 1);
});

arrowRight.addEventListener('click', function () {
    showSlide(slideIndex += 1);
});

function showSlide(i) {

    i < 1 ? slideIndex = slides.length : null;
    i > slides.length ? slideIndex = 1 : null;

    slides.forEach(
        it => it.style.display = 'none'
    )

    slides[slideIndex - 1].style.display = 'block';
}