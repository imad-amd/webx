/** ==========================================================================================

  Project :   WebX
  Version :   1.2
  Author :    Decimalz

========================================================================================== */


(function($) {

   'use strict'


/*------------------------------------------------------------------------------*/
/* Preloader
/*------------------------------------------------------------------------------*/
// makes sure the whole site is loaded
 $(window).on("load",function() {
        // will first fade out the loading animation
     $("#preloader").fadeOut();
        // will fade out the whole DIV that covers the website.
     $("#status").fadeOut(9000);
})


/*------------------------------------------------------------------------------*/
/* TopSearch
/*------------------------------------------------------------------------------*/

    
    jQuery( ".ttm-header-search-link a" ).addClass('sclose');   
    
    jQuery( ".ttm-header-search-link a" ).on('click', function(event ) {  
  
        jQuery(".field.searchform-s").focus();  
        
        if (jQuery('.ttm-header-search-link a').hasClass('sclose')) {   
            jQuery( ".ttm-header-search-link a i" ).removeClass('ti-search').addClass('ti-close');
            jQuery(this).removeClass('sclose').addClass('open');    
            jQuery(".ttm-search-overlay").addClass('st-show');                  
        } else {
            jQuery(this).removeClass('open').addClass('sclose');
            jQuery( ".ttm-header-search-link a i" ).removeClass('ti-close').addClass('ti-search');  
            jQuery(".ttm-search-overlay").removeClass('st-show');   
        }   
        event.preventDefault(); 
    });


/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/


$(window).scroll(function(){
    if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
    {
        if ($(window).scrollTop() >= 50 ) {
            $('.ttm-stickable-header').addClass('fixed-header');
            $('.ttm-stickable-header').addClass('visible-title');
        }
        else {

            $('.ttm-stickable-header').removeClass('fixed-header');
            $('ttm-stickable-header').removeClass('visible-title');
            }
    }
});


/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/

    $('ul li:has(ul)').addClass('has-submenu');
    $('ul li ul').addClass('sub-menu');


    $("ul.dropdown li").on({

        mouseover: function(){
           $(this).addClass("hover");
        },  
        mouseout: function(){
           $(this).removeClass("hover");
        }, 

    });
    
    var $menu = $('#menu'), $menulink = $('#menu-toggle-form'), $menuTrigger = $('.has-submenu > a');
    $menulink.on('click',function (e) {

        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        $('body').toggleClass('overlay');
    });

    $menuTrigger.on('click',function (e) {
        e.preventDefault();
        var t = $(this);
        t.toggleClass('active').next('ul').toggleClass('active');  
        $(this).closest('.ttm-menu-toggle').addClass('fixed');      
    });

    $('ul li:has(ul)');




/*------------------------------------------------------------------------------*/
/* Slider Counter
/*------------------------------------------------------------------------------*/



            var totalItems = $('.item').length;
var currentIndex = $('.item.active').index() + 1;
$('.num').html("<span class='curent'>0" +currentIndex+ "</span>" + " " + "/" + " "+ "0"+totalItems+"");
$('.carousel').on('slid.bs.carousel', function() {
    currentIndex = $('.item.active').index() + 1;
   $('.num').html("<span class='curent'>0" +currentIndex+ "</span>" + " "+ "/" + " "+ "0"+totalItems+"");
});





/*------------------------------------------------------------------------------*/
/* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/
    
    $("[data-appear-animation]").each(function() {
        var self      = $(this);
        var animation = self.data("appear-animation");
        var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
        
        if( $(window).width() > 959 ) {
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
            if( animation == 'animateWidth' ) {
                self.css('width', self.data("width"));
            }
        }
    });


/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/

 $('.ttm-progress-bar').each(function() {
    $(this).find('.progress-bar').width(0);
    });

    $('.ttm-progress-bar').each(function() {

        $(this).find('.progress-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });

    // Part of the code responsible for loading percentages:

    $('.progress-bar-percent[data-percentage]').each(function () {

        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));

            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                // What todo on every count
                    var pct = '';
                    if(percentage == 0){
                        pct = Math.floor(this.countNum) + '%';
                    }else{
                        pct = Math.floor(this.countNum+1) + '%';
                    }
                    progress.text(pct);
                }
            });
    });


/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 

$('.ttm-tabs').each(function() {
    $(this).children('.content-tab').children().hide();
    $(this).children('.content-tab').children().first().show();
    $(this).find('.tabs').children('li').on('click', function(e) {  
        var liActive = $(this).index(),
            contentActive = $(this).siblings().removeClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn('slow');
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
        e.preventDefault();
    });
});




/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/

// ===== Scroll to Top ==== 
jQuery('#totop').hide();
jQuery(window).scroll(function() {
    "use strict";
    if (jQuery(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        jQuery('#totop').fadeIn(200);    // Fade in the arrow
        jQuery('#totop').addClass('top-visible');
    } else {
        jQuery('#totop').fadeOut(200);   // Else fade out the arrow
        jQuery('#totop').removeClass('top-visible');
    }
});
jQuery('#totop').on('click', function() {      // When arrow is clicked
    jQuery('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
    return false;
});


    

/*------------------------------------------------------------------------------*/
/* owlCarousel
/*------------------------------------------------------------------------------*/



// ===== Showcase-slide ==== 

$(".showcase-slide").owlCarousel({ 
    margin: 0,
    loop:true,
    nav: $('.showcase-slide').data('nav'),
    dots: $('.showcase-slide').data('dots'),                     
    autoplay: $('.showcase-slide').data('auto'),
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:$('.showcase-slide').data('item')
        }
    }    
});


