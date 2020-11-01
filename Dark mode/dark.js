const nav = document.querySelector('nav');
const navCon = document.querySelector('.nav');

window.onscroll = function() {
    if ( pageYOffset < 1 ) {
        nav.style.backgroundColor = 'transparent'
        navCon.style.padding = '40px 40px';
        navCon.style.borderBottom = 'none'

    } else {
        nav.style.backgroundColor = 'rgba(44, 62, 80, 0.8)'
        navCon.style.padding = '0 40px';
        navCon.style.borderBottom = '4px solid #85929e'
    }
}

const headerImg = document.getElementById('#header__box--img');
const headerSig = document.querySelector('.header__box--sig');
const headerText = document.querySelector('.header__box--text');
    
function headerParallax() {
    headerImg.style.transform = `translate(0, ${window.scrollY * -0.3}%)`
    headerSig.style.transform = `translate(0, ${window.scrollY * -0.3}%)`
    headerText.style.transform = `translate(0, ${window.scrollY * -0.3}%)`
}

function run() {
    document.addEventListener('scroll', function() {
        headerParallax();
    })
}

run();