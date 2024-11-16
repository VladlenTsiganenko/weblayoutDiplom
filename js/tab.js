let tabsBtn = document.querySelectorAll('.catalog__btn-painter');
let tabsItem = document.querySelectorAll('.catalog__left-wrapper');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('catalog__inner-btn-active') })
        e.currentTarget.classList.add('catalog__inner-btn-active');

        tabsItem.forEach(function(element){element.classList.remove('catalog__left-wrapper-visible')});
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-wrapper-visible');

    });
});
