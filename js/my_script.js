$(function () {

  //hamburger menu

  $('#ham_menu').on('click', function () {
    $('#mobile').addClass('on');
    $(this).fadeOut();
  });

  $('#menu').on('click', function () {
    $('#mobile').removeClass('on');
    $('#ham_menu').fadeIn();
  });

  $('#close_button').on('click', function () {
    $('#mobile').removeClass('on');
    $('#ham_menu').fadeIn();
  });

  //	top button

  var showFlag = false;
  var $pageTop = $('#page_top');
  var $pageTopPc = $('#page_top_pc');

  $pageTop.fadeOut();
  $pageTopPc.fadeOut();

  $(window).scroll(function () {
    if ($(this).scrollTop() > $('header').height()) {
      if ($(this).innerWidth() <= 768) {
      if (showFlag === false) {
        showFlag = true;
        $pageTop.stop().fadeIn();
      }
    } else if ($(this).innerWidth() >= 768) {
      if (showFlag === false) {
        showFlag = true;
        $pageTopPc.stop().fadeIn();
      }
    }
  } else {
      if (showFlag) {
        showFlag = false;
        $pageTopPc.stop().fadeOut();
        $pageTopPc.stop().fadeOut();
      }
    }
  });

  $pageTop.click(function () {
    $('body,html').animate({
      scrollTop: 0,
    }, 1500);
    return false;
  });

  $pageTopPc.click(function () {
    $('body,html').animate({
      scrollTop: 0,
    }, 1500);
    return false;
  });

  /* fade image */

  $('.slide').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    draggable: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.bg-slider').bgSwitcher({
      images: ['./images/pc/header.png', './images/pc/header2.png', './images/pc/header3.png'],
    });

});
