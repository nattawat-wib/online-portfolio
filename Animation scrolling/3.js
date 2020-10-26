const nav = document.querySelector('nav');
const navCon = document.querySelector('.nav');
const navMenuList = document.querySelectorAll('.nav a');
const subMenu = document.querySelector('.nav ul ul');

window.onscroll = function() {
    if(pageYOffset > 100) {
        nav.style.background = '#2C3E50';
        navCon.style.padding = '0 40px';

        navMenuList.forEach(function(value) {
            value.style.color = '#FBFCFC';
        });
        subMenu.style.background = '#2C3E50';

    } else {
        nav.style.background = 'transparent';
        navCon.style.padding = '20px 40px';

        navMenuList.forEach(function(value) {
            value.style.color = '#2C3E50';
        });    
        subMenu.style.background = 'transparent';
    }
}