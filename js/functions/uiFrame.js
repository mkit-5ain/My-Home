
// 컨텐츠 페이드인
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
// 상단 메뉴 노출
function menuAction () {
  $('.menu-btn, .menu-dim').click(function (){
    $('.menu-view, .menu-btn, body').toggleClass('active');
  });
}


// function viewAction () {
//   window.onload = function() {
//     $('main').addClass('view');
//   }
// }
