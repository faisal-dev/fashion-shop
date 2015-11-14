console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

;(function($) {
  'use strict'

  $(window).load(function() {
    // Simulate fake loader page
    var
      pageloader = $('#pageloader'),
      svgElem = $('dc-spinner'),
      body = $('#shop-theme');

    setTimeout(function() {
      svgElem.attr('class', 'svgloader _fade-out');  // SVG don't have addClass().

      setTimeout(function() {
        pageloader
          .addClass('_fade-out')
          .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            // hiding block when css animation finished.
            $(this).addClass('hidden');
            // Set overflow-y auto;
            body.addClass('_loaded');
          });
      }, 500);

    }, 5000);
  });

  $(document).ready(function() {

    // Owl banner slider controller
    var owl = $("#owl-banner");

    owl.owlCarousel({
      navigation : true,
      singleItem : true,
      transitionStyle : "fade"
    });

  });

})(jQuery);
