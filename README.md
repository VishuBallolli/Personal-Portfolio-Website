# Personal Portfolio Website

A modern, responsive personal portfolio website built with **HTML5**, **CSS3**, and **JavaScript**. Features a clean design, smooth animations, dark mode toggle, and fully responsive layout.

![Portfolio Preview](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design
- **Modern UI/UX** - Clean and professional interface
- **Dark Mode Toggle** - Switch between light and dark themes with localStorage persistence
- **Smooth Animations** - Fade-in effects, hover transitions, and typing animation
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop devices

### 🔧 Functionality
- **Sticky Navigation** - Navigation bar changes on scroll
- **Mobile Menu** - Hamburger menu for mobile devices
- **Active Link Highlighting** - Shows current section in navigation
- **Accordion Skills Section** - Collapsible skill categories with progress bars
- **Contact Form** - Functional contact form with validation
- **Scroll to Top Button** - Appears when scrolling down
- **Smooth Scrolling** - Smooth navigation between sections
- **Typing Animation** - Dynamic text animation in hero section

### 📱 Responsive Breakpoints
- **Small Devices**: 320px - 568px
- **Medium Devices**: 568px - 768px
- **Large Devices**: 768px - 1024px
- **Extra Large**: 1024px+

## 📁 Project Structure

```
personal-portfolio-website/
├── index.html                 # Main HTML file with semantic structure
├── assets/
│   ├── css/
│   │   └── style.css         # Complete CSS with responsive design
│   ├── js/
│   │   └── script.js         # JavaScript functionality and interactions
│   ├── images/               # Image assets
│   │   ├── profile.jpg       # Profile/avatar image
│   │   ├── about.jpg         # About section image
│   │   └── portfolio[1-3].jpg # Project screenshots
│   └── pdf/
│       └── resume.pdf        # Downloadable resume/CV
├── .gitignore               # Git ignore file
├── LICENSE                  # MIT License
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) - optional
- Git installed on your machine

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/personal-portfolio-website.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd personal-portfolio-website
   ```

3. **Open the project:**
   
   **Option A - Direct Browser:**
   - Simply open `index.html` in your web browser
   
   **Option B - Live Server (Recommended):**
   - Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
   - Right-click on `index.html` and select "Open with Live Server"
   
   **Option C - Python Server:**
   ```bash
   python -m http.server 8000
   # Then open http://localhost:8000 in your browser
   ```

## 🎨 Customization

### Personal Information

1. **Update HTML Content** (`index.html`):
   - Line 33: Change navigation logo name
   - Line 106: Update your name and title
   - Lines 152-177: Modify about section description and stats
   - Lines 311-338: Update contact information

2. **Update Meta Tags** (`index.html`, Lines 7-16):
   - Change page title
   - Update meta description
   - Add your name as author

### Colors & Themes

**Change Primary Color** (`assets/css/style.css`, Line 8):
```css
:root {
    --hue-color: 250; /* Change this value */
}
```
- Blue: `250`
- Green: `142`
- Purple: `280`
- Pink: `340`
- Orange: `14`
- Red: `0`

### Images

Replace the following images in `assets/images/`:
- `profile.jpg` - Your profile picture (400x400px recommended)
- `about.jpg` - About section image (700x700px recommended)
- `portfolio1.jpg`, `portfolio2.jpg`, `portfolio3.jpg` - Project screenshots (1200x800px recommended)

Replace `assets/pdf/resume.pdf` with your actual resume.

### Social Media Links

Update your social media links in `index.html`:
- **Home Section** (Lines 84-95): Header social links
- **Footer Section** (Lines 387-399): Footer social links

### Skills

**Update Skills** (`index.html`, Lines 200-240):
- Change skill names and percentages
- Add new skills by copying existing skill blocks

**Update Progress Bar Widths** (`assets/css/style.css`, Lines 467-482):
```css
.skills__html { width: 90%; }
.skills__css { width: 80%; }
/* Add your skills here */
```

### Projects

Update project information in `index.html` (Lines 255-304):
- Change project titles
- Update descriptions
- Modify demo/GitHub links
- Replace project images

## 🌐 Deployment

### GitHub Pages (Free & Easy)

1. **Push code to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/personal-portfolio-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select `main` branch as source
   - Click Save

3. **Access your site:**
   - URL: `https://yourusername.github.io/personal-portfolio-website/`

### Other Deployment Options

- **Netlify**: Drag and drop your folder at [netlify.com](https://netlify.com)
- **Vercel**: Import from GitHub at [vercel.com](https://vercel.com)
- **GitHub Actions**: Automated deployment (see `.github/workflows/`)

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and content |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (ES6+)** | Interactive functionality and DOM manipulation |
| **Font Awesome 6.4.0** | Icons throughout the website |
| **Google Fonts (Poppins)** | Typography |
| **CSS Grid & Flexbox** | Layout and positioning |
| **CSS Variables** | Theming and color management |
| **LocalStorage API** | Dark mode preference persistence |

## 📋 Features Breakdown

### HTML Features
- ✅ Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ SEO meta tags and Open Graph tags
- ✅ Accessible form labels and ARIA attributes
- ✅ Optimized for search engines

### CSS Features
- ✅ CSS Variables for easy theming
- ✅ Flexbox and CSS Grid layouts
- ✅ Mobile-first responsive design
- ✅ Smooth transitions and animations
- ✅ Custom scrollbar styling
- ✅ Dark theme support

### JavaScript Features
- ✅ Mobile menu toggle
- ✅ Active section detection
- ✅ Scroll-based animations
- ✅ Dark/Light theme switcher with persistence
- ✅ Form validation and submission handling
- ✅ Typing animation effect
- ✅ Accordion skills section
- ✅ Smooth scroll navigation

## 🔍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📈 Performance

- ⚡ Lightweight (no frameworks or libraries)
- ⚡ Fast loading time
- ⚡ Optimized images recommended
- ⚡ Minimal HTTP requests

## 🐛 Known Issues

None at the moment. Please report any issues you find!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourprofile](https://linkedin.com/in/yourprofile)
- Twitter: [@yourusername](https://twitter.com/yourusername)

## 🙏 Acknowledgments

- Font Awesome for the icons
- Google Fonts for the Poppins font family
- Inspiration from various portfolio designs

## 📞 Support

If you found this helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features

---

**Made with ❤️ and ☕**

*Happy Coding! 🚀*