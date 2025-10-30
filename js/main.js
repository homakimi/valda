$(function() {

})

window.onload = function() {
    $('body, html').animate({ scrollTop: 0 }, 100)
} 

$(document)
.on('click', 'a', function(e) {
    if($(this).attr('href').length == 0) {
        e.preventDefault();
    }
})
.on('mousedown', 'img', function(e) {
    e.preventDefault();
})
.on('click', '.icon-hamburger', function() {
    $('.icon-hamburger').hide();
    $('.icon-close').show();
    $('.menu-dropdown').stop().slideDown();
})
.on('click', '.icon-close, [data-nav], [data-call-lightbox]', function() {
    $('.icon-close').hide();
    $('.icon-hamburger').show();
    $('.menu-dropdown').stop().slideUp();
})
.on('click', '[data-nav]', function() {
    console.log($(this).data('nav'))
    $('body, html').animate({ scrollTop: $('[data-target="'+$(this).data('nav')+'"]').offset().top - $('nav').height() }, 1000)
})
.on('click', '[data-call-lightbox]', function() {
    $('.lightbox').stop().fadeIn();
})
.on('click', '.lightbox-close', function() {
    $('.lightbox').stop().fadeOut();
})