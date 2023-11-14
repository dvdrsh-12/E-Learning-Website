$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-xmark');
        $('.navbar').toggleClass('nav-toggle');
    });
    $('#login').click(function () {
        $('.login-form').toggleClass('popup');
    });
    $('.login-form form .fa-xmark').click(function () {
        $('.login-form').removeClass('popup');
    });
    $('#registerNowLink').click(function (e) {
        e.preventDefault();
        $('#loginhide').hide();
        $('#registerForm').show();
    });
    $('#registerForm .fa-xmark').click(function (e) {
        e.preventDefault();
        $('#loginhide').show();
        $('#registerForm').hide();
    });

    $(window).on('load scroll', function () {
        $('#menu').removeClass('fa-xmark');
        $('.navbar').removeClass('nav-toggle');
        $('section').each(function () {
            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
    $(window).trigger('load scroll');
});