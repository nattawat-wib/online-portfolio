function run() {
    window.addEventListener('load', () => {
        const loaderPage = document.querySelector('.loader'); 
        loaderPage.style.opacity = '0';
        setTimeout(()=>{loaderPage.style.display = 'none';} , 2000) 
    })
}
run();
