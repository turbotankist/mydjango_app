$(document).ready(function(){
 $('.sl').slick({
  slidesToShow: 2,
  slidesToScroll: 1
});

  $("#menus, .footer-block").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
  $("#mobile-menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $(this).removeClass('active');
    $('#mobile-menu').fadeOut('fast');
    $('.mobile-logo img').attr('src', 'images/logo-mobile.png');
    $('body,html').animate({scrollTop: top-20}, 700);
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
    $('.mobile-logo img').attr('src', 'images/logo-mobile.png');
  } else {
    $(this).addClass('active');
    $('#mobile-menu').fadeIn('fast'); 
    $('.mobile-logo img').attr('src', 'images/logo_active.png');
  }
});

});