$(function(){
  var windowWidth = $(window).width();
  var windowSm = 767;
  if (windowWidth <= windowSm) {
    var headerHight = 90; // スマホのヘッダー等の高さ分の数値を入れる
   } else {
    var headerHight = 90; // PC のヘッダー等の高さ分の数値を入れる
  }
  $('a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    var pageTop = $('.l-footer__content__topgo__btn');
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {
        pageTop.not(':animated').fadeIn();
      } else {
        pageTop.not(':animated').fadeOut();
      }
    });
  }
  if (window.matchMedia('(min-width: 768px)').matches) {
    var pageTop = $('.l-footer__content__topgo__btn');
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        pageTop.not(':animated').fadeIn();
      } else {
        pageTop.not(':animated').fadeOut();
      }
    });
  }
});

$(window).scroll(function() {         //<--scroll conetnt appear
  if ($(this).scrollTop() > 650) {
      $('.introduction__animaite').addClass('active');
  } else {
      $('.introduction__animaite').removeClass('active');
  }

  if ($(this).scrollTop() > 1800) {
      $('.tech__animate__left').addClass('active');
  } else {
      $('.tech__animate__left').removeClass('active');
  }
  if ($(this).scrollTop() > 1900) {
    $('.p-main__tech__title__skills__content__box__layout__items__bar').addClass('active');
  } else {
      $('.p-main__tech__title__skills__content__box__layout__items__bar').removeClass('active');
  }

  if ($(this).scrollTop() > 2900) {
      $('#portfolio').addClass('active');
  } else {
      $('#portfolio').removeClass('active');
  }
  if ($(this).scrollTop() > 3100) {
    $('.portfolio__animate__hidden').addClass('active');
} else {
    $('.portfolio__animate__hidden').removeClass('active');
}

if ($(this).scrollTop() > 3670) {
  $('.greeting__animate').addClass('active');
} else {
  $('.greeting__animate').removeClass('active');
}
});

$(document).ready(function() {
  // 모달 열기 버튼 클릭 이벤트 처리
  $('.open-modal').click(function() {
    $('.modal').addClass('active');
    $('.modal').fadeIn(500);
  });

  // 모달 닫기 버튼 클릭 이벤트 처리
  $('.close-modal').click(function() {
    $('.modal').fadeOut(500);
  });
  
  $('.l-header__content__name__modal').click(function() {
    $('.modal').fadeOut(500);
  });
});