// Initialize Lucide Icons
lucide.createIcons();

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Navigation and Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            document.getElementById('menu-icon').setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }

        // Scroll to section with smooth behavior
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Add slight delay to update nav links
        setTimeout(() => {
            updateActiveNavLink(sectionId);
        }, 100);
    }
}

// Update active navigation link
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const target = link.getAttribute('data-target');
        if (target === activeId) {
            link.classList.remove('text-stone-600');
            link.classList.add('text-orange-600', 'font-semibold');
        } else {
            link.classList.remove('text-orange-600', 'font-semibold');
            link.classList.add('text-stone-600');
        }
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.setAttribute('data-lucide', 'menu');
        } else {
            menuIcon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons();
    });
}

// Close mobile menu when clicking on a nav link
const mobileNavLinks = document.querySelectorAll('#mobile-menu button');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Scroll Spy - Update nav link highlighting on scroll
window.addEventListener('scroll', () => {
    const sections = ['home', 'projects', 'resume', 'contact'];
    let currentSection = 'home';

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            // Check if section is in viewport
            if (rect.top <= 150 && rect.bottom > 150) {
                currentSection = sectionId;
            }
        }
    });

    updateActiveNavLink(currentSection);
});

// Read More Bio Toggle
const readMoreBtn = document.getElementById('read-more-btn');
const bioContainer = document.getElementById('bio-container');

if (readMoreBtn && bioContainer) {
    readMoreBtn.addEventListener('click', () => {
        const isExpanded = bioContainer.classList.contains('max-h-96');
        
        if (isExpanded) {
            bioContainer.classList.remove('max-h-96', 'opacity-100');
            bioContainer.classList.add('max-h-0', 'opacity-0');
            readMoreBtn.innerHTML = 'Read full bio <i data-lucide="chevron-down" class="w-4 h-4"></i>';
        } else {
            bioContainer.classList.remove('max-h-0', 'opacity-0');
            bioContainer.classList.add('max-h-96', 'opacity-100');
            readMoreBtn.innerHTML = 'Read less <i data-lucide="chevron-up" class="w-4 h-4"></i>';
        }
        
        lucide.createIcons();
    });
}

// View All Projects Toggle
const viewAllToggle = document.getElementById('view-all-toggle');
const allProjects = document.getElementById('all-projects');
const toggleIcon = document.getElementById('toggle-icon');

if (viewAllToggle && allProjects) {
    viewAllToggle.addEventListener('click', () => {
        const isHidden = allProjects.classList.contains('hidden');
        
        if (isHidden) {
            allProjects.classList.remove('hidden');
            viewAllToggle.innerHTML = 'Hide Projects <i data-lucide="chevron-up" class="w-4 h-4" id="toggle-icon"></i>';
        } else {
            allProjects.classList.add('hidden');
            viewAllToggle.innerHTML = 'View All Projects <i data-lucide="chevron-down" class="w-4 h-4" id="toggle-icon"></i>';
        }
        
        lucide.createIcons();
    });
}

// Contact Button CTA
const letsTalkButtons = document.querySelectorAll('button:contains("Let\'s Talk"), button:contains("Contact Me")');
document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.includes("Let's Talk")) {
        btn.addEventListener('click', () => {
            scrollToSection('contact');
        });
    }
});

// Smooth page load animation
window.addEventListener('load', () => {
    // Animate elements on page load
    const animatedElements = document.querySelectorAll('.animate-fade-in-up');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Handle responsive behavior for projects section
document.querySelectorAll('.group').forEach(projectCard => {
    projectCard.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            // For mobile, show a simpler interaction
            this.classList.toggle('bg-stone-50');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md', 'bg-stone-50/95');
    } else {
        navbar.classList.remove('shadow-md', 'bg-stone-50/95');
    }
});
