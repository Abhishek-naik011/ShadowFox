// Mumbai Indians Website JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializePoll();
    initializeContactForm();
    initializeStatsCounter();
    initializeScrollSpy();
});

// Navigation Functions
function initializeNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Height of fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll Effects
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        // Navbar scroll effect
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll to top button
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top functionality
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Scroll Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll(
        '.player-card, .news-card, .stat-card, .info-item, .poll-section, .social-section'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Stats Counter Animation
function initializeStatsCounter() {
    const statsSection = document.querySelector('#stats');
    let statsAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    if (target) {
                        animateCounter(stat, target);
                    }
                });
                statsAnimated = true;
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// Poll Functionality
function initializePoll() {
    const voteButton = document.getElementById('voteButton');
    const voteMessage = document.getElementById('voteMessage');
    const pollOptions = document.querySelectorAll('input[name="player"]');
    
    // Load poll data from localStorage or initialize
    let pollData = JSON.parse(localStorage.getItem('miPollData')) || {
        'Rohit Sharma': 0,
        'Jasprit Bumrah': 0,
        'Hardik Pandya': 0,
        'Suryakumar Yadav': 0
    };

    // Check if user has already voted
    const hasVoted = localStorage.getItem('miHasVoted');
    
    if (hasVoted) {
        voteButton.disabled = true;
        voteButton.textContent = 'Already Voted';
        voteMessage.textContent = 'Thank you for voting!';
        updatePollDisplay(pollData);
    }

    // Vote button click handler
    if (voteButton) {
        voteButton.addEventListener('click', () => {
            const selectedOption = document.querySelector('input[name="player"]:checked');
            
            if (!selectedOption) {
                voteMessage.textContent = 'Please select a player!';
                voteMessage.style.color = '#e74c3c';
                return;
            }

            if (hasVoted) {
                voteMessage.textContent = 'You have already voted!';
                voteMessage.style.color = '#e74c3c';
                return;
            }

            // Increment vote count
            const playerName = selectedOption.value;
            pollData[playerName]++;

            // Save to localStorage
            localStorage.setItem('miPollData', JSON.stringify(pollData));
            localStorage.setItem('miHasVoted', 'true');

            // Update display
            updatePollDisplay(pollData);
            
            // Disable voting
            voteButton.disabled = true;
            voteButton.textContent = 'Voted Successfully!';
            voteMessage.textContent = `Thank you for voting for ${playerName}!`;
            voteMessage.style.color = '#FFD700';

            // Animate the selected option
            const selectedPollOption = selectedOption.closest('.poll-option');
            selectedPollOption.style.background = 'rgba(255, 215, 0, 0.1)';
            selectedPollOption.style.borderRadius = '8px';
            selectedPollOption.style.padding = '10px';
            selectedPollOption.style.transition = 'all 0.3s ease';
        });
    }

    // Update poll results on page load
    updatePollDisplay(pollData);
}

function updatePollDisplay(pollData) {
    const totalVotes = Object.values(pollData).reduce((a, b) => a + b, 0);

    Object.keys(pollData).forEach((player, index) => {
        const percentage = totalVotes > 0 ? Math.round((pollData[player] / totalVotes) * 100) : 0;
        const percentageElement = document.getElementById(`poll${index + 1}`);
        const fillElement = document.getElementById(`fill${index + 1}`);

        if (percentageElement) {
            percentageElement.textContent = `${percentage}%`;
        }
        if (fillElement) {
            setTimeout(() => {
                fillElement.style.width = `${percentage}%`;
            }, 100 * index);
        }
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = '#e74c3c';
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = '#e74c3c';
                return;
            }

            // Simulate form submission
            formMessage.textContent = 'Sending message...';
            formMessage.style.color = '#045093';

            setTimeout(() => {
                formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                formMessage.style.color = '#27ae60';
                contactForm.reset();

                // Clear success message after 5 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
            }, 1500);
        });
    }
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Scroll Spy Feature - Enhanced with Intersection Observer
function initializeScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Create a map of section IDs to nav links
    const navLinkMap = new Map();
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const sectionId = href.substring(1);
            navLinkMap.set(sectionId, link);
        }
    });

    // Intersection Observer options for precise detection
    const observerOptions = {
        root: null,
        rootMargin: '-15% 0px -65% 0px', // Detect when section is near top of viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    // Track active sections
    const activeSections = new Set();

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            
            if (entry.isIntersecting) {
                activeSections.add(sectionId);
            } else {
                activeSections.delete(sectionId);
            }
        });

        // Highlight the topmost active section
        if (activeSections.size > 0) {
            const firstActiveSection = Array.from(activeSections)[0];
            updateActiveNavLink(firstActiveSection, navLinks, navLinkMap);
        }
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Enhanced scroll event for smooth transitions
    let scrollTimeout;
    let lastScrollPosition = 0;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        
        const currentScrollPosition = window.pageYOffset;
        const isScrollingDown = currentScrollPosition > lastScrollPosition;
        lastScrollPosition = currentScrollPosition;

        scrollTimeout = setTimeout(() => {
            detectActiveSection(sections, navLinks, navLinkMap, isScrollingDown);
        }, 50);
    }, { passive: true });

    // Set initial active state on page load
    setTimeout(() => {
        detectActiveSection(sections, navLinks, navLinkMap, true);
    }, 200);
}

// Update active navigation link with smooth transition
function updateActiveNavLink(sectionId, navLinks, navLinkMap) {
    // Remove active class from all links with smooth transition
    navLinks.forEach(link => {
        if (link.classList.contains('active')) {
            link.style.transition = 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)';
        }
        link.classList.remove('active');
    });
    
    // Add active class to current link
    const activeLink = navLinkMap.get(sectionId);
    if (activeLink) {
        activeLink.style.transition = 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)';
        activeLink.classList.add('active');
    }
}

// Detect active section based on scroll position
function detectActiveSection(sections, navLinks, navLinkMap, isScrollingDown) {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Handle bottom of page
    if (scrollPosition + windowHeight >= documentHeight - 10) {
        const lastSection = Array.from(sections).pop();
        if (lastSection) {
            updateActiveNavLink(lastSection.getAttribute('id'), navLinks, navLinkMap);
        }
        return;
    }

    // Handle top of page (hero section)
    if (scrollPosition < 150) {
        updateActiveNavLink('home', navLinks, navLinkMap);
        return;
    }

    // Find current section
    let currentSection = '';
    const offset = 200; // Navbar height + buffer

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Check if section is in view
        if (scrollPosition >= sectionTop - offset && scrollPosition < sectionBottom - offset) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update active link if section changed
    if (currentSection) {
        updateActiveNavLink(currentSection, navLinks, navLinkMap);
    }
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Easter egg: Console message for fans
console.log('%c🏏 Mumbai Indians 🏏', 'color: #045093; font-size: 24px; font-weight: bold;');
console.log('%cDuniya Hila Denge Hum!', 'color: #FFD700; font-size: 18px; font-weight: bold;');
console.log('%c5-Time IPL Champions', 'color: #045093; font-size: 14px;');
console.log('%cBuilt with ❤️ for MI Paltan', 'color: #666; font-size: 12px;');