$(".lets-talk-slider").owlCarousel({ 
    margin: 0,
    loop:true,
    nav: false,
    dots: true,                     
    autoplay: true,
   // animateOut: 'animate__slideInDown',
    //animateIn: 'animate__fadeOutDown',
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }    
});





/*------------------------------------------------------------------------------*/
/* Isotope
/*------------------------------------------------------------------------------*/


function enableIsotope() {
  var initial_items = 9;
  var next_items = 3;
  var $grid = $('#grid').isotope({
      itemSelector: '.element-item',
      percentPosition: true,
      layoutMode: 'fitRows',
      stamp: '.element-item--static'
  });
  
  
  // bind filter button click
  $('.button-group-home').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      $grid.isotope({filter: filterValue});
      updateFilterCounts();
  });
  // bind select option value
 $('#filters').on( 'change', function() {
    var filterValue = $( this ).val();
    // use filterFn if matches value
    $grid.isotope({filter: filterValue});
    updateFilterCounts();
     });
  function updateFilterCounts() {
      // get filtered item elements
      var itemElems = $grid.isotope('getFilteredItemElements');
      var count_items = $(itemElems).length;
     
      if (count_items > initial_items) {
          $('#showMore').show();
      }
      else {
          $('#showMore').hide();
      }
      if ($('.element-item').hasClass('visible_item')) {
          $('.element-item').removeClass('visible_item');
      }
      var index = 0;
  
      $(itemElems).each(function () {
          if (index >= initial_items) {
              $(this).addClass('visible_item');
          }
          index++;
      });
      $grid.isotope('layout');
  }
  // change is-checked class on buttons
  $('.button-group-home').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
      });
  });
  
  function showNextItems(pagination) {
      var itemsMax = $('.visible_item').length;
      var itemsCount = 0;
      $('.visible_item').each(function () {
          if (itemsCount < pagination) { $(this).removeClass('visible_item'); itemsCount++; } }); if (itemsCount >= itemsMax) {
          $('#showMore').hide();
      }
      $grid.isotope('layout');
  }
  // function that hides items when page is loaded
  function hideItems(pagination) {
      var itemsMax = $('.element-item').length;
      var itemsCount = 0;
      $('.element-item').each(function () {
          if (itemsCount >= pagination) {
              $(this).addClass('visible_item');
          }
          itemsCount++;
      });
      if (itemsCount < itemsMax || initial_items >= itemsMax) {
          $('#showMore').hide();
      }
      $grid.isotope('layout');
  }
  $('#showMore').on('click', function (e) {
      e.preventDefault();
      showNextItems(next_items);
  });
  hideItems(initial_items);

  $("#showMore").click(function() {
    $(".fa.load-spiner").addClass('active');
    setTimeout(function() {
      $(".fa.load-spiner").removeClass('active');
    }, 500);
  });


};
enableIsotope();


 



/*------------------------------------------------------------------------------*/
/* Tabs 
/*------------------------------------------------------------------------------*/
$( "#tabs" ).tabs();

$("#tabs li").click( function(){                //Move screnn up on tab click
    //var tabs_offset = $("#tabs").offset();
    //scrollTo(tabs_offset.left, tabs_offset.top);
                $('html, body').animate({
                    scrollTop: ($("#tabs").offset().top - 10)
                }, 300);
});

// Tabs Sticky Nav
$(function(){
    var stickyHeaderTop = $('#stickytypeheader').offset().top;

    $(window).scroll(function(){
            if( $(window).scrollTop() > stickyHeaderTop ) {
                    $('#stickytypeheader').addClass('sticky-nav animate__animated animate__fadeInDown');
            } else {
                $('#stickytypeheader').removeClass('sticky-nav animate__animated animate__fadeInDown');
            }
    });
});


// $('.accordion .collapse').on('shown.bs.collapse', function(e) {
//     var $card = $(this).closest('.card');
//     $('html,body').animate({
//       scrollTop: $card.offset().top - 140
//     }, 500);
//   });



  $(window).on('load',function(){
    
    if($(window).width() < 768){
        $('.accordion .collapse').on('shown.bs.collapse', function(e) {
            var $card = $(this).closest('.card');
            $('html,body').animate({
              scrollTop: $card.offset().top - 60
            }, 500);
          });
    }else{
        $('.accordion .collapse').on('shown.bs.collapse', function(e) {
            var $card = $(this).closest('.card');
            $('html,body').animate({
              scrollTop: $card.offset().top - 140
            }, 500);
          });
    }
  
  })



/*------------------------------------------------------------------------------*/
/* Price List Filter
/*------------------------------------------------------------------------------*/

//   $("input[name='price']").click(function() {
//     if ($("#monthly").is(":checked")) {
//       $("#basic-monthly, #busines-monthly, #ulti-monthly").show();
//       $("#basic-6months, #basic-annual, #busines-6months, #busines-annual, #ulti-6months, #ulti-annual").hide();
//     } else if ($("#6months").is(":checked")) {
//         $("#basic-6months, #busines-6months, #ulti-6months").show();
//         $("#basic-monthly, #basic-annual, #busines-annual, #ulti-annual, #busines-monthly, #ulti-monthly").hide();
//     }
//     else if ($("#annual").is(":checked")) {
//         $("#basic-annual, #busines-annual, #ulti-annual").show();
//         $("#basic-6months, #busines-6months, #ulti-6months, #basic-monthly, #busines-monthly, #ulti-monthly").hide();
//     }
//   });





})(jQuery);




