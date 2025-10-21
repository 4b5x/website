$(function () {
    "use strict";

    /*navbar expand*/
    function navScroll() {
        const $navMenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navMenu.addClass('is-scrolling');
        } else {
            $navMenu.removeClass("is-scrolling");
        }
    }

    navScroll();
    $(window).on('scroll', function () {
        navScroll();
    });

    const images = [
        'images/gui1.png',
        'images/gui2.png',
        'images/gui3.png'
    ];
    let currentImageIndex = 0;
    const sliderImage = $('#slider-image');
    const dots = $('.dot');

    function showImage(index) {
        sliderImage.attr('src', images[index]);
        dots.removeClass('active');
        dots.eq(index).addClass('active');
        currentImageIndex = index;
    }

    dots.each(function(index) {
        $(this).on('click', function() {
            showImage(index);
        });
    });

    setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }, 1000); // Change image every 7.5 seconds
});

function disableSpace(event) {
    if (event.which === 32) {
        event.preventDefault();
        return false;
    }
}