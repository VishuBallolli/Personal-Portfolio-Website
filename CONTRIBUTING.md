# Contributing to Personal Portfolio Website

First off, thank you for considering contributing to this portfolio website template! 🎉

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**When reporting bugs, include:**
- Browser and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**When suggesting enhancements:**
- Use a clear and descriptive title
- Provide detailed description of the suggested enhancement
- Explain why this would be useful

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/personal-portfolio-website.git
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the coding style
   - Test your changes
   - Update documentation if needed

4. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
   
   Use conventional commits:
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation changes
   - `style:` - Code style changes
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**

## 💻 Development Guidelines

### Code Style

**HTML:**
- Use semantic HTML5 elements
- Indent with 4 spaces
- Use lowercase for tags and attributes
- Add comments for major sections

**CSS:**
- Follow BEM naming convention where applicable
- Use CSS variables for colors and common values
- Mobile-first approach
- Group related properties
- Add comments for major sections

**JavaScript:**
- Use ES6+ features
- Use meaningful variable and function names
- Add comments for complex logic
- Follow consistent indentation (4 spaces)

### File Organization

```
assets/
├── css/
│   └── style.css          # All styles in one file for simplicity
├── js/
│   └── script.js          # All scripts in one file
├── images/                # Optimized images
└── pdf/                   # Documents
```

### Testing Checklist

Before submitting a PR, test:
- [ ] Mobile devices (320px - 768px)
- [ ] Tablets (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Dark mode toggle
- [ ] All navigation links
- [ ] Contact form validation
- [ ] Cross-browser compatibility

### Image Guidelines

- Compress images before adding
- Use WebP format with JPG fallback when possible
- Profile images: max 400x400px
- Project images: max 1200x800px
- Keep file sizes under 200KB

## 🎨 Design Principles

- **Simplicity** - Keep it clean and minimal
- **Accessibility** - Ensure WCAG 2.1 AA compliance
- **Performance** - Optimize for fast loading
- **Responsiveness** - Mobile-first approach

## 📝 Documentation

When adding features, please update:
- README.md with feature description
- Code comments for complex functionality
- Customization guide if applicable

## ❓ Questions?

Feel free to open an issue with the `question` label.

## 🙏 Thank You!

Your contributions make this project better for everyone!

---

**Happy Contributing! 🚀**