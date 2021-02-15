$(document).ready(function () {
  layout();
  // layoutTab();
  contentsFade();
  // scrollContents();
  fadeInUp();
  // $('body').show();
});
function layout () {
  $(document).ready(function () {
    $.ajax({
      type: 'get' ,
      url: 'layout/header.html' ,
      dataType : 'html' ,
      success: function(data) {
        $("#header").html(data);
      }
    });
  });

  $(document).ready(function () {
    $.ajax({
      type: 'get' ,
      url: 'layout/exp-btn.html' ,
      dataType : 'html' ,
      success: function(data) {
        $("#experience-btn").html(data);
      }
    });
  });

  $(document).ready(function () {
    $.ajax({
      type: 'get' ,
      url: 'layout/index.html' ,
      dataType : 'html' ,
      success: function(data) {
        $("#index").html(data);
      }
    });
  });
}

// function layoutTab () {
//   $(".category ul li").click(function(){
//       var activeTab = $(this).attr('data-tab');
//       $(".category ul li").removeClass('active');
//       $(".category-contents").removeClass('active');
//       $(this).addClass('active');
//       $("#" + activeTab).addClass('active');
//   });
// }

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

document.documentElement.addEventListener('touchstart', function (event) {
 if (event.touches.length > 1) {
      event.preventDefault();
    }
}, false);

var lastTouchEnd = 0;

document.documentElement.addEventListener('touchend', function (event) {
 var now = (new Date()).getTime();
 if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    } lastTouchEnd = now;
}, false);
