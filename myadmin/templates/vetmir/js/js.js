$(document).ready(function(){
 $('.sl').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: '<img src="images/arrow.png">'
});

    $("#menus").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

$('.sl-mobile').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<img src="images/arrow.png">'
});


$('.mobile-icon').click(function(){
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('#mobile-menu').fadeOut('fast');
	} else {
		$(this).addClass('active');
		$('#mobile-menu').fadeIn('fast');	
	}
});

});