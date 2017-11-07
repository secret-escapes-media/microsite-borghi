var panel          = $('.js-panel'),
    panelLaunchBtn = $('.js-open-panel'),
    panelCloseBtn  = $('.js-close-panel'),
    panelOpenClass = 'is-open';

// opens panel
function panelOpen(event){
  var activePanelId;

  // checks if there is an event passed or a string for the offer id
  // panel can be triggered by a query string on page load
  if (event.target) {
    event.preventDefault();
    // finds the panel id from the event element
    activePanelId = $(event.currentTarget).data('open-panel');
  } else {
    // takes the panel id that is passed into the function
    activePanelId = event;
  }

  // find the specific content for the panel id
  var activePanel = $('*[data-panel-id="' + activePanelId + '"]');

  // disable scrolling on background content (doesn't work iOS)
  $('body').addClass('disable-scroll');

  // reveal the specific modal content
  activePanel.addClass(panelOpenClass);

  // open modal
  panel.addClass(panelOpenClass);
}

// closes panel
function panelClose(event){
  event.preventDefault();
  // enable scrolling
  $('body').removeClass('disable-scroll');
  // close panel
  $('.offer.is-open').removeClass(panelOpenClass);
  $('.panel.is-open').removeClass(panelOpenClass);
}

// launches panel when offer is clicked
panelLaunchBtn.on('click', function(event) {
  panelOpen(event);
});

// launches panel if query string
var currentOffer = getQueryStringByName('offer-id');
if (currentOffer) {
  panelOpen(currentOffer);

  // scrolls the page down to the offer section of each region
  // finds the section and adjusts scroll position so sticky header doesn't overlap
  var target = $(':target');
  var navHeight = $('.site-nav').height();
  var targetNo = target.offset().top - navHeight;

  // changes scroll position
  $('html,body').scrollTop(targetNo);

}

// closes panel on close icon click
panelCloseBtn.on('click', function(event) {
  panelClose(event);
});

// closes panel on escape key press
$(document).keyup(function(event) {
   if (event.keyCode == 27) {
     panelClose(event);
    }
});