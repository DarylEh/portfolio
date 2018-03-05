$(document).ready(function () {

    //smooth scroll on nav
    $(".nav-item a").click(function (e) {
        e.preventDefault();
        $("body").animate({ scrollTop: 1400 }, "slow");
    });
    $(".burger").on("click tap", function () {
        $(".dropdown-content").toggleClass("burger1");
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
    // End of Smooth Scroll

    //Init Scroll Magic
    var controller = new ScrollMagic.Controller();
        //Skills Scene
        var ourSceneSkills = new ScrollMagic.Scene({
            triggerElement: '.skills-list',
            triggerHook: 0.9
        })
            .setClassToggle('.skills-list', 'fade-in')
            .addTo(controller);
        //About Me Scene
        var ourSceneSkillsAboutMe = new ScrollMagic.Scene({
            triggerElement: '.about-me-main',
            triggerHook: 0.9
        })
            .setClassToggle('.about-me-main', 'fade-in')
            .addTo(controller);
        //portfolio-pieces scene
        $('.portfolio-pieces').each(function(){
            //Build A Scene 
            var ourScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook:0.9
            })
                .setClassToggle(this, 'fade-in')
                .addTo(controller); 
        });
    //End of Scroll Magic
});