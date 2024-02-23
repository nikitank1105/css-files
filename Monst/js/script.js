$(document).ready(function() {

    $('.slide-items').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3
    });

    var typed = new Typed('.typed', {
        strings: ["Web Agency .", "Social Marketing."],
        typeSpeed: 150,
        backSpeed: 50,
        startdelay: 50,
        loop: true,

    });
});

// counter

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
                    duration: 2000,
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