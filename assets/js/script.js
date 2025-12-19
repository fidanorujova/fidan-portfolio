// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close menu on mobile
        document.querySelector('.nav-menu').classList.remove('open');
    });
});

// Add hover glow effect
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.textShadow = '0 0 20px var(--C-shadow)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.textShadow = '';
    });
});

// Menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}