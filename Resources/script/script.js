$(document).ready(function() {
    $(window).scroll(function() {
        
        if ($(window).scrollTop() >= 150) {
            $('nav').addClass('sticky');
            $('nav').addClass('animated fadeInDown');
            $('container-page-down').addClass('animated fadeOut');
        }
        else {
            $('nav').removeClass('sticky');
            $('nav').removeClass('animated fadeInDown');
        }
    });  
});