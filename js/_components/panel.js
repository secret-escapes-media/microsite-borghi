var panel          = $('.js-panel'),
    panelLaunchBtn = $('.js-open-panel'),
    panelCloseBtn  = $('.js-close-panel'),
    panelOpenClass = 'is-open';

// opens panel
function panelOpen(event){
  //
  // can pass either an event or the id of the offer


  var activePanelId;

  if (event.target) {
    event.preventDefault();
    // find the modal id & element
    activePanelId = $(event.currentTarget).data('open-panel');
    activePanel   = $('*[data-panel-id="' + activePanelId + '"]');
  } else {
    activePanelId = event;
  }

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
  // find target section and microsite nav height
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