const nav = document.querySelector('nav');
const navCon = document.querySelector('.nav');

window.onscroll = function () {
    if (pageYOffset < 10) {
        nav.style.backgroundColor = 'transparent'
        navCon.style.padding = '40px 40px';
        nav.style.borderBottom = 'none'

    } else {
        nav.style.backgroundColor = '#17202a'
        navCon.style.padding = '0 40px';
        nav.style.borderBottom = '1px solid #85929e'
    }
}

const headerImg = document.getElementById('headerBoxImg');
const headerText = document.getElementById('headerBoxText');

function headerParallax() {
    headerImg.style.transform = `translate(0, ${window.scrollY * 0.05}%)`
    headerText.style.transform = `translate(0, ${window.scrollY * 0.07}%)`
}

const aboutLeft = document.querySelector('.about__detail--box1');
const aboutRight = document.querySelector('.about__detail--box2');
const aboutHeadText = document.querySelector('.about__head');
const toTopButton = document.querySelector('.back-to-top i');

function aboutFade() {
    if (scrollY > 200) {
        aboutHeadText.classList.remove('fade-out');
        aboutHeadText.classList.add('fade-in');

        toTopButton.style.opacity = '1';

    } else {
        aboutHeadText.classList.remove('fade-in');
        aboutHeadText.classList.add('fade-out');

        toTopButton.style.opacity = '0';

    }

    if (scrollY > 600) {
        aboutLeft.classList.remove('fadeOut-to-left')
        aboutRight.classList.remove('fadeOut-to-right')
        aboutLeft.classList.add('fade-from-left')
        aboutRight.classList.add('fade-from-right')

    } else {
        aboutLeft.classList.remove('fade-from-left')
        aboutRight.classList.remove('fade-from-right')
        aboutLeft.classList.add('fadeOut-to-left')
        aboutRight.classList.add('fadeOut-to-right')
    }
}

const aboutConText = document.querySelector('.about-con__text');
const aboutConImg = document.querySelectorAll('.about-con__img img');

function aboutConFade() {
    if (scrollY > 1300) {
        aboutConText.classList.remove('fade-out');
        aboutConText.classList.add('fade-in');

    } else {
        aboutConText.classList.remove('fade-in');
        aboutConText.classList.add('fade-out');
    }

    if (scrollY > 1600) {
        aboutConImg.forEach((img) => {
            img.classList.remove('fadeOut-to-left');
            img.classList.add('fade-from-right');
        })

    } else {
        aboutConImg.forEach((img) => {
            img.classList.remove('fade-from-right');
            img.classList.add('fadeOut-to-left');
        })
    }
}

function run() {
    document.addEventListener('scroll', function () {
        headerParallax();
        aboutFade();
        aboutConFade();
    })
}
run();

const navToggle = document.querySelector('nav label');
const toggleCheck = document.getElementById('toggle-sub-menu');

navToggle.addEventListener('click', function (){
    if (toggleCheck.checked == true) {
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';

    } else {
        navToggle.innerHTML = '<i class="fas fa-times"></i>';
    }
});

const subMenuList = document.querySelectorAll('.sub-menu a');
const subMenuBar = document.querySelector('.sub-menu');

subMenuList.forEach((list) => {
    list.addEventListener('click', () => {
        subMenuBar.style.width = '0vw';
        setTimeout(()=> {subMenuBar.removeAttribute('style')}
                  ,500);
        toggleCheck.checked = false;
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    })
})