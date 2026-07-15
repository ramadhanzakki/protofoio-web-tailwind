// Hamburger
const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector('#nav-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
})

// NavBar Scroll
window.onscroll = function () {
    const header = document.querySelector('header');
    const navBarTop = header.offsetTop

    if (window.pageYOffset > navBarTop) {
        header.classList.add('fixed-scroll');
    } else {
        header.classList.remove('fixed-scroll');
    }
}