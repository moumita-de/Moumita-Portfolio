// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== FADE-IN ON SCROLL =====
const fadeElements = document.querySelectorAll(
    '.discover-card, .exp-card, .skill-row, .tool-card, .project-card, .award-item, .cert-card, .pub-card, .hobby-card, .contact-card'
);

fadeElements.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

fadeElements.forEach(el => fadeObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width + '%';
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

skillFills.forEach(el => skillObserver.observe(el));

// ===== CONTACT FORM =====
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[placeholder="Your Name"]').value;
    const email = form.querySelector('input[placeholder="Your Email"]').value;
    const message = form.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    alert('Thank you ' + name + '! Your message has been received.');
    form.reset();
}

// ===== ADMIN PHOTO UPLOAD (Secret: Ctrl+Shift+P) =====
let pendingPhotoData = null;

// Load saved photo from localStorage on page load
(function loadSavedPhoto() {
    var saved = localStorage.getItem('profilePhoto');
    if (saved) {
        var img = document.getElementById('profile-photo');
        if (img) img.src = saved;
    }
})();

// Secret key combo to open admin panel
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyP') {
        e.preventDefault();
        openAdmin();
    }
});

function openAdmin() {
    document.getElementById('admin-panel').style.display = 'block';
    document.getElementById('admin-preview').innerHTML = '';
    document.getElementById('photo-input').value = '';
    pendingPhotoData = null;

    document.getElementById('photo-input').addEventListener('change', function(e) {
        var file = e.target.files[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            alert('File too large. Please choose an image under 5MB.');
            return;
        }
        var reader = new FileReader();
        reader.onload = function(ev) {
            pendingPhotoData = ev.target.result;
            document.getElementById('admin-preview').innerHTML =
                '<img src="' + ev.target.result + '" alt="Preview">';
        };
        reader.readAsDataURL(file);
    });
}

function closeAdmin() {
    document.getElementById('admin-panel').style.display = 'none';
    pendingPhotoData = null;
}

function savePhoto() {
    if (!pendingPhotoData) {
        alert('Please select a photo first.');
        return;
    }
    try {
        localStorage.setItem('profilePhoto', pendingPhotoData);
    } catch (e) {
        alert('Photo is too large to store. Try a smaller image.');
        return;
    }
    document.getElementById('profile-photo').src = pendingPhotoData;
    closeAdmin();
    alert('Photo updated successfully!');
}

function clearPhoto() {
    localStorage.removeItem('profilePhoto');
    document.getElementById('profile-photo').src = 'assets/Profile_image.jpg';
    closeAdmin();
    alert('Photo reset to default.');
}
