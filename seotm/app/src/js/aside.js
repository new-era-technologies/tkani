'use strict';

const dropItems = document.querySelectorAll('.category__dropdown');

dropItems.forEach(
    d => d.addEventListener('click', function () {
        const it = this.closest('.category__item').children[1];
        this.children[0].classList.toggle('transform-arrow');
        it.classList.contains('block-subfilter') ? setTimeout(function () { it.classList.remove('block-subfilter') }, 400) : it.classList.add('block-subfilter');
        setTimeout(function () {
            it.classList.toggle('show-subfilter');
        }, 100);
    })
)