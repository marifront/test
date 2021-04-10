$(function () {
    $('.header__slider').slick({

        dots: true,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    dots: false
                }
            }
        ]
    });

    $("a.header__link-more").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    $('.burger-mobile').on('click', function () {
        $('.header .menu').toggleClass('open');
        $('.burger-mobile').toggleClass('open');
        $('.header').toggleClass('hidden');
        $('body').toggleClass('hidden');
    });

});
