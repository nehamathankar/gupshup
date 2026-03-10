// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.menu-card, .offer-card, .gallery-item, .review-card, .platform-card, .feature-card'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add visible class styles dynamically
const style = document.createElement('style');
style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ==========================================
// SCROLL TO TOP FUNCTIONALITY
// ==========================================
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Any additional scroll-based functionality can be added here
    }, 100);
});

// ==========================================
// ACTIVE NAV LINK HIGHLIGHT
// ==========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--accent-color)';
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==========================================
// GALLERY IMAGE INTERACTION (Optional)
// ==========================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Optional: Add lightbox functionality here
        console.log('Gallery item clicked');
    });
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%cWelcome to Gupshup! 🍽️', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cGood Food, Better Company', 'color: #1E4D4E; font-size: 16px;');

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================
window.addEventListener('load', () => {
    // Ensure all animations are ready
    document.body.classList.add('loaded');
    
    // Initial highlight of nav link
    highlightNavLink();
});

