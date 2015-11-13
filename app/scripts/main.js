console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

;(function($) {
  'use strict'

  $(document).ready(function() {

    // Pageloader controller
    setTimeout(function() {
      $('#dc-spinner').attr('class', 'svgloader _fade-out');
      setTimeout(function() {
        $('#pageloader')
          .addClass('_fade-out')
          .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            $(this).addClass('hidden');
          });
      }, 500);
    }, 5000);

  });

})(jQuery);
