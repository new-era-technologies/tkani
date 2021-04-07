'use strict';

const dropItems = document.querySelectorAll('.category__dropdown'),
    inputCheckAll = document.querySelectorAll('.category__input--all'),
    checkInputs = document.querySelectorAll('.category__subfilter .category__label .category__input'),
    rangeInps = document.querySelectorAll('.category__input--range');

let checkedIndex = 0;

// show/hide submenu in category
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

// check/uncheck all children checkboxes by clicking parent checkbox
inputCheckAll.forEach(
    inp => inp.addEventListener('change', function () {
        const allChildrenChb = this.closest('.category__item').children[1].querySelectorAll('.category__input');
        this.checked ? allChildrenChb.forEach(function (ch) { ch.checked = true; checkedIndex = 5; }) : allChildrenChb.forEach(function (ch) { ch.checked = false; checkedIndex = 0 });
    })
)

// uncheck parent checkbox if some of children unchecked
function hideParentCheckInp() {
    checkInputs.forEach(
        chInp => chInp.addEventListener('change', function () {

            const allChildrenChb = this.closest('.category__subfilter').querySelectorAll('.category__input');
            const parentCheck = this.closest('.category__item').children[0].children[0];

            this.checked ? checkedIndex += 1 : checkedIndex -= 1;

            if (checkedIndex == allChildrenChb.length) {
                parentCheck.checked = true;
            }

            if (!this.checked) {
                parentCheck.checked = false;
            }
        })
    )
}

hideParentCheckInp();

//get value from range input
rangeInps.forEach(
    rng => rng.addEventListener('change', function () {
        const fromInp = this.closest('.category').querySelector('.category__input--from');
        const toInp = this.closest('.category').querySelector('.category__input--to');

        fromInp.value = 0;
        toInp.value = this.value;
    })
)