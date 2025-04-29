document.addEventListener('DOMContentLoaded', () => {
    // Dynamically create stars for all stars-background elements
            
 // 2) Node-click modal logic
  const nodes = document.querySelectorAll('.web-map-node');
  const modal = document.getElementById('nodeModal');
  const modalContent = document.getElementById('nodeModalContent');
  const container = document.querySelector('.web-map');
  nodes.forEach(node => {
    node.addEventListener('click', e => {
      e.stopPropagation();
      const nB = node.getBoundingClientRect();
      const cB = container.getBoundingClientRect();
      modal.style.left = `${nB.left - cB.left + nB.width/2 - 110}px`;
      modal.style.top  = `${nB.top - cB.top  + nB.height + 8}px`;
      modalContent.textContent = node.dataset.description;
      modal.classList.add('show');
    });
  });

  // Close on outside click
  document.addEventListener('click', () => {
    modal.classList.remove('show');
  });
  modal.addEventListener('transitionend', () => {
    if (!modal.classList.contains('show')) {
      modal.style.display = 'none';
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
