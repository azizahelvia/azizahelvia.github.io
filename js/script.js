/* ------ Show Menu ------ */
const tampilMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
tampilMenu('toggle-nav', 'menu-nav')

/* ------ Active and Remove Menu ------ */
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove Menu Mobile
    const navMenu = document.getElementById('menu-nav')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ------ Scroll Reveal Animation ------ */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* Scroll Home */
sr.reveal('.title-home',{})
sr.reveal('.btn-contact',{delay: 200})
sr.reveal('.home-img', {delay: 400})
sr.reveal('.home-social-socmed-icon', {interval: 200})

/* Scroll About */
sr.reveal('.about-img',{})
sr.reveal('.about-subtitle',{delay: 200})
sr.reveal('.about-text',{delay: 400})

/* Scroll Skills */
sr.reveal('.skills-subtitle',{})
sr.reveal('.skills-text',{delay: 200})
sr.reveal('.skills-list',{interval: 200})

/* Scroll Project */
sr.reveal('.project-img',{interval: 200})

/* Scroll Contact */
sr.reveal('.contact-input',{interval: 200})