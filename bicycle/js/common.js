$(document).ready(function() {
	
	//голова сайта на все экно браузера

	$("header").css("height", $(window).height());

	//карусель

	$(".owl-carousel").owlCarousel({
		items: 1,
		dots: true,
		autoplay: true,
		loop: true
	});

	//передвижение по галлереи (hover эффект) 

	$("body").mouseover(function(e) {

		var target = e.target;

		if (target.className == "gal-bg" || target.className == "gal-logo") return;

		while (true) {
			if (target.className == "galery") break;
			if (target.tagName == "BODY") return;
			target = target.parentElement;
		}

		target = e.target;
		$(target).addClass('active');

		$("body").append('<div class = "gal-bg"></div><img class = "gal-logo">');
		$(".gal-logo").attr("src","img/gallery-hover-icon.png");
		
		$(".gal-bg").css({
			"width":target.width,
			"height":target.height,
			"background-color":"#7fcaaf",
			"opacity":"0.5",
			"position":"absolute",
			"top":$(target).offset().top,
			"left":$(target).offset().left
		});
		
		$(".gal-logo").css("width", target.width / 4);
		
		$(".gal-logo").css({
			"position":"absolute",
			"z-index":"8888",
			"top":$(target).offset().top + target.height / 2 - $(".gal-logo").height() / 2,
			"left":$(target).offset().left + target.width / 2 - $(".gal-logo").width() / 2
		})
	});

	$("body").mouseout(function(e) {
		var rt = e.relatedTarget;

		if (rt)
			if (rt.className == "gal-bg" || rt.className == "gal-logo") return;

		$(".gal-bg").remove();
		$(".gal-logo").remove();
		$(".galery .active").removeClass('active');
	});

	//нажатие на картинки в галлерее 

	$("body").click(function(e) {
		var target = e.target;
		if (target.className == "gal-bg" || target.className == "gal-logo") {
			if (!window["window-full-bg"]) 
				$("body").append("<div id = 'window-full-bg'></div><div id = 'full-img-container'><img></div><div class = 'cancel'></div>");
			$("#window-full-bg").addClass('window-full-bg');
			$("#full-img-container").css('display', 'block');
			$("#full-img-container").addClass('full-img-container');
			$("#full-img-container img").attr('src', $('.galery .active')[0].getAttribute('src'));
			$(".cancel").css('display', 'block');
		}
		if (target.className == "cancel" || target.className == "window-full-bg") {
			$("#window-full-bg").removeClass('window-full-bg');
			$("#full-img-container").css('display', 'none');
			$("#full-img-container").removeClass('full-img-container');
			$("#full-img-container img").attr('src', '#');
			$(".cancel").css('display', 'none');
		}
	});

	//форма отправки
	/*$(".ajax-contact-form").submit(function() {
		var str = $(this).serialize();
		 
		$.ajax({
			type: "POST",
			url: "https://buboscandiacus28.github.io/bicycle/mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<p>Ваш заказ принят</p>';
					$(".fields").hide();
				} else {
					result = msg;
				}
				$('.note').html(result);
			}
		});
		return false;
	});*/
});

//прелоадер

$(function() {
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});