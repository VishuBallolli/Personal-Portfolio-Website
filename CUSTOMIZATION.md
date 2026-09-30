# Portfolio Customization Guide

This guide will help you customize your portfolio website to make it your own.

## 📝 Table of Contents
1. [Personal Information](#personal-information)
2. [Colors and Themes](#colors-and-themes)
3. [Images](#images)
4. [Content Sections](#content-sections)
5. [Social Media Links](#social-media-links)
6. [Skills and Experience](#skills-and-experience)
7. [Projects](#projects)

---

## 🔧 Personal Information

### Update Your Name and Title

**In `index.html`:**

1. **Navigation Logo** (Line ~33):
```html
<a href="#" class="nav__logo">
    <span>Your</span>Name
</a>
```
Change to your actual name.

2. **Home Section** (Line ~106):
```html
<h1 class="home__title">Hi, I'm Your Name</h1>
<h3 class="home__subtitle">Frontend Developer</h3>
```

3. **Meta Tags** (Lines 7-9):
```html
<meta name="description" content="Your custom description">
<meta name="author" content="Your Name">
```

4. **Page Title** (Line 16):
```html
<title>Your Name - Portfolio</title>
```

---

## 🎨 Colors and Themes

### Change Primary Color

**In `assets/css/style.css`** (Line 8):

```css
:root {
    --hue-color: 250; /* Change this value */
}
```

**Color Options:**
- Blue: `250`
- Green: `142`
- Purple: `280`
- Pink: `340`
- Orange: `14`
- Red: `0`

The entire color scheme will automatically adjust based on this single value!

### Font Customization

**In `assets/css/style.css`** (Line 22):

```css
--body-font: 'Poppins', sans-serif;
```

Popular alternatives:
- `'Roboto', sans-serif`
- `'Montserrat', sans-serif`
- `'Open Sans', sans-serif`
- `'Raleway', sans-serif`

Don't forget to update the Google Fonts link in `index.html` (Line 21).

---

## 🖼️ Images

### Profile Picture

Replace `assets/images/profile.jpg` with your own image:
- **Recommended size**: 400x400px
- **Format**: JPG or PNG
- **File name**: Keep as `profile.jpg` or update the reference in HTML

### About Image

Replace `assets/images/about.jpg`:
- **Recommended size**: 700x700px
- **Format**: JPG or PNG

### Project Images

Replace these files in `assets/images/`:
- `portfolio1.jpg`
- `portfolio2.jpg`
- `portfolio3.jpg`

**Recommended size**: 1200x800px (16:9 ratio)

### Resume/CV

Replace `assets/pdf/resume.pdf` with your actual resume PDF file.

---

## 📄 Content Sections

### About Section

**In `index.html`** (Lines 152-177):

```html
<p class="about__description">
    Write your own introduction here...
</p>

<div class="about__info">
    <div>
        <span class="about__info-title">02+</span>
        <span class="about__info-name">Years <br> experience</span>
    </div>
    <!-- Update your stats -->
</div>
```

### Contact Information

**In `index.html`** (Lines 311-338):

```html
<div class="contact__information">
    <i class="fas fa-phone contact__icon"></i>
    <div>
        <h3 class="contact__title">Call Me</h3>
        <span class="contact__subtitle">+1-234-567-8900</span>
    </div>
</div>
```

Update:
- Phone number
- Email address
- Location

---

## 🔗 Social Media Links

### Header Social Links

**In `index.html`** (Lines 84-95):

```html
<div class="home__social">
    <a href="https://linkedin.com/in/yourprofile" target="_blank" class="home__social-icon">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://github.com/yourusername" target="_blank" class="home__social-icon">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://twitter.com/yourusername" target="_blank" class="home__social-icon">
        <i class="fab fa-twitter"></i>
    </a>
</div>
```

### Footer Social Links

**In `index.html`** (Lines 387-399):

Update the same way as header social links.

---

## 💼 Skills and Experience

### Update Skills

**In `index.html`** (Lines 200-240):

```html
<div class="skills__data">
    <div class="skills__titles">
        <h3 class="skills__name">HTML</h3>
        <span class="skills__number">90%</span>
    </div>
    <div class="skills__bar">
        <span class="skills__percentage skills__html"></span>
    </div>
</div>
```

**In `assets/css/style.css`** (Lines 467-482):

Update the percentage widths:

```css
.skills__html {
    width: 90%;
}
.skills__css {
    width: 80%;
}
```

### Add New Skills

1. Copy an existing skill block in HTML
2. Change the skill name and percentage
3. Add a new CSS class for the width:

```css
.skills__python {
    width: 85%;
}
```

### Add New Skill Categories

Copy the entire `.skills__content` block and modify:

```html
<div class="skills__content skills__close">
    <div class="skills__header">
        <i class="fas fa-server skills__icon"></i>
        <div>
            <h1 class="skills__title">Backend Developer</h1>
            <span class="skills__subtitle">More than 1 year</span>
        </div>
        <i class="fas fa-chevron-down skills__arrow"></i>
    </div>
    <!-- Add your skills here -->
</div>
```

---

## 🚀 Projects

### Update Existing Projects

**In `index.html`** (Lines 255-304):

```html
<div class="portfolio__content grid">
    <img src="assets/images/portfolio1.jpg" alt="Project 1" class="portfolio__img">
    
    <div class="portfolio__data">
        <h3 class="portfolio__title">Modern Website</h3>
        <p class="portfolio__description">
            Your project description here...
        </p>
        <a href="#" class="button button--flex button--small portfolio__button">
            Demo
            <i class="fas fa-arrow-right button__icon"></i>
        </a>
    </div>
</div>
```

Update:
- Image source
- Project title
- Description
- Demo link (or change to GitHub link)

### Add More Projects

Copy the entire `.portfolio__content` block and paste it below the existing ones.

---

## 🎯 Advanced Customization

### Typing Animation Texts

**In `assets/js/script.js`** (Line 136):

```javascript
const texts = ['Frontend Developer', 'Web Designer', 'UI/UX Enthusiast', 'Problem Solver'];
```

Add or modify the rotating texts.

### Form Submission

The contact form currently shows an alert. To connect it to a real backend:

**In `assets/js/script.js`** (Lines 99-125):

Replace the alert with an actual API call:

```javascript
// Example using fetch API
fetch('your-api-endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, project, message })
})
.then(response => response.json())
.then(data => {
    alert('Message sent successfully!');
    contactForm.reset();
})
.catch(error => {
    alert('Error sending message. Please try again.');
});
```

---

## 📱 Testing

After customization, test your website:

1. **Desktop view** (1024px+)
2. **Tablet view** (768px - 1024px)
3. **Mobile view** (320px - 768px)
4. **Dark mode toggle**
5. **All navigation links**
6. **Form submission**
7. **External links**

---

## 🆘 Need Help?

Common issues and solutions:

**Images not showing:**
- Check file paths are correct
- Ensure images are in `assets/images/`
- Verify image file names match exactly

**Styles not applying:**
- Clear browser cache (Ctrl + Shift + R)
- Check CSS file is linked correctly
- Validate CSS syntax

**JavaScript not working:**
- Open browser console (F12)
- Check for error messages
- Ensure script.js is linked at the bottom of HTML

---

**Happy Customizing! 🎨**