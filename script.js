document.addEventListener('DOMContentLoaded', () => {
    const getInTouchBtn = document.querySelector('.get-in-touch-btn');
    const getInTouchModal = document.getElementById('getInTouchModal');
    const closeModalBtn = document.getElementById('closeModal');

    if (getInTouchBtn && getInTouchModal && closeModalBtn) {
        getInTouchBtn.addEventListener('click', () => {
            getInTouchModal.style.display = 'flex';
        });

        closeModalBtn.addEventListener('click', () => {
            getInTouchModal.style.display = 'none';
        });

        getInTouchModal.addEventListener('click', (e) => {
            if (e.target === getInTouchModal) {
                getInTouchModal.style.display = 'none';
            }
        });
    }

    // Node modal (nodeModal and nodeModalContent)
    const nodes = document.querySelectorAll('.web-map-node');
    const nodeModal = document.getElementById('nodeModal');
    const nodeModalContent = document.getElementById('nodeModalContent');
    const container = document.querySelector('.web-map');

    nodes.forEach(node => {
        node.addEventListener('click', e => {
            e.stopPropagation();
            const nB = node.getBoundingClientRect();
            const cB = container.getBoundingClientRect();
            nodeModal.style.left = `${nB.left - cB.left + nB.width/2 - 110}px`;
            nodeModal.style.top  = `${nB.top - cB.top + nB.height + 8}px`;
            nodeModalContent.textContent = node.dataset.description;
            nodeModal.style.display = 'block';
            nodeModal.classList.add('show');
        });
    });

    document.addEventListener('click', () => {
        nodeModal.classList.remove('show');
    });

    nodeModal.addEventListener('transitionend', () => {
        if (!nodeModal.classList.contains('show')) {
            nodeModal.style.display = 'none';
        }
    });
});

    // Get in Touch Modal Functionality
  // …
const getInTouchBtn   = document.querySelector('.get-in-touch-btn');
const touchModal      = document.querySelector('#getInTouchModal');
const closeTouchModal = document.querySelector('#closeModal');

if (getInTouchBtn && touchModal && closeTouchModal) {
  getInTouchBtn.addEventListener('click', () => {
    touchModal.style.display = 'flex';
  });
  closeTouchModal.addEventListener('click', () => {
    touchModal.style.display = 'none';
  });
  touchModal.addEventListener('click', (e) => {
    if (e.target === touchModal) {
      touchModal.style.display = 'none';
    }
  });
}
// …


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
