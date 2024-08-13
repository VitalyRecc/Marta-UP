$(function(){

    $('.header_slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'header_dots',
        autoplay: 2000,
    });

    $('.menu_btn').on('click', function() {
        $('.menu_list').slideToggle();
    });

});

