
jQuery(function($) {
    'use strict';

    /* ---------------------------------------------- /*
     * Preloader (ready/onload)
    /* ---------------------------------------------- */

    $(window).load(function() {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(300).fadeOut('slow');
    });

    $(".modal-link").click(function() {
        var modals = $(".modal-custom");
        for (var i = 0; i < modals.length; i++) {
            if (this.href.indexOf(modals[i].id) != -1) {
                console.log(modals[i].id);
                console.log($("#" + modals[i].id).find('img'));
                $("#" + modals[i].id).find('img').trigger("modal-activation");
            }
        }
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
                $('.scroll-up-page').fadeIn();
            } else {
                $('.scroll-up-page').fadeOut();
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

    function getScrollBarWidth () {
        var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
            widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
        $outer.remove();
        return 100 - widthWithScroll;
    };


    // Inline popups
    $('#grid').magnificPopup({
        delegate: 'a.modal-link',
        removalDelay: 250, //delay removal by X to allow out-animation
        callbacks: {
            open: function() {
                $('.scroll-up-page').css('padding-right', getScrollBarWidth() + "px");
                $('header').css('padding-right', getScrollBarWidth() + "px");
            },
            close: function() {
                $('.scroll-up-page').css('padding-right', 0);
                $('header').css('padding-right', 0);
            },
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
});
