document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false, // Whether elements should animate out while scrolling past them
    });

    // --- Particle Loader Function ---
    const loadParticles = (theme) => {
        const isLight = theme === 'light-mode';
        const particleColor = isLight ? "#4b5563" : "#b74b4b";
        const linkColor = isLight ? "#6b7280" : "#ffffff";

        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    resize: true,
                },
                modes: {
                    repulse: { distance: 80, duration: 0.4 },
                },
            },
            particles: {
                color: { value: particleColor },
                links: {
                    color: linkColor,
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                collisions: { enable: true },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "bounce" },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: { enable: true, area: 800 },
                    value: 50,
                },
                opacity: { value: 0.3 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
        });
    };

    // --- Parallax Effect ---
    const homeSection = document.querySelector('.home');
    const homeImage = document.querySelector('.home-img img');
    if (homeSection && homeImage) {
        homeSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = homeSection;
            const xPos = (clientX / offsetWidth - 0.5) * 30;
            const yPos = (clientY / offsetHeight - 0.5) * 30;
            homeImage.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    }

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const applyTheme = (theme) => {
        if (theme === 'light-mode') {
            body.classList.add('light-mode');
            themeToggle.classList.replace('fa-moon', 'fa-sun');
        } else {
            body.classList.remove('light-mode');
            themeToggle.classList.replace('fa-sun', 'fa-moon');
        }
        loadParticles(theme);
    };

    let currentTheme = localStorage.getItem('theme') || 'dark-mode';
    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });

    // --- Back to Top Button ---
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Navigation & Scrolling ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const menuToggle = document.getElementById('menu-toggle');
    const header = document.querySelector('header');

    const closeMenu = () => {
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    };

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

    sections.forEach(section => observer.observe(section));

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
            }
        });
    });

    // --- Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const textArray = ["Full-Stack Developer", "Network Technologist", "Cloud & DevOps Enthusiast"];
        let textArrayIndex = 0;
        let charIndex = 0;

        const type = () => {
            if (charIndex < textArray[textArrayIndex].length) {
                typewriterElement.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 120);
            } else {
                setTimeout(erase, 2000);
            }
        }

        const erase = () => {
            if (charIndex > 0) {
                typewriterElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 80);
            } else {
                textArrayIndex = (textArrayIndex + 1) % textArray.length;
                setTimeout(type, 500);
            }
        }
        setTimeout(type, 500);
    }

    // --- "View All" Projects Button ---
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

    // ==================== ADMIN DASHBOARD FUNCTIONALITY ====================
    
    // Admin Configuration
    // ⚠️ SECURITY NOTE: This is CLIENT-SIDE only. Password can be viewed in browser DevTools.
    // For production, use proper backend authentication with server-side validation.
    
    // Password is stored as SHA-256 hash for basic obfuscation
    // To generate new hash: Open browser console and run: crypto.subtle.digest('SHA-256', new TextEncoder().encode('YourPassword')).then(h => console.log(Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('')))
    const ADMIN_PASSWORD_HASH = '5a689e32970395c2e3e5b05e8ea02047a34c62aef077f880dfe5037f2f066e46'; // Default: Madupa@2025
    
    const ADMIN_SESSION_KEY = 'adminLoggedIn';
    const CLICK_THRESHOLD = 5; // Footer logo එක click කරන වාර ගණන
    
    let clickCount = 0;
    let clickTimer = null;
    
    // Elements
    const adminModal = document.getElementById('adminModal');
    const adminDashboard = document.getElementById('adminDashboard');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminPassword = document.getElementById('adminPassword');
    const adminError = document.getElementById('adminError');
    const adminClose = document.querySelector('.admin-close');
    const logoutBtn = document.getElementById('logoutBtn');
    const footerLogo = document.querySelector('.footer-logo .logo');
    
    // Quick Action Buttons
    const clearMessagesBtn = document.getElementById('clearMessagesBtn');
    const clearAnalyticsBtn = document.getElementById('clearAnalyticsBtn');
    const downloadDataBtn = document.getElementById('downloadDataBtn');
    
    // Initialize Analytics
    initializeAnalytics();
    
    // Secret Entry Point - Footer Logo Multi-Click
    if (footerLogo) {
        footerLogo.addEventListener('click', (e) => {
            e.preventDefault();
            clickCount++;
            
            // Reset click counter after 2 seconds of inactivity
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 2000);
            
            // Show admin modal after threshold clicks
            if (clickCount >= CLICK_THRESHOLD) {
                clickCount = 0;
                showAdminModal();
            }
        });
    }
    
    // Close Modal
    if (adminClose) {
        adminClose.addEventListener('click', () => {
            hideAdminModal();
        });
    }
    
    // Close modal when clicking outside
    if (adminModal) {
        adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) {
                hideAdminModal();
            }
        });
    }
    
    // Admin Login
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const password = adminPassword.value.trim();
            
            // Hash the entered password
            const hashedPassword = await hashPassword(password);
            
            if (hashedPassword === ADMIN_PASSWORD_HASH) {
                // Successful login
                sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
                hideAdminModal();
                showDashboard();
                adminPassword.value = '';
                adminError.textContent = '';
            } else {
                // Failed login
                adminError.textContent = '❌ Incorrect password!';
                adminPassword.value = '';
                
                // Shake animation
                adminLoginForm.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    adminLoginForm.style.animation = '';
                }, 500);
            }
        });
    }
    
    // Password Hashing Function
    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    
    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem(ADMIN_SESSION_KEY);
            hideDashboard();
        });
    }
    
    // Check if already logged in
    if (sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true') {
        // Don't auto-show dashboard, wait for user action
    }
    
    // Quick Actions
    if (clearMessagesBtn) {
        clearMessagesBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all messages?')) {
                localStorage.removeItem('contactMessages');
                loadDashboardData();
                alert('✅ All messages cleared!');
            }
        });
    }
    
    if (clearAnalyticsBtn) {
        clearAnalyticsBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all analytics data?')) {
                localStorage.removeItem('visitorData');
                loadDashboardData();
                alert('✅ Analytics data cleared!');
            }
        });
    }
    
    if (downloadDataBtn) {
        downloadDataBtn.addEventListener('click', () => {
            downloadAllData();
        });
    }
    
    // Functions
    function showAdminModal() {
        if (adminModal) {
            adminModal.classList.add('active');
            adminPassword.focus();
        }
    }
    
    function hideAdminModal() {
        if (adminModal) {
            adminModal.classList.remove('active');
            adminError.textContent = '';
            adminPassword.value = '';
        }
    }
    
    function showDashboard() {
        if (adminDashboard) {
            adminDashboard.classList.add('active');
            document.body.style.overflow = 'hidden';
            loadDashboardData();
        }
    }
    
    function hideDashboard() {
        if (adminDashboard) {
            adminDashboard.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    
    function initializeAnalytics() {
        // Track visitor on page load
        trackVisitor();
        
        // Track contact form submissions
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                saveContactMessage({ name, email, subject, message });
                
                // Show success message
                alert('✅ Thank you! Your message has been sent.');
                contactForm.reset();
            });
        }
    }
    
    function trackVisitor() {
        const now = new Date();
        const today = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        
        let visitorData = JSON.parse(localStorage.getItem('visitorData')) || {
            total: 0,
            visits: []
        };
        
        visitorData.total++;
        visitorData.visits.push({
            date: today,
            time: time,
            pageViews: 1,
            duration: Math.floor(Math.random() * 300) + 60 // Random duration for demo
        });
        
        // Keep only last 50 visits
        if (visitorData.visits.length > 50) {
            visitorData.visits = visitorData.visits.slice(-50);
        }
        
        localStorage.setItem('visitorData', JSON.stringify(visitorData));
    }
    
    function saveContactMessage(data) {
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        messages.push({
            ...data,
            timestamp: new Date().toISOString(),
            read: false
        });
        
        localStorage.setItem('contactMessages', JSON.stringify(messages));
    }
    
    function loadDashboardData() {
        // Load visitor stats
        const visitorData = JSON.parse(localStorage.getItem('visitorData')) || { total: 0, visits: [] };
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        // Calculate today's visitors
        const today = new Date().toLocaleDateString();
        const todayVisitors = visitorData.visits.filter(v => v.date === today).length;
        
        // Get last visit time
        const lastVisit = visitorData.visits.length > 0 
            ? visitorData.visits[visitorData.visits.length - 1].time 
            : '-';
        
        // Update stats cards
        document.getElementById('totalVisitors').textContent = visitorData.total;
        document.getElementById('todayVisitors').textContent = todayVisitors;
        document.getElementById('totalMessages').textContent = messages.length;
        document.getElementById('lastVisit').textContent = lastVisit;
        
        // Load messages
        loadMessages(messages);
        
        // Load visitor table
        loadVisitorTable(visitorData.visits);
    }
    
    function loadMessages(messages) {
        const container = document.getElementById('messagesContainer');
        
        if (messages.length === 0) {
            container.innerHTML = '<p class="no-data">No messages yet</p>';
            return;
        }
        
        container.innerHTML = messages.slice(-10).reverse().map(msg => `
            <div class="message-item">
                <h4>${msg.name}</h4>
                <p><i class="fas fa-envelope"></i> ${msg.email}</p>
                <p><i class="fas fa-tag"></i> Subject: ${msg.subject || 'No subject'}</p>
                <p><i class="fas fa-clock"></i> ${new Date(msg.timestamp).toLocaleString()}</p>
                <p class="message-text">${msg.message}</p>
            </div>
        `).join('');
    }
    
    function loadVisitorTable(visits) {
        const tbody = document.getElementById('visitorsTable');
        
        if (visits.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="no-data">No visitor data yet</td></tr>';
            return;
        }
        
        tbody.innerHTML = visits.slice(-20).reverse().map(visit => `
            <tr>
                <td>${visit.date}</td>
                <td>${visit.time}</td>
                <td>${visit.pageViews}</td>
                <td>${visit.duration}s</td>
            </tr>
        `).join('');
    }
    
    function downloadAllData() {
        const visitorData = JSON.parse(localStorage.getItem('visitorData')) || {};
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        const data = {
            exportDate: new Date().toISOString(),
            visitors: visitorData,
            messages: messages
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('✅ Data downloaded successfully!');
    }
});

// Add shake animation to CSS (inline for now)
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);