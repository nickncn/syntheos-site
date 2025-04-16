document.addEventListener('DOMContentLoaded', () => {
    // Dynamically create stars for all stars-background elements
    const starsContainers = document.querySelectorAll('.stars-background');
    starsContainers.forEach(container => {
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(star);
        }
    });

    // Add scroll animation for sections
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Fallback scroll listener
    window.addEventListener('scroll', () => {
        const triggerPoint = window.innerHeight * 0.9;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerPoint && !section.classList.contains('visible')) {
                section.classList.add('visible');
            }
        });
    });
});
