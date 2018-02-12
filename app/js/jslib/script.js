$(document).ready(function() {


    $("#accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: 'content',
        icons: false
    });


    $("#dropdown").accordion({
        active: false,
        collapsible: true,
        heightStyle: 'content',
        icons: false
    });


    $('.burger').click(function(){
        $('span').toggleClass('active');
        $('nav.mobile').toggleClass('opened')
        });


    $('.banner-content').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });


    $('.asideMenu-accordion').accordion({
        active: false,
        collapsible: true,
        heightStyle: 'content',
        icons: false,
        header: '.accordion-header'
    });

    $('.asideSubMenuAccordion').accordion({
        active: false,
        collapsible: true,
        heightStyle: 'content',
        icons: false,
        header: '.submenu-header'
    });

    $('.menu-button').click(function(){
        $('.open').toggleClass('close');
        $('.close').toggleClass('show');
        $('.menu').toggleClass('opened')
    });
});