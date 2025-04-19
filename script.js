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
     const sectionObserverOptions = {
         root: null,
         rootMargin: '0px',
         threshold: 0.1 // Trigger when 10% of section is visible
     };
 
     const sectionObserver = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add('visible');
             }
         });
     }, sectionObserverOptions);
 
     sections.forEach(section => {
         sectionObserver.observe(section);
     });
 
     // Add scroll-triggered fade-in for elements in the yield section
     const yieldSection = document.querySelector('.yield');
     const fadeInElements = yieldSection.querySelectorAll('.fade-in');
     const fadeInObserverOptions = {
         root: null,
         rootMargin: '0px',
         threshold: 0.1 // Trigger when 10% of element is visible
     };
 
     const fadeInObserver = new IntersectionObserver((entries, observer) => {
         entries.forEach((entry, index) => {
             if (entry.isIntersecting) {
                 // Add visible class with staggered delay
                 setTimeout(() => {
                     entry.target.classList.add('visible');
                 }, index * 200); // 200ms delay per element (0s, 0.2s, 0.4s, etc.)
                 observer.unobserve(entry.target); // Stop observing after animation
             }
         });
     }, fadeInObserverOptions);
 
     fadeInElements.forEach(element => {
         fadeInObserver.observe(element);
     });
 });
