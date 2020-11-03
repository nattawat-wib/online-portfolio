function parallaxHeader() {
    const parallaxStar = document.querySelector('.parallax__star');
    const parallaxText = document.querySelector('.parallax__text');
    const parallaxMountain = document.querySelector('.parallax__mountain');
    const parallaxMoon = document.querySelector('.parallax__moon');

    let scY = window.scrollY;
    
    parallaxStar.style.transform = `translate(0, ${scY * 0.1}%)`;
    parallaxText.style.transform = `translate(0, ${scY * 0.03}%)`;
    parallaxMountain.style.transform = `translate(0, ${scY * 0.05}%)`;
    parallaxMoon.style.transform = `translate(${scY * 0.1}%, ${scY * -0.2}%)`
}

function navbarAnimate() {
    const nav = document.querySelector('nav');
    const parallaxBg = document.querySelector('.parallax__bg');

    if(pageYOffset < 200 || window.scrollY > parallaxBg.offsetHeight) {
        nav.style.opacity = '1';

    } else {
        nav.style.opacity = '0';
    } 
}

function run() {
    window.addEventListener('load', () => {
        const loaderPage = document.querySelector('.loader'); 
        loaderPage.style.opacity = '0';
        setTimeout(()=>{loaderPage.style.display = 'none';} , 2000) 
    })

    window.addEventListener('scroll', () => {
        parallaxHeader();
        navbarAnimate();

    })
}
run();
