$(document).ready(function () {

    $('#language').select2();

    $('.bxslider').bxSlider({
        mode: 'vertical',
        slideMargin: 30,
        controls: true,
        responsive: false,
        prevText: '<i class="fas fa-arrow-up fa-2x"></i>',
        nextText: '<i class="fas fa-arrow-down fa-2x"></i>',
        prevSelector: $('.carousel-prev'),
        nextSelector: $('.carousel-next'),
        minSlides: 3,
        pager: false,
    });

    $('.bxslider li').click(function(event){
        let img = '#'+$(this).data('img');
        
        $('.photo-block > *').not('.disabled').toggleClass('disabled');

        $(img).toggleClass('disabled');
    });
});