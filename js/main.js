//burger menu

let button = document.querySelector('#button-hidden-menu');
let hiddenNav = document.querySelector('#hidden-nav');
button.addEventListener('click', function() {
    hiddenNav.classList.toggle('active');
    button.classList.toggle('active');
});

// slider
const slides = document.querySelectorAll('#slider #slider-line li');
const sliderLine = document.querySelector('#slider #slider-line');
let count = 0;
let width;

function init() {
    width = document.querySelector('#slider').offsetWidth;
    sliderLine.style.width = width * slides.length + 'px';
    slides.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });

    rollSlider();
}
// setInterval(unit, 1000);
init();
window.addEventListener('resize', init);

document.querySelector('.slider-forward-btn').addEventListener('click', function() {
    count++;
    if (count >= slides.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-back-btn').addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = slides.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}