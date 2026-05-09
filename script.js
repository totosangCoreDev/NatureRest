// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Reveal Animation on Scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
// Trigger once on load
window.addEventListener('load', reveal);

// Simple Cart Interaction (Placeholder for feedback)
const buyButtons = document.querySelectorAll('.product-info .btn');
buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const productName = btn.parentElement.querySelector('h3').innerText;
        alert(`ขอบคุณที่สนใจ ${productName}! ระบบกำลังนำคุณไปยังหน้าชำระเงิน... (จำลอง)`);
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
