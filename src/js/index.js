
const header = document.querySelector('header');
/** ----SCROLL HEADER -----*/
function scrollHeader() {
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);
/**----SCROLL  ----- */

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionID = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('a[href*=' + sectionID + ']').classList.add('active-link');
        } else {
            document.querySelector('a[href*=' + sectionID + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/**------ SCROLL UP---- */
function scrollUp() {
    const scrollUp = document.querySelector('#scroll-up');
    if (this.scrollY >= 550) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }

}
window.addEventListener('scroll', scrollUp);

/** ----- RESPONSIVE SIDEBAR MENU MOBILE */

const showMenu = (toggleId, navId, closeId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        closeID = document.getElementById(closeId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
    if (closeID && nav) {
        closeID.addEventListener('click', () => {
            nav.classList.remove('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu', 'nav-close');

/*---- ACTIVAR Y REMOVER MENU ---- */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active-link'))
    this.classList.add('active-link');

    //REMOVE MENU MOBILE
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// SCROOL REVEAL

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    deley: 400
})

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700, origin: 'top' });
sr.reveal(`.home__social, .home__arrow`, { delay: 700, origin: 'bottom' });