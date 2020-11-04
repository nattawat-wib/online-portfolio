function parallaxHeader() {
    const parallaxStar = document.querySelector('.parallax__star');
    const parallaxText = document.querySelector('.parallax__text');
    const parallaxMountain = document.querySelector('.parallax__mountain');
    const parallaxMoon = document.querySelector('.parallax__moon');
    const parallaxCloud = document.querySelector('.parallax__cloud');

    let scY = window.scrollY;

    parallaxStar.style.transform = `translate(0, ${scY * 0.1}%)`;
    parallaxText.style.transform = `translate(0, ${scY * 0.1}%)`;
    parallaxMountain.style.transform = `translate(0, ${scY * 0.05}%)`;
    parallaxMoon.style.transform = `translate(${scY * 0.1}%, ${scY * -0.2}%)`
    parallaxCloud.style.transform = `translate(0, ${scY * -0.03}%)`
}

function navbarAnimate() {
    const nav = document.querySelector('nav');
    const parallaxBg = document.querySelector('.parallax__bg');

    if(pageYOffset < 10) {
        nav.style.opacity = '1';
        nav.style.backgroundColor = 'transparent';
        nav.style.padding = '30px 0';
        nav.style.borderBottom = 'none';

    } else if(window.scrollY > parallaxBg.offsetHeight) {
        nav.style.opacity = '1';
        nav.style.backgroundColor = '#152D4F';
        nav.style.padding = '12px 0';
        nav.style.borderBottom = '#3892B8 solid 3px';
        
    } else {
        nav.style.opacity = '0';
    } 
}

function scrollTextAnimation() {
    const scrollDownText = document.querySelector('.scroll-down');
    
    if(pageYOffset > 10) {
        scrollDownText.style.opacity = '0'
    
    } else {
        scrollDownText.style.opacity = '1'
    } 
}

function backToTopFade() {
    const backToTopButton = document.querySelector('.back-to-top a');
    const aboutCheckBox = document.getElementById('ab');

    if(pageYOffset < aboutCheckBox.offsetTop) {
        backToTopButton.style.opacity = '0';
    
    } else {
        backToTopButton.style.opacity = '1';
    }

    console.log(pageYOffset);
    console.log(aboutCheckBox.offsetTop);
}

function run() {
    window.addEventListener('load', () => {
        const loaderPage = document.querySelector('.loader'); 

        loaderPage.style.opacity = '0';
        // loaderPage.style.height = '0vh'
        setTimeout(()=>{loaderPage.style.display = 'none';} , 2000) 
    })

    window.addEventListener('scroll', () => {
        parallaxHeader();
        navbarAnimate();
        scrollTextAnimation();
        backToTopFade();
    })
}
run();
