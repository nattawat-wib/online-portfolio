function parallaxHeader() {
    const textHead = document.querySelector('.para-head');
    const imgHead = document.querySelector('.para-img');
    const secImg = document.querySelector('.img');
    const star = document.querySelector('.star');

    textHead.style.transform = `translate(0, ${window.scrollY * -0.05}%)`
    imgHead.style.transform = `translate(${window.scrollY * 0.1}%, ${window.scrollY * -0.1}%)`
    secImg.style.transform = `translate(0, ${window.scrollY * 0.07}%)`
    star.style.transform = `translate(0, ${window.scrollY * 0.1}%)`
}



function run() {
    window.addEventListener('scroll', () => {
        parallaxHeader();
    })
}

run();