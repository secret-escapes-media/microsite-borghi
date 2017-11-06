///////////////////////////////////////
//      smooth-scrolling - http://css-tricks.com/snippets/jquery/smooth-scrolling/
///////////////////////////////////////
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

///////////////////////////////////////
//      inserts current year
///////////////////////////////////////
$('.js-year').html(new Date().getFullYear());

///////////////////////////////////////
//      detects touch device
///////////////////////////////////////
if ("ontouchstart" in document.documentElement){
  $('html').addClass('touch');
}

///////////////////////////////////////
//      SVG image swap
///////////////////////////////////////

  // finds image with class and swaps .png with .svg in img source string
  if (Modernizr.svgasimg) {
    var svgSwap = $('img.js-svg-swap');
    svgSwap.each( function() {
      var currentSrc = $(this).attr('src'),
          newSrc = currentSrc.replace('.png', '.svg');
      $(this).attr('src', newSrc);
    });
  }

///////////////////////////////////////
//        Navigation
///////////////////////////////////////

  // mobile nav toggle open & close
  $('.js-toggle-mobile-nav').on('click', function(e) {
    $('.mobile-nav').toggleClass('is-open').toggleClass('is-closed');
  });

  // // current page nav highlight
  // var currentPage = $('body').data('current-page');
  //
  // // add class to individual nav item
  // $('.page--' + currentPage + ' [class*=nav__item--' + currentPage + ']').addClass('is-current');

  // var currentCategory = $('body').data('current-category');
  // // if there is a category, add class to category nav item
  // if (currentCategory !== ''){
  //   $('.category--' + currentCategory + ' [class*=nav__item--' + currentCategory + ']').addClass('is-current');
  // }



////////////////////////////////////////////////////////////////////////////////
//      Sticky microsite nav
////////////////////////////////////////////////////////////////////////////////

function stickNav(){
  var st        = $(document).scrollTop();
  var nav       = $('.site-nav');
  var navHeight = nav.outerHeight();
  var distance  = $('.site-title').outerHeight() - navHeight;

  if( st > distance ){
    nav.addClass('is-stuck');
  }else{
    nav.removeClass('is-stuck');
  }
}
$(document).ready(function() { stickNav(); });
$(document).scroll(function() { stickNav(); });



////////////////////////////////////////////////////////////////////////////////
//  searches for specific queryString
////////////////////////////////////////////////////////////////////////////////

function getQueryStringByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
     results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}