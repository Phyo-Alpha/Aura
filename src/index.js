const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

});

const buttonHair = document.getElementById('button-hair');
const buttonFace = document.getElementById('button-face');
const buttonBody = document.getElementById('button-body');

buttonHair.addEventListener('click', () => {
    console.log('Hair clicked');
    swiper.slideTo(0);
})

buttonFace.addEventListener('click', () => {
    console.log('Face clicked');
    swiper.slideTo(1);
})

buttonBody.addEventListener('click', () => {
    console.log('Body clicked');
    swiper.slideTo(2);
})



