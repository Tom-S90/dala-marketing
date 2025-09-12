// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.mobile-menu') && 
        !event.target.closest('.mobile-menu-btn') &&
        mobileMenu.classList.contains('active')) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('active');
    }
});
}

// Portfolio animations
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
item.addEventListener('toggle', function() {
    if (this.open) {
    const content = this.querySelector('.portfolio-content');
    content.style.animation = 'fadeIn 0.5s ease forwards';
    }
});
});
});