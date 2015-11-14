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
    var
      owl = $('#owl-banner'),
      time = 7, // time in seconds

      $progressBar,
      $bar,
      $elem,
      isPause,
      tick,
      percentTime;

    //Init the carousel
    owl.owlCarousel({
      autoPlay : false,
      pagination : false,
      singleItem : true,
      transitionStyle : 'fade',
      afterInit : progressBar,
      afterMove : moved,
      startDragging : pauseOnDragging
    });

    //Init progressBar where elem is $('#owl-banner')
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }

    //create div#progressBar and div#bar then prepend to $('#owl-banner')
    function buildProgressBar(){
      $progressBar = $('<div>',{
        id:'progressBar'
      });
      $bar = $('<div>',{
        id:'bar'
      });
      $progressBar.append($bar).prependTo($elem);
    }

    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    }

    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+'%'
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item
          $elem.trigger('owl.next')
        }
      }
    }

    //pause while dragging
    function pauseOnDragging(){
      isPause = true;
    }

    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }

  });

})(jQuery);
