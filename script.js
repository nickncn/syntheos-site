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

    // Get in Touch Modal Functionality
    const getInTouchBtn = document.querySelector('.get-in-touch-btn');
    const modal = document.querySelector('#getInTouchModal');
    const closeModalBtn = document.querySelector('#closeModal');

    if (getInTouchBtn && modal && closeModalBtn) {
        getInTouchBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Load Tally embeds with error handling
    if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
    } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
            iframe.src = iframe.dataset.tallySrc;
        });
    }

    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
            question.classList.toggle('active', !isVisible);
        });
    });
});
