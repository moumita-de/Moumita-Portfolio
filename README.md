# Moumita Sarkar - Professional Portfolio Website

A modern, responsive portfolio website showcasing career, skills, projects, awards, and achievements.

## 📁 Project Structure

```
My_website/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling and responsive design
├── script.js           # JavaScript for interactivity and animations
└── README.md           # This file
```

## 🎯 Website Sections

1. **Navigation Bar** - Sticky navigation with smooth scrolling to all sections
2. **Hero Section** - Eye-catching introduction with call-to-action buttons
3. **About Me** - Personal introduction and key statistics
4. **Work Experience** - Detailed timeline of IBM career with key achievements
5. **Projects** - Showcase of notable projects (CHUBB Insurance, Thomson Reuters)
6. **Skills & Tools** - Technical skills with progress bars and expertise levels
7. **Awards & Achievements** - Recognition and certifications
8. **Publications** - Academic and technical publications
9. **Contact** - Contact information and message form
10. **Footer** - Copyright and closing section

## 🚀 Getting Started

### Open the Website
1. Navigate to the project directory
2. Open `index.html` in your web browser
   - Double-click `index.html`, or
   - Right-click → Open with → Your preferred browser

### View on Local Server (Recommended)
For better performance and testing, use a local server:

**Using Python:**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

Then open your browser and go to `http://localhost:8000`

## 🎨 Customization

### Colors
Edit the color scheme in `styles.css` by modifying the CSS variables:

```css
:root {
    --primary-color: #2d5a6f;      /* Main color */
    --secondary-color: #4fa3a3;    /* Secondary color */
    --accent-color: #f4a460;       /* Accent/highlight color */
    --text-dark: #2c3e50;          /* Dark text */
    --text-light: #7f8c8d;         /* Light text */
}
```

### Content Updates

#### Update Contact Information
In `index.html`, find the contact section and update:
- Email: `moumitamoucob@gmail.com`
- Location: `Kolkata, India`
- Social links (GitHub, LinkedIn)

#### Add Hobbies Section
To add a hobbies/interests section, insert the following before the footer:

```html
<!-- Hobbies & Interests Section -->
<section id="hobbies" class="hobbies">
    <div class="container">
        <h2>Hobbies & Interests</h2>
        <div class="hobbies-grid">
            <div class="hobby-card">
                <h3>Technology Exploration</h3>
                <p>Exploring new tools and frameworks in data engineering and cloud technologies.</p>
            </div>
            <div class="hobby-card">
                <h3>Open Source Contribution</h3>
                <p>Contributing to open-source projects and sharing knowledge with the community.</p>
            </div>
            <div class="hobby-card">
                <h3>Reading & Learning</h3>
                <p>Stay updated with industry trends and best practices through technical blogs and courses.</p>
            </div>
            <div class="hobby-card">
                <h3>Travel</h3>
                <p>Exploring new places and experiencing different cultures.</p>
            </div>
        </div>
    </div>
</section>
```

Then add this CSS to `styles.css`:

```css
/* Hobbies Section */
.hobbies {
    padding: 80px 0;
    background-color: var(--bg-light);
}

.hobbies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.hobby-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: all 0.3s;
    border-bottom: 4px solid var(--secondary-color);
}

.hobby-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.hobby-card h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
}

.hobby-card p {
    color: var(--text-light);
    line-height: 1.6;
}
```

Also update the navigation to include hobbies:
```html
<li><a href="#hobbies">Hobbies</a></li>
```

#### Modify Experience
Update work details in the "Work Experience" section in `index.html`.

#### Update Skills
Edit the skill names, progress percentages, and tools in `styles.css`:
```css
.skill-progress {
    width: 85%;  /* Change this percentage */
}
```

#### Change Projects
Modify the project cards in the "Projects" section with your own project details.

### Add Your Photo
To add a profile photo, create an `assets` folder and update the HTML:

```html
<!-- Add to Hero or About section -->
<img src="assets/profile.jpg" alt="Profile Photo" class="profile-photo">
```

Then add CSS for the image:
```css
.profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--accent-color);
    margin-bottom: 20px;
}
```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Breakpoints:
- Large screens: 1200px+
- Medium screens: 768px - 1199px
- Small screens: 480px - 767px
- Extra small: Below 480px

## ✨ Features

- ✅ Smooth scrolling navigation
- ✅ Mobile-friendly hamburger menu
- ✅ Animated elements on scroll
- ✅ Professional gradient backgrounds
- ✅ Skill progress bars
- ✅ Contact form
- ✅ Responsive design
- ✅ Fast loading
- ✅ SEO-friendly structure
- ✅ Font Awesome icons integration

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Form Handling

The contact form currently shows a success message locally. For production deployment:

1. **Using Formspree:**
   Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using EmailJS:**
   Add the EmailJS script and configure with your credentials.

3. **Using Backend Service:**
   Set up a backend endpoint to handle form submissions.

## 🚀 Deployment

### Deploy to GitHub Pages
1. Create a GitHub repository named `yourusername.github.io`
2. Push all files to the repository
3. Website will be live at `https://yourusername.github.io`

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: (leave empty for static site)
3. Publish directory: `.` (root)
4. Deploy!

### Deploy to Vercel
1. Connect GitHub repository
2. Vercel auto-detects static site
3. Click deploy!

## 🎯 Next Steps & Enhancements

- [ ] Add profile photo
- [ ] Add hobbies/interests section
- [ ] Set up contact form backend
- [ ] Add blog/articles section
- [ ] Implement dark mode toggle
- [ ] Add PDF resume download
- [ ] Integrate with GitHub API to show repos
- [ ] Add testimonials section
- [ ] Implement analytics

## 📧 Contact & Updates

For any customization help or if you need to add new sections, update the corresponding HTML section in `index.html` and style it in `styles.css`.

---

**Happy Portfolio!** 🎉
