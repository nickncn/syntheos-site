document.addEventListener('DOMContentLoaded', () => {
    // Dynamically create stars for all stars-background elements
            
  const nodes = document.querySelectorAll('.web-map-node');
  const container = document.querySelector('.web-map');

  nodes.forEach(node => {
    let x = Math.random() * (container.offsetWidth - 100);
    let y = Math.random() * (container.offsetHeight - 100);
    let dx = (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2);
    let dy = (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2);

    node.style.position = 'absolute';
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;

    function move() {
      x += dx;
      y += dy;

      if (x <= 0 || x >= container.offsetWidth - node.offsetWidth) {
        dx *= -1;
      }
      if (y <= 0 || y >= container.offsetHeight - node.offsetHeight) {
        dy *= -1;
      }

      node.style.left = `${x}px`;
      node.style.top = `${y}px`;

      requestAnimationFrame(move);
    }

    move();
  });
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

    // Intersection Observer for scroll-triggered animations
    const sections = document.querySelectorAll('.section, .about-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of section is visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                sectionObserver.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
