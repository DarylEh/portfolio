$(document).ready(function () {

    //smooth scroll
    $("#button").click(function (e) {
        e.preventDefault();
        $("body").animate({ scrollTop: 1400 }, "slow");
    });
    $('.home-click').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        }, 1000);
    });
    $('.skills-click').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        }, 1000);
    });
    $('.about-click').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000);
    });
    $('.portfolio-click').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        }, 1000);
    });
    $('.contact-click').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
    });
});