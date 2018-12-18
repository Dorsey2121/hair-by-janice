var services= $("#services");

if(services.length){


$(document).ready(function(){
  $(".smooth-scroll a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
}

$('.nav-label').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('nav-label-open');
  $('nav').toggleClass('nav-open');
});

$('nav a').on('click', function () {
  $(".nav-label").removeClass('nav-label-open');
  $('nav').removeClass('nav-open');
});

$(".skip-scroll").on('click', function() {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 500);
});

$(".client-logos a").focus(function () {
  $(this).siblings().addClass('hover-fade');
});

$(".client-logos a").focusout(function () {
  $('.client-logos a').removeClass('hover-fade');
});

$(".photo-site").focus(function () {
  $(this).parent().addClass('hovered');
});

$(".photo-site").focusout(function () {
  $(this).parent().removeClass('hovered');
});


$(function() {

    // slider type
    $t = "slide"; // opitions are fade and slide

  	//variables
    $f = 1000,  // fade in/out speed
    $s = 1000,  // slide transition speed (for sliding carousel)
    $d = 10000;  // duration per slide

    $n = $('.slide').length; //number of slides
    $w = $('.slide').width(); // slide width
  	$c = $('.container').width(); // container width
   	$ss = $n * $w; // slideshow width


      function timer() {
        $('.timer').animate({"width":$w}, $d);
        $('.timer').animate({"width":0}, 0);
    }


  // fading function
    function fadeInOut() {
      timer();
        $i = 0;
        var setCSS = {
            'position' : 'absolute',
            'top' : '0',
            'left' : '0'
        }

        $('.slide').css(setCSS);

        //show first item
        $('.slide').eq($i).show();


        setInterval(function() {
          timer();
            $('.slide').eq($i).fadeOut($f);
            if ($i == $n - 1) {
                $i = 0;
            } else {
                $i++;
            }
            $('.slide').eq($i).fadeIn($f, function() {
                $('.timer').css({'width' : '0'});
            });

        }, $d);

    }

    function slide() {
      timer();
        var setSlideCSS = {
            'float' : 'left',
            'display' : 'inline-block',
          	'width' : $c
        }
        var setSlideShowCSS = {
            'width' : $ss // set width of slideshow container
        }
        $('.slide').css(setSlideCSS);
        $('.slideshow').css(setSlideShowCSS);


        setInterval(function() {
            timer();
            $('.slideshow').animate({"left": -$w}, $s, function(){
                // to create infinite loop
                $('.slideshow').css('left',0).append( $('.slide:first'));
            });
        }, $d);

    }

    if ($t == "fade") {
        fadeInOut();

    } if ($t == "slide") {
        slide();

    } else {

    }
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(function () {
  slideIndex++;
  showSlides(slideIndex);
}, 10000);
