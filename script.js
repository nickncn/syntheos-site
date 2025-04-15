// Add scroll animation for sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
});

// Dynamically create stars for the stars-background
const starsContainer = document.querySelector('.stars-background');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
}
