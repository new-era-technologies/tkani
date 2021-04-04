'use strict';

const mainLinks = document.querySelectorAll('.header__list__item');

const showHideSub = (el) => {
    el.addEventListener('mouseenter', function () {
        el.children[1].classList.add('show-sub');
    });
    el.addEventListener('mouseleave', function () {
        el.children[1].classList.remove('show-sub');
    })
}

mainLinks.forEach(
    it => it.children.length > 1 ? showHideSub(it) : null
)
