$(function () {
    $('.desing-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">',
        responsive: [
            {
                breakpoint: 461,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    // arrows: false,
                }
            }
        ]

    });

});