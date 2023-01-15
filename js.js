const navbar = document.querySelector('.navbar');
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.padding = "20px 10px";
        navbar.classList.add('navbar__colored');
    } else {
        navbar.style.padding = "42px 10px";
        navbar.classList.remove('navbar__colored');
    }
}

const arrow = document.querySelectorAll('.arrow__link');
for (i = 0; i < arrow.length; i++) {
    let thisArrow = arrow[i];
    arrow[i].addEventListener('click', function () {
        thisArrow.parentElement.classList.toggle('_active');
    })
}

const iconMenu = document.querySelector('.navbar__burgermenu');
if (iconMenu) {
    const bodyMenu = document.querySelector('.navbar__list-body');
    iconMenu.addEventListener('click', function () {
        iconMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
    });
}