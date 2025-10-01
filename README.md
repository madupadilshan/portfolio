# 🌟 Personal Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Full Stack Web Developer.

![Portfolio Preview](portfolio.jpg)

## 🚀 Live Demo

[View Live Portfolio](https://madupadilshan.github.io/portfolio/)

## ✨ Features

### 🎨 Design & UI
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle** - Switch between themes with smooth transitions
- **Animated Title** - Eye-catching custom font animation
- **Typewriter Effect** - Dynamic text animation for role descriptions
- **Scroll Animations** - AOS (Animate On Scroll) library integration
- **Particle Background** - Interactive tsParticles animation
- **Parallax Effect** - Mouse-tracking parallax on profile image
- **Smooth Transitions** - Enhanced hover effects and animations

### 📱 Sections
- **Home** - Introduction with animated elements
- **About** - Professional background and expertise
- **Education** - Academic qualifications
- **Skills** - Technical skills organized by category
- **Projects** - Featured projects with live demos and source code
- **Contact** - Contact form and social media links

### 🔧 Additional Features
- **Back to Top Button** - Quick navigation to top of page
- **Active Section Highlighting** - Navigation shows current section
- **Mobile Menu** - Auto-closes after navigation on small screens
- **SEO Optimized** - Meta tags for better search engine visibility
- **Fast Loading** - Optimized images and lazy loading
- **Favicon Support** - Custom browser tab icon

### 🔐 Admin Dashboard (Hidden Feature)
- **Secret Access** - Hidden admin panel (footer logo multi-click)
- **Visitor Analytics** - Track page visits and statistics
- **Contact Messages** - View form submissions
- **Data Export** - Download analytics as JSON
- **Session Management** - Secure login with password protection

> **Note:** Admin dashboard uses client-side authentication for demonstration purposes. For production use, implement proper backend authentication.

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **Vanilla JavaScript** - No framework dependencies

### Libraries & Tools
- **Font Awesome 6.5.2** - Icon library
- **AOS (Animate On Scroll)** - Scroll animations
- **tsParticles v2** - Particle effects
- **Google Fonts (Poppins)** - Typography
- **CalSans Font** - Custom animated title font

### Development Tools
- **Git** - Version control
- **GitHub Pages** - Hosting
- **VS Code** - Code editor

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css               # Stylesheet with theme system
├── script.js               # JavaScript functionality
├── favicon.png             # Browser tab icon
├── CNAME                   # Custom domain config
├── README.md               # Project documentation
├── .gitignore              # Git ignore rules
│
├── fonts/                  # Custom fonts
│   └── CalSans-SemiBold.ttf
│
├── Images/
│   ├── pho.jpg            # Profile photo
│   ├── background.png     # Background assets
│   ├── portfolio.jpg      # Project screenshots
│   ├── recruitment-system.png
│   ├── online-store.jpg
│   └── blog.jpg
│
└── [Hidden Files]         # Admin tools (not in repo)
    ├── generate-password-hash.html
    └── ADMIN_SECURITY_README.md
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/madupadilshan/portfolio.git
   ```

2. **Navigate to project folder**
   ```bash
   cd portfolio
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. **View in browser**
   ```
   http://localhost:8000
   ```

## 🎨 Customization

### Update Personal Information

1. **Edit `index.html`:**
   - Change name, title, description
   - Update contact information
   - Modify project details
   - Update social media links

2. **Replace Images:**
   - `pho.jpg` - Your profile photo
   - `favicon.png` - Your favicon (32x32px)
   - Project screenshots in root folder

3. **Update `style.css`:**
   - Change color scheme (CSS variables in `:root`)
   - Modify spacing, fonts, or layouts

4. **Modify `script.js`:**
   - Update typewriter text array
   - Change animation timings
   - Customize particle effects

### Theme Colors

```css
:root {
    --primary-color: #b74b4b;      /* Main accent color */
    --secondary-color: #f9a825;     /* Secondary accent */
    
    /* Customize these for different theme */
}
```

### Admin Dashboard Setup

If you want to use the admin dashboard feature:

1. **Contact me** for the password generator tool
2. Generate your own secure password hash
3. Update `script.js` with your hash
4. Change the click threshold if desired

## 📦 Deployment

### GitHub Pages (Current)

1. Push your code to GitHub
2. Go to repository Settings
3. Navigate to Pages section
4. Select branch: `master`
5. Click Save

Your site will be live at: `https://yourusername.github.io/portfolio/`

### Custom Domain (Optional)

1. Add `CNAME` file with your domain
2. Configure DNS settings with your provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   ```

## 🐛 Known Issues

- Particle animation may be slow on older devices (can be disabled)
- Admin dashboard is client-side only (not production-ready)
- Contact form submissions require backend integration

## 🔮 Future Enhancements

- [ ] Backend API for contact form
- [ ] Blog section with CMS
- [ ] Project filtering by technology
- [ ] Testimonials section
- [ ] Backend authentication for admin panel
- [ ] Progressive Web App (PWA) support
- [ ] Multi-language support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Madupa Dilshan**
- GitHub: [@madupadilshan](https://github.com/madupadilshan)
- LinkedIn: [Madupa Dilshan](https://www.linkedin.com/in/madupadilshan)
- Email: madupadilshan111@gmail.com
- Portfolio: [madupadilshan.github.io/portfolio](https://madupadilshan.github.io/portfolio/)

## 🙏 Acknowledgments

- Font Awesome for icons
- AOS library for scroll animations
- tsParticles for particle effects
- Google Fonts for typography
- GitHub Pages for hosting

## 📞 Support

If you have any questions or need help with customization:
- Open an issue on GitHub
- Email me at madupadilshan111@gmail.com

---

⭐ **If you found this helpful, please give it a star!** ⭐

Made with ❤️ by Madupa Dilshan
