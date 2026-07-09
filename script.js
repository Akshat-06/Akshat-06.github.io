// ==========================================
// PORTFOLIO MASTER SWITCH
// Change this to 'false' when you are ready to launch!
// ==========================================
const SHOW_WIP_PAGE = false;

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Toggle the views based on the Master Switch[cite: 3]
    const wipView = document.getElementById('wip-view');
    const mainView = document.getElementById('main-view');

    if (SHOW_WIP_PAGE) {
        if (wipView) wipView.style.display = 'block';
        if (mainView) mainView.style.display = 'none';
    } else {
        if (wipView) wipView.style.display = 'none';
        if (mainView) mainView.style.display = 'block';
    }

    // 2. Set current year in footer automatically[cite: 3]
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Smooth Scrolling for Navigation Links[cite: 3]
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. WIP Page: Typewriter Animation[cite: 3]
    const loadingText = document.getElementById('loading-text');
    if (loadingText) {
        const devPhrases = [
            // Programming
            "Compiling C# scripts...",
            "Calculating Rigidbody physics...",
            "Initializing modular architectures...",
            "Building WebGL assemblies...",
            "Updating AI blend trees...",
            "Resolving merge conflicts...",
            "Catching NullReferenceExceptions...",
            "Executing abstract classes...",
            "Connecting live server sockets...",
            "Optimizing garbage collection...",
            
            // Design & Mechanics
            "Baking HDRP global illumination...",
            "Tuning adaptive probe volumes...",
            "Adjusting piston timing intervals...",
            "Assembling modular obstacle courses...",
            "Simulating autonomous bot logic...",
            "Polishing UI canvas scaling...",
            "Rendering temporal anti-aliasing...",
            "Tweaking boxing glove hitboxes...",
            "Designing continuous shooting mechanics...",
            "Calibrating hardware sensor inputs...",
            
            // Engaging / Humorous
            "Searching for the missing semicolon...",
            "Blaming the physics engine...",
            "Converting caffeine into prefabs...",
            "Documenting an unexpected feature...",
            "Waiting for the editor to unfreeze...",
            "Wondering why it worked on the first try...",
            "Adding more juice to the mechanics...",
            "Staring intensely at the profiler...",
            "Deciphering my own code from 6 months ago...",
            "Loading the next level..."
        ];

        let currentPhrase = devPhrases[0];
        let charIndex = currentPhrase.length;
        let isDeleting = false;

        function typeEffect() {
            if (isDeleting) {
                loadingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                loadingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 30 : 80;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                let newPhrase;
                do {
                    newPhrase = devPhrases[Math.floor(Math.random() * devPhrases.length)];
                } while (newPhrase === currentPhrase);
                
                currentPhrase = newPhrase;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        const initialDelay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
        setTimeout(() => {
            isDeleting = true;
            typeEffect();
        }, initialDelay);
    }

    // 5. Dynamic Particle Background[cite: 3]
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height, particles;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5; 
                this.vy = (Math.random() - 0.5) * 1.5; 
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(76, 175, 80, 0.6)'; 
                ctx.fill();
            }
        }

        function initParticles() {
            resize();
            window.addEventListener('resize', resize);
            particles = [];
            const particleCount = window.innerWidth < 768 ? 40 : 80; 
            
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            animateParticles();
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        const opacity = 1 - (distance / 120);
                        ctx.strokeStyle = `rgba(76, 175, 80, ${opacity * 0.5})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
    }
});