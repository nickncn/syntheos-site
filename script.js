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
function alertComingSoon(event) {
  event.preventDefault();
  alert("Coming soon!");
}

const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("getInTouchModal");

openModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


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
function alertComingSoon(event) {
  event.preventDefault();
  alert("Coming soon!");
}

const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("getInTouchModal");

openModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


  // Dynamically Adjust Hero Height
    const adjustHeroHeight = () => {
        console.log("Adjusting hero height...");
        const hero = document.querySelector('.hero');
        const header = document.querySelector('.header');
        if (hero && header) {
            const headerHeight = header.offsetHeight;
            hero.style.height = `calc(100vh - ${headerHeight}px)`;
            console.log(`Hero height set to: calc(100vh - ${headerHeight}px)`);
        } else {
            console.log("Hero or header element not found.");
        }
    };

    // Adjust height on load and resize
    adjustHeroHeight();
    window.addEventListener('resize', adjustHeroHeight);
});

// Alert Coming Soon Function
function alertComingSoon(event) {
    event.preventDefault();
    alert("Coming soon!");
}

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle Functionality (Moved to the top for early execution)
    const faqQuestions = document.querySelectorAll('.faq-question');
    console.log('FAQ Questions Found:', faqQuestions);
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            console.log('Question Clicked:', question);
            const answer = question.nextElementSibling;
            console.log('Answer Element:', answer);
            if (answer) {
                const isVisible = answer.classList.contains('active');
                console.log('Is Visible:', isVisible);
                answer.classList.toggle('active', !isVisible);
                question.classList.toggle('active', !isVisible);
                console.log('Answer ClassList After Toggle:', answer.classList);
            } else {
                console.error('No answer element found for question:', question);
            }
        });
    });

    // Hamburger Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navBar = document.querySelector('.nav-bar');
    if (navToggle && navBar) {
        navToggle.addEventListener('click', () => {
            navBar.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!navBar.contains(e.target) && !navToggle.contains(e.target)) {
                navBar.classList.remove('active');
            }
        });
    }

    // Get in Touch Modal Functionality
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

    // Node Modal (Yield Map)
    const nodes = document.querySelectorAll('.web-map-node');
    const nodeModal = document.getElementById('nodeModal');
    const nodeModalContent = document.getElementById('nodeModalContent');
    const container = document.querySelector('.web-map');
    if (nodes && nodeModal && nodeModalContent && container) {
        nodes.forEach(node => {
            node.addEventListener('click', e => {
                e.stopPropagation();
                const nB = node.getBoundingClientRect();
                const cB = container.getBoundingClientRect();
                nodeModal.style.left = `${nB.left - cB.left + nB.width/2 - 110}px`;
                nodeModal.style.top = `${nB.top - cB.top + nB.height + 8}px`;
                nodeModalContent.textContent = node.dataset.description || 'No description available';
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
    }

    // Load Tally Embeds
    if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
    } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
            iframe.src = iframe.dataset.tallySrc;
        });
    }

    // Intersection Observer for Scroll-Triggered Animations
    const sections = document.querySelectorAll('.section, .about-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Dynamically Adjust Hero Height
    const adjustHeroHeight = () => {
        console.log("Adjusting hero height...");
        const hero = document.querySelector('.hero');
        const header = document.querySelector('.header');
        if (hero && header) {
            const headerHeight = header.offsetHeight;
            hero.style.height = `calc(100vh - ${headerHeight}px)`;
            console.log(`Hero height set to: calc(100vh - ${headerHeight}px)`);
        } else {
            console.log("Hero or header element not found.");
        }
    };
    adjustHeroHeight();
    window.addEventListener('resize', adjustHeroHeight);
});

// Alert Coming Soon Function
function alertComingSoon(event) {
    event.preventDefault();
    alert("Coming soon!");
}
