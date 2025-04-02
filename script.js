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
