$(function() {
    $('.l-header__content__menu-sp__menu__btn').click(function() {
        $('.l-header__content__menu-sp__menu__container').toggleClass('active');
    });
    $('.l-header__content__menu-sp__menu__container__list__items__link').click(function() {
        $('.l-header__content__menu-sp__menu__container').toggleClass('active');
    });
    $('.l-header__content__menu-sp__menu__container__list__items__link').click(function() {
        $('.l-header__content__menu-sp__menu__btn').toggleClass('active');
    });
    $('.l-header__content__menu-sp__menu__container').click(function(){
        $(this).removeClass('active');
    });
    $('.l-header__content__menu-sp__menu__btn').click(function(ev){
        ev.preventDefault();
        $(this).toggleClass('active');
    });
});
