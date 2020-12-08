
var video = document.getElementById("myVideo");


var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}




function fnMove(seq){
  var offset = $("#div" + seq).offset();
  $('html, body').animate({scrollTop : offset.top}, 400);
}


(function ($) {
    "use strict";
  
    //Page cursors
  
    document
      .getElementsByTagName("body")[0]
      .addEventListener("mousemove", function (n) {
        (t.style.left = n.clientX + "px"),
          (t.style.top = n.clientY + "px"),
          (e.style.left = n.clientX + "px"),
          (e.style.top = n.clientY + "px"),
          (i.style.left = n.clientX + "px"),
          (i.style.top = n.clientY + "px");
      });

    var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");
    function n(t) {
      e.classList.add("hover"), i.classList.add("hover");
    }
    function s(t) {
      e.classList.remove("hover"), i.classList.remove("hover");
    }
    s();
    for (
      var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
      a >= 0;
      a--
    ) {
      o(r[a]);
    }
    function o(t) {
      t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
    }
  
    //About page
  
    $(".about-text").on("click", function () {
      $("body").addClass("about-on");
    });
    $(".about-close").on("click", function () {
      $("body").removeClass("about-on");
    });
  
    //Contact page
  
    $(".contact-text").on("click", function () {
      $("body").addClass("contact-on");
    });
    $(".contact-close").on("click", function () {
      $("body").removeClass("contact-on");
    });
  
    //Design portfolio page
  
    $(".Design").on
    ("click", function () {
      $("body").addClass("Design-on");
    });
    $(".Design-close").on("click", function () {
      $("body").removeClass("Design-on");
    });
  
    //Photograph portfolio page
  
    $(".Photograph").on("click", function () {
      $("body").addClass("Photograph-on");
    });
    $(".Photograph-close").on("click", function () {
      $("body").removeClass("Photograph-on");
    });
  
    //Film portfolio page
  
    $(".Film").on("click", function () {
      $("body").addClass("Film-on");
    });
    $(".Film-close").on("click", function () {
      $("body").removeClass("Film-on");
    });
  })(jQuery);
  
  