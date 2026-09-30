/*==================== MENU SHOW/HIDE ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== FORM SUBMISSION ====================*/
const contactForm = document.querySelector('.contact__form');

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const project = document.getElementById('project').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if(name && email && project && message) {
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to a server
            console.log('Form Data:', { name, email, project, message });
        } else {
            alert('Please fill in all fields.');
        }
    });
}

/*==================== SMOOTH SCROLL ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== TYPING ANIMATION ====================*/
const texts = ['Frontend Developer', 'Web Designer', 'UI/UX Enthusiast', 'Problem Solver'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

function type() {
    const subtitle = document.querySelector('.home__subtitle');
    
    if(!subtitle) return;
    
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    
    if (!isDeleting) {
        letter = currentText.slice(0, ++index);
    } else {
        letter = currentText.slice(0, --index);
    }
    
    subtitle.textContent = letter;
    
    let typeSpeed = 150;
    
    if (isDeleting) {
        typeSpeed /= 2;
    }
    
    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    type();
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Simple scroll reveal function
function reveal() {
    const reveals = document.querySelectorAll('.section');
    
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Initial check
reveal();

/*==================== PRELOADER ====================*/
window.addEventListener('load', () => {
    // Hide any loading animation if present
    document.body.classList.add('loaded');
});

/*==================== CONSOLE MESSAGE ====================*/
console.log('%c✨ Welcome to My Portfolio! ✨', 'color: #6E57E0; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #4ECDC4; font-size: 14px;');
console.log('%cFeel free to explore! 🚀', 'color: #FF6B6B; font-size: 14px;');