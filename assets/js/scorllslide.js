let animate_left_introduction = document.querySelector(".p-main__introduction__content__photo__img");
let animate_hidden_introduction = document.querySelector(".p-main__introduction__maintitle");
let animate_right_introduction = document.querySelector(".p-main__introduction__content__title");

window.addEventListener("scroll",function () {
    let value = window.scrollY;
    console.log("scrollY", value);
    
    // if (value > 530) {
    // animate_left_introduction.style.animation="introduction_slide_left 1.5s ease-out";
    // }else
    // animate_left_introduction.style.animation="come 0.5s ease-out forwards";

    // if (value > 530) {
    // animate_hidden_introduction.style.animation="hidden 1.5s ease-out";
    // }else
    // animate_hidden_introduction.style.animation="unhidden 0.5s ease-out forwards";

    // if (value > 530) {
    // animate_right_introduction.style.animation="introduction_slide_right 1.5s ease-out";
    // }else
    // animate_right_introduction.style.animation="introduction_slide_come 0.5s ease-out forwards";
});
