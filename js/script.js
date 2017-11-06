// Project specific JS goes here


// ======================================
//    Waypoints
//    nav highlight on sticky header
// ======================================

$('.region').waypoint(function(direction) {
   if (direction === 'up') {
    // highlight previous region
    var previousRegionId = $('#' + this.element.id).prev().attr('id');
     $('.site-nav__item.is-active').removeClass('is-active');
     $('.site-nav__item--' + previousRegionId).addClass('is-active');
   } else if (direction === 'down') {
     // highlight current section
     var currentRegionId = this.element.id;
     $('.site-nav__item.is-active').removeClass('is-active');
     $('.site-nav__item--' + currentRegionId).addClass('is-active');
   }
 });