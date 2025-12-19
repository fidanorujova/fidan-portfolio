// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close menu on mobile if it's a nav link
        if (this.closest('.nav-menu')) {
            document.querySelector('.nav-menu').classList.remove('open');
        }
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

/* ================================================
   Random Fact Generator for About Page
   ================================================
   Displays a random fact about Fidan when the button is clicked.
   Uses vanilla JavaScript for simplicity and performance.
*/
const factButton = document.getElementById('factButton');
const randomFactDisplay = document.getElementById('randomFact');

// Only initialize if elements exist (About page specific)
if (factButton && randomFactDisplay) {
    // Array of personal facts to display randomly
    const facts = [
        "When I feel down or unmotivated, I enjoy observing people — watching how they move and interact while walking on the streets.",
        "I absolutely love eating scrambled eggs with tomatoes while drinking sweet tea.",
        "My favorite singers are Adele and Sezen Aksu."
    ];

    // Event listener for button click
    factButton.addEventListener('click', () => {
        // Generate random index from 0 to facts.length - 1
        const randomIndex = Math.floor(Math.random() * facts.length);
        
        // Display the randomly selected fact
        randomFactDisplay.textContent = facts[randomIndex];
        
        // Add 'show' class to trigger fade-in animation
        randomFactDisplay.classList.add('show');
    });
}