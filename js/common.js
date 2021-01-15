$(document).ready(function () {
  menuAction();
  layoutTab();
  contentsFade();
  themeAction();
  // scrollContents();
  fadeInUp();
});

function menuAction () {
  $('.menu-btn, .menu-dim').click(function (){
    $('.menu-view, .menu-btn, body').toggleClass('active');
  });
}

function themeAction () {
  $('.menu-theme').click(function (){
    $('body, .theme-list').toggleClass('theme-dark');
  });
}
function layoutTab () {
  $(".category ul li").click(function(){
      var activeTab = $(this).attr('data-tab');
      $(".category ul li").removeClass('active');
      $(".category-contents").removeClass('active');
      $(this).addClass('active');
      $("#" + activeTab).addClass('active');
  });
}

function contentsFade () {
  $(window).scroll(function () {
    $('.fade-contents').each( function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if ( bottom_of_window > bottom_of_object ){
            $(this).addClass('active');
        }
    });
  });
}

// function scrollContents () {
//     $(window).scroll (function () {
//         var Value = ($(window).scrollTop() / 25 );
//         $('.border-circle-wrap').css(
//           { 'transform' : 'translateY(' + Value + 'px)' }
//         );
//     });
// }

function fadeInUp () {
  $(window).scroll(function () {
    $('.fadeinup').each( function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if ( bottom_of_window > bottom_of_object ){
            $(this).addClass('fadeinup-active');
        }
    });
  });
}
setTimeout(function () {
  $('.background-circle-wrap').addClass('move');
  $('.work-list').addClass('move');
  $('.category-list').addClass('active');
}, 500);
