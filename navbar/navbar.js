let navMenu = document.getElementById('js-nav__menu');
let navToggle = document.getElementById('js-nav__toggle');

navToggle.addEventListener("click", function() {
    navMenu.classList.toggle('active');
});

console.log(navToggle)
console.log(navMenu)