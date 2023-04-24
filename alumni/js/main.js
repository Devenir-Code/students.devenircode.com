// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});


$(document).ready(function() {
    $('#haley_img').hover(function() {
        console.log("testing");
        $(this).attr('src', '/alumni/student/haley/images/haley_hiking.jpg');
      }, function() {
        $(this).attr('src', '/alumni/student/haley/images/haley_face.JPG');
      });
});

$(document).ready(function(){
    // $("button").click(function(){
    //   $("#top_gray_box").fadeIn();
      $("#top_gray_box").hide().fadeIn("3500");
    //   $("#top_gray_box").fadeIn(3000);
    // });
  });