$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<span class="slick-prev"><img src="images/angle-left-svgrepo-com.svg" alt=""></span>',
        nextArrow: '<span class="slick-next"><img src="images/angle-right-svgrepo-com.svg" alt=""></span>'
    });
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
    })
    ScrollReveal().reveal('.top-revel', {
        delay: 100,
        origin: 'top'
    });
    ScrollReveal().reveal('.banner-about', {
        delay: 300,
        origin: 'left'
    });
    ScrollReveal().reveal('.banner-img', {
        delay: 300,
        origin: 'right'
    });
    ScrollReveal().reveal('.contant-team', {
        origin: 'bottom',
        interval: 200
    });
    ScrollReveal().reveal('.team-img', {
        origin: 'left',
        interval: 800
    });
    ScrollReveal().reveal('.team-work ', {
        origin: 'right',
        interval: 800
    });
    ScrollReveal().reveal('.sulution-details', {
        rotate: {
            x: 800,
            y: 100,
            z: 100
        }
    });
    ScrollReveal().reveal('.fact', {

        interval: 500
    });

    ScrollReveal().reveal('.scale', {
        scale: '1.5 '

    });
    ScrollReveal().reveal('.easing', {
        easing: 'ease-out',
        origin: 'top',
    });

    ScrollReveal().reveal('.easing-bottom', {
        easing: 'ease-in',

    });
    ScrollReveal().reveal('.slick-list ', {
        origin: 'right',
        interval: 800
    });


    // sticky header

    $(document).scroll(function() {
        if ($(this).scrollTop() > 30) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }
        var y = $(this).scrollTop();
        console.log(y)
        if (y > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    })

    // scroll top buttun

    $('.scrolltop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // toggle mobail menu
    $(".toggle-menu-btn").click(function() {
        $(".navbar").toggleClass("mobile-menu")
    })

    $(".toggle-close").click(function() {
        $(".navbar").removeClass("mobile-menu")
    })
    $(".add-remove").click(function() {
        if ($($(this).next()).hasClass("show")) {
            $(".add-remove").removeClass("active");
            $(".submenu").removeClass("show");
        } else {
            $(".add-remove").removeClass("active");
            $(".submenu").removeClass("show");
            $(this).addClass("active");
            $(this).next().addClass("show");
        }
    });
});

// $(".close").click(function() {
//     $(".model").fadeOut(500);
//     $('body').removeClass('modal-open');
// });

// counter
$(".has--submenu").click(function() {
    $(this).toggleClass('show-submenu');

});

var counted = 0;
$(window).scroll(function() {

    var oTop = $('.count').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }


});