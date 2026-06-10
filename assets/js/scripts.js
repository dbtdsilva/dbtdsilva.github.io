
jQuery(function($) {
    'use strict';

    /* ---------------------------------------------- /*
     * Preloader (ready/onload)
    /* ---------------------------------------------- */

    function hidePreloader() {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(300).fadeOut('slow');
    }

    // jQuery 3 fires ready callbacks asynchronously, so window "load" may have
    // already happened by the time this code runs (e.g. fully cached page).
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        $(window).on('load', hidePreloader);
    }

    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function() {
        $('a[href*="#"]').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function() {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function() {
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function() {
        $('.header').sticky({
            topSpacing: 0,
            zIndex: 998 // keep in sync with .header in style.css; sticky.js >=1.0.4 overrides it inline otherwise
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());


    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up-page').fadeIn();
            } else {
                $('.scroll-up-page').fadeOut();
            }
        });
    }());

    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function() {

        new WOW({
            mobile: false
        }).init();

    }());



    // -------------------------------------------------------------
    // Contact Form
    // -------------------------------------------------------------

    $('#contactForm').on('submit', function(e) {

        e.preventDefault();

        var $action = $(this).prop('action');
        var $data = $(this).serialize();
        var $this = $(this);

        $this.prevAll('.alert').remove();

        $.post($action, $data, function(data) {

            if (data.response == 'error') {

                $this.before('<div class="alert alert-danger">' + data.message + '</div>');
            }

            if (data.response == 'success') {

                $this.before('<div class="alert alert-success">' + data.message + '</div>');
                $this.find('input, textarea').val('');
            }

        }, "json");

    });

});
