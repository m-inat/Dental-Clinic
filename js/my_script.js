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

  $pageTop.fadeOut();
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('header').height()) {
      if (showFlag === false) {
        showFlag = true;
        $pageTop.stop().fadeIn();
      }
    } else {
      if (showFlag) {
        showFlag = false;
        $pageTop.stop().fadeOut();
      }
    }
  });

  $pageTop.click(function () {
    $('body,html').animate({
      scrollTop: 0,
    }, 1500);
    return false;
  });

});
