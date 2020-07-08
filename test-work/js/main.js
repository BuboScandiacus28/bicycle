$(document).ready(function () {

    $('#language').select2();

    $('.bxslider').bxSlider({
        mode: 'vertical',
        slideMargin: 30,
        controls: true,
        responsive: false,
        prevText: '<img src="./img/arrow-slider.svg" alt="стрелка слайдера">',
        nextText: '<img src="./img/arrow-slider.svg" alt="стрелка слайдера">',
        prevSelector: $('.carousel-prev'),
        nextSelector: $('.carousel-next'),
        minSlides: 3,
        pager: false,
    });

    $('.bxslider li').click(function(event){
        $('.bxslider > .selected').toggleClass('selected');
        
        $(this).toggleClass('selected');
        
        let img = '#'+$(this).data('img');
        
        $('.photo-block > *').not('.disabled').toggleClass('disabled');

        $(img).toggleClass('disabled');
    });
});

$(function() {
	$(".loaderInner").delay(400).fadeOut(); 
	$(".loader").delay(800).fadeOut("slow"); 
});