$('.owl-carousel').owlCarousel({
    items: 1,
    mouseDrag: false,
    nav: true,
})

$('.owl-nav button.owl-prev')[0].addEventListener('click', () => {
    let id = $('.product-present__description.active')[0].getAttribute('id').split('product-present__description-')[1];
    if (id == 1) return;
    document.querySelector(`#product-present__description-${id}`).classList.toggle('active');
    document.querySelector(`#product-present__description-${--id}`).classList.toggle('active');
});

$('.owl-nav button.owl-next')[0].addEventListener('click', () => {
    let id = $('.product-present__description.active')[0].getAttribute('id').split('product-present__description-')[1];
    if (id == 3) return;
    document.querySelector(`#product-present__description-${id}`).classList.toggle('active');
    document.querySelector(`#product-present__description-${++id}`).classList.toggle('active');
});

$('.communication__before-btn')[0].addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    $('.communication__before-btn')[0].classList.toggle('active');
    $('.communication__after-btn')[0].classList.toggle('active');
    $('.communication__before-content')[0].classList.toggle('active');
    $('.communication__after-content')[0].classList.toggle('active');
});

$('.communication__after-btn')[0].addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    $('.communication__before-btn')[0].classList.toggle('active');
    $('.communication__after-btn')[0].classList.toggle('active');
    $('.communication__before-content')[0].classList.toggle('active');
    $('.communication__after-content')[0].classList.toggle('active');
});

document.querySelectorAll('.submit__form input:not([type="submit"])').forEach((item) => {
    item.addEventListener('focus', (e) => {
        if (e.target.parentNode.querySelector('.submit__form-placeholder-icon')) {
            e.target.parentNode.querySelector('.submit__form-placeholder-icon').style.display = "none";
        } else {
            e.target.placeholder = '';
        }
        e.target.parentNode.querySelector('p').style.display = 'block';
        e.preventDefault();
    });
});

document.querySelectorAll('.submit__form input:not([type="submit"])').forEach((item) => {
    item.addEventListener('blur', (e) => {
        if (e.target.parentNode.querySelector('.submit__form-placeholder-icon')) {
            if (e.target.value === "") e.target.parentNode.querySelector('.submit__form-placeholder-icon').style.display = "block";
        } else {
            e.target.placeholder = e.target.parentNode.querySelector('p').textContent;
        }
        e.target.parentNode.querySelector('p').style.display = 'none';
        e.preventDefault();
    })
})
