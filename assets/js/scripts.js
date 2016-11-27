/*
Theme Name: IAMX
Author: Trendy Theme
Author URL: trendytheme.net

Slighty modified..
*/


jQuery(function($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).ready(function() {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(200).fadeOut('slow');
    });

    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function() {
        $('a[href*=#]').bind("click", function(e) {
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
            topSpacing: 0
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
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());

    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    (function() {

        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item'
        });

        $('#filter a').click(function(e) {
            e.preventDefault();
            $('#filter a').removeClass('active');
            $(this).addClass('active');
            var groupName = $(this).attr('data-group');
            $grid.shuffle('shuffle', groupName);
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

    // Inline popups
    $('#grid').magnificPopup({
        delegate: 'a.modal-link',
        removalDelay: 250, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
});
