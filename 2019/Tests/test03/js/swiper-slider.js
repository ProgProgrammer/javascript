$(function($)
{
    $(document).ready(function ($) {
        var swiper = new Swiper('.swiper-container.slider', {
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
            },
            speed: 500
        });
    });
});