 /*=============== SHOW MENU ===============*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu//
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".gallery__container", {
    loop: true,
    spaveBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      
      },
});






/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-q1'),
    contactEmail = document.getElementById('contact-q2'),
    contactProject = document.getElementById('contact-q3'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    if(contactName.value ==='' || contactEmail.value === '' || contactProject.value === ''){
        //Adding and removing colours
        contactMessage.classList.remove('color-pink')
        contactMessage.classList.add('color-pink')
        //show message
        contactMessage.textContent = 'Please fill out all sections😎'
    }else{
        //serviceID - templateID - #form - publickey
        emailjs.sendForm('service_h5j3z1v','template_9b6tfl4','#contact-form','Cn9_aSVqOHEkWjZWO')
            .then(() =>{
                //show message and add color
                contactMessage.classList.add('color-pink')
                contactMessage.textContent = 'Sent! Much appreciated👍🏻'

                //remove message after five seconds
                setTimeout (() =>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) =>{
                alert('Oops! Something was wrong...', error)
            })

            //To clear the input field
            contactName.value = ''
            contactEmail.value = ''
            contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic
if(selectedTheme) {
    //if validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark /icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

