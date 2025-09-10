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
const galleryContainer = document.querySelector('.gallery__container')
if (galleryContainer && window.Swiper) {
  let swiperProjects = new Swiper('.gallery__container', {
      loop: true,
      spaceBetween: 24,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
      },
      breakpoints: {
          1200: {
            slidesPerView: 2,
            spaceBetween: -56,
          },
        },
  })
}






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
if (contactForm) {
  contactForm.addEventListener('submit', sendEmail)
}



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


/*=============== DARK MODE FORCED ===============*/ 
// Ensure dark theme is applied on load and ignore any stored preference
document.body.classList.add('dark-theme')
try {
  localStorage.removeItem('selected-theme')
  localStorage.removeItem('selected-icon')
} catch (e) {}

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

