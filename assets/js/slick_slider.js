$(function(){
    $('.p-main__portfolio__content__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrow: true,
        dots: true,
        prevArrow: '<div class="slick-prev prev-arrow"><svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M40 48 24 32l16-16" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
        nextArrow: '<div class="slick-prev next-arrow"><svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M40 48 24 32l16-16" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
        variableWidth:false,
        // autoplaySpeed: 200,
    });
});