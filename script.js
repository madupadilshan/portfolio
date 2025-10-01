document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const menuToggle = document.getElementById('menu-toggle');
    const header = document.querySelector('header');

    // Function to close mobile menu
    const closeMenu = () => {
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    };

    // Observer for highlighting active nav link on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: `-${header.offsetHeight}px 0px 0px 0px`,
        threshold: 0.3
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add click listener to all nav links for smooth scrolling and closing the menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smooth scroll to the element
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Close the mobile menu after clicking a link
                closeMenu();
            }
        });
    });

    // Function to handle the "View All / Show Less" projects button toggle
    const viewAllBtn = document.getElementById('viewAllProjectsBtn');
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsSection = document.getElementById('projects');

    if (projectsGrid && projectsGrid.children.length > 3) {
        viewAllBtn.style.display = 'inline-block';
        viewAllBtn.textContent = 'View All Projects';
    } else if (viewAllBtn) {
        viewAllBtn.style.display = 'none';
    }
    
    if (viewAllBtn && projectsGrid) {
        viewAllBtn.addEventListener('click', function() {
            projectsGrid.classList.toggle('expanded');

            if (projectsGrid.classList.contains('expanded')) {
                this.textContent = 'Show Less';
            } else {
                this.textContent = 'View All Projects';
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }
});