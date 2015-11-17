console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

;(function($) {
  'use strict'
  var
    $body = $('#shop-theme'),
    $document = $(document),
    $window = $(window),
    $wrapper = $('.wrapper');


  // $window.load(function() {
  //   // Simulate fake loader page
  //   var
  //     pageloader = $('#pageloader'),
  //     svgElem = $('dc-spinner');

  //   setTimeout(function() {
  //     svgElem.attr('class', 'svgloader _fade-out');  // SVG don't have addClass().

  //     setTimeout(function() {
  //       pageloader
  //         .addClass('_fade-out')
  //         .bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
  //           // hiding block when css animation finished.
  //           $(this).addClass('hidden');
  //           // Set overflow-y auto;
  //           // body.addClass('_loaded');
  //         });
  //     }, 500);

  //   }, 5000);
  // });

  $document.ready(function() {

    // Smooth scroll on mouse


    // Landing page
    // $('#landing-page').on('click', '.icon-button', function(event) {
    //   event.preventDefault();
    //   /* Act on the event */
    //   $wrapper
    //     .addClass('_slideup')
    //     .bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(event) {
    //       /* Act on the event */
    //       $body.addClass('_loaded');
    //     });;
    // });


    // Search toggle
    // Need to refactory this search component
    // ==========================================================
    var
      $searchForm = $('.search-toggle');

    $searchForm.on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
      $(this)
        .find('.form').removeClass('-hide').addClass('-show')
        .find('.input').addClass('actived');
    });

    $searchForm.on('click', '.close-btn', function(event) {
      event.preventDefault();
      /* Act on the event */
      $searchForm
        .find('.form').removeClass('-show').addClass('-hide')
        .find('.input').removeClass('actived');

      event.stopPropagation();
    });

    // User tabs
    $('#userTabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    })


    // Mobile menu
    //==========================================================
    $('.dropdown-lists').on('click', '.header',function(event) {
      event.preventDefault();
      /* Act on the event */
      $(this).next().toggleClass('actived');
      event.stopPropagation();
    });


    // Owl banner slider controller
    //==========================================================
    var
      owl = $('#owl-banner'),
      time = 15, // time in seconds
      badgeBanner = $('.badge-banner'),

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
      var curBanner = this.owl.currentItem;

      // Add anim to badge elem
      addAnim(curBanner);
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }

    // Add animation to badge
    function addAnim(curBanner) {
      var
        $title = $(badgeBanner[curBanner]).find('.title'),
        $meta = $(badgeBanner[curBanner]).find('.meta');

      // Add anim to title banner
      $title
        .addClass('animated bounceIn')
        .bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('animated bounceIn');
        });

      // Add anim to meta banner
      $meta
        .addClass('animated fadeIn')
        .bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('animated fadeIn');
        });
    }


    // Product wol slider
    //=========================================================
    $('#owl-product-1').owlCarousel({
      items : 3,
      pagination : false
    });

    $('#owl-product-2').owlCarousel({
      items : 4,
      pagination : false
    });
  });

})(jQuery);
