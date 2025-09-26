// Function to handle active navigation link highlighting on scroll
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const menuToggle = document.getElementById('menu-toggle');

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
}, { threshold: 0.3 }); // Highlight when 30% of the section is visible

sections.forEach(section => {
    observer.observe(section);
});

// Function for smooth scrolling when a navigation link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });

            // Close the mobile menu if it's open after clicking a link
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
        }
    });
});

// Function to handle the "View All / Show Less" projects button toggle
document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.getElementById('viewAllProjectsBtn');
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsSection = document.getElementById('projects'); // Get the projects section element

    // Show the button only if there are more than 3 projects
    if (projectsGrid && projectsGrid.children.length > 3) {
        viewAllBtn.style.display = 'inline-block';
        viewAllBtn.textContent = 'View All Projects'; // Set initial text
    } else if (viewAllBtn) {
        viewAllBtn.style.display = 'none';
    }
    
    if (viewAllBtn && projectsGrid) {
        viewAllBtn.addEventListener('click', function() {
            // Toggle the 'expanded' class on the grid
            projectsGrid.classList.toggle('expanded');

            // Check if the grid is now expanded and update the button text accordingly
            if (projectsGrid.classList.contains('expanded')) {
                this.textContent = 'Show Less';
            } else {
                this.textContent = 'View All Projects';
                // Optional: Scroll back to the top of the projects section for better user experience
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }
});