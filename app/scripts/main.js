console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

;(function($) {
  'use strict'

  $(document).ready(function() {

    // Pageloader controller
    setTimeout(function() {
      $('#pageloader').fadeOut('slow', function() {
        $(this).addClass('.hidden');
      });
    }, 5000);

  });

})(jQuery);
