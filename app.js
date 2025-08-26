  const mobileToggle = document.getElementById('mobileToggle');
        const mobileNav = document.getElementById('mobileNav');
        const closeNav = document.getElementById('closeNav');

        function openMobileNav() {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileNav() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        mobileToggle.addEventListener('click', openMobileNav);
        closeNav.addEventListener('click', closeMobileNav);

        // Close mobile nav when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileNav.classList.contains('active') && 
                !mobileNav.contains(e.target) && 
                !mobileToggle.contains(e.target)) {
                closeMobileNav();
            }
        });

        // Typewriter effect
        const texts = ["frontend development", "UI/UX design", "software solutions", "database management"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;
        let erasingDelay = 50;
        let newTextDelay = 2000;

        function type() {
            const currentText = texts[textIndex];
            const typewriterElement = document.getElementById("typing-text");
            
            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = erasingDelay;
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingDelay = newTextDelay;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingDelay = 500;
            }
            
            setTimeout(type, typingDelay);
        }

        // Scroll animation
        function checkScroll() {
            const elements = document.querySelectorAll('.animate');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('visible');
                }
            });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Start typewriter effect
            setTimeout(type, 1000);
            
            // Initial check for elements in view
            checkScroll();
            
            // Check on scroll
            window.addEventListener('scroll', checkScroll);
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });