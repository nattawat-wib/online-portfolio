let nav = document.querySelector('.nav');

window.onscroll = function() {
    if(window.pageYOffset > 1) {
        nav.style.background = '#007bff';
        nav.style.boxShadow = '0 4px 2px grey'
    
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none'
    }   
}

