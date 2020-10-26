const nav = document.querySelector('nav');

window.onscroll = function () {
    if( pageYOffset > 100 ) {
        nav.style.background = 'transparent'
    }
}