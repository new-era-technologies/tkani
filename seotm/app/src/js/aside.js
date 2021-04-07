'use strict';

const dropItems = document.querySelectorAll('.category__dropdown'),
    inputCheckAll = document.querySelectorAll('.category__input--all'),
    checkInputs = document.querySelectorAll('input[type=checkbox]'),
    rangeInps = document.querySelectorAll('.category__input--range');

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

inputCheckAll.forEach(
    inp => inp.addEventListener('change', function () {
        const allChildrenChb = this.closest('.category__item').children[1].querySelectorAll('.category__input');
        this.checked ? allChildrenChb.forEach(ch => ch.checked = true) : allChildrenChb.forEach(ch => ch.checked = false);
    })
)


function hideParentCheckInp() {
    checkInputs.forEach(
        chInp => chInp.addEventListener('change', function () {
            let checkedLength = chInp.checked;
            console.log(checkedLength);
            if (!this.checked) {
                const parentCheck = this.closest('.category__item').children[0].children[0];
                parentCheck.checked = false;
            }
        })
    )
}

hideParentCheckInp();

rangeInps.forEach(
    rng => rng.addEventListener('change', function () {
        const fromInp = this.closest('.category').querySelector('.category__input--from');
        const toInp = this.closest('.category').querySelector('.category__input--to');

        fromInp.value = 0;
        toInp.value = this.value;
    })
)