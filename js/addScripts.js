$(document).ready(function () {
    "use strict";

    $(".hamx").click(function () {
        $(this).toggleClass("is-active");
        $('#menu-layer').fadeToggle(250);
        $('#menu').slideToggle(500);
    });

    /* Cookie notice */
    /*$.getScript("js/cookie-notice.min.js", function() {

        var myCookies = cookieNotice({
        "allowUsage": {
            "preset": "flat",
            "container": {
                "fontFamily": "sans-serif",
                "fontSize": "14px",
                "bg": "rgba(0, 0, 0, 0.85)",
                "padding": "36px"
            },
            "text": {
                "color": "rgba(255, 255, 255, 1)",
                "text": "Deze website maakt gebruik van cookies."
            },
            "button": {
                "bg": "rgba(174, 14, 22, 1)",
                "bgHover": "rgba(174, 14, 22, 1)",
                "borderRadius": "4px",
                "text": "Accepteren"
            }
        }
    });
    myCookies.askUsage();

    });*/


/*    $("[data-fancybox]").fancybox({
        gutter: 100,  //afstand tussen slides
        transitionEffect: "slide",  //fade, slide, circular, tube, zoom-in-out, rotate
        transitionDuration: 750,

        arrows: true,  //pijltjes navigatie
        idleTime: false,  //pijljtes en opties altijd zichtbaar
        infobar: true,  //nummering links bovenaan
        toolbar: true,  //aanzetten om onderstaande opties te activeren
        smallBtn: false,  //kleine close btn toevoegen aan afbeelding
        buttons: [  //extra btns toevoegen in rechter bovenhoek
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            //"thumbs",
            "close"
        ],

        thumbs: {
            autoStart: false,
            axis: 'y'
        },


    });*/

/*        $("#mob-btn").click(function() {
            $("#menu-layer").fadeToggle(250);
            $("#menu").slideToggle(500)
        });*/
        function d(h, f, g) {
            var e = new Image();
            e.onload = f;
            e.onerror = g;
            e.src = h
        }
        /*d("images/popup.jpg", function() {
            $("#popup").fancybox().trigger("click")
        }, function() {});*/

        $(".thickbox").fancybox({
            caption: {
                type: "outside"
            },
            helpers: {
                thumbs: true
            },
            openEffect: "elastic",
            closeEffect: "elastic",
            nextEffect: "elastic",
            prevEffect: "elastic",
            theme: "default"
        });
        /*$("#showRoute").fancybox({
            openEffect: "fade",
            closeEffect: "fade",
            theme: "default"
        });*/
        var c = "";
        var a = "";
        $(".rollover").hover(function() {
            c = $(this).attr("src");
            a = $(this).attr("rel");
            $(this).attr("src", a);
            $(this).attr("rel", c)
        }, function() {
            $(this).attr("src", c);
            $(this).attr("rel", a)
        });
        var b = new Array();
        $(".rollover").each(function() {
            var e = document.createElement("img");
            e.src = $(this).attr("rel");
            b.push(e)
        });
        $("#accordion section h1").click(function(f) {
            $(this).parents().siblings("section").addClass("ac_hidden");
            $(this).parents("section").removeClass("ac_hidden");
            f.preventDefault()
        })


    /* ACCORDION */
    $(".accordion").on("click", ".accordion-header", function () {
        $(this).toggleClass("active").next().slideToggle(500);
    });

    if (window.location.href.indexOf("eerste") > -1) {
        //$("html, body").animate({ scrollTop: 200 }, 750/*, 'easeOutExpo'*/);
        $('html, body').animate({scrollTop: $("#acc-wrap").offset().top}, 750);
        $("#eerste").toggleClass("active").next().slideToggle(750);
    }

    if (window.location.href.indexOf("tweede") > -1) {
        //$("html, body").animate({ scrollTop: 200 }, 750/*, 'easeOutExpo'*/);
        $('html, body').animate({scrollTop: $("#acc-wrap").offset().top}, 750);
        $("#tweede").toggleClass("active").next().slideToggle(750);
    }


});
/* Copyright (C) - Izi Smart Web Design - All Rights Reserved */