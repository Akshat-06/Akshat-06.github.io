// Wait for the DOM to fully load before attaching events
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Set current year in footer automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // // 3. Form Connectivity Placeholder
    // // Intercepts the form submission so you can send data to an API/backend later
    // const contactForm = document.getElementById('contact-form');
    
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault(); // Prevent page reload
            
    //         // Gather the data from the form fields
    //         const formData = {
    //             name: document.getElementById('name').value,
    //             email: document.getElementById('email').value,
    //             message: document.getElementById('message').value
    //         };

    //         console.log("Form Data Ready to Send:", formData);
            
    //         // TODO: Here is where you will add your fetch() request later 
    //         // to connect to a backend service (like Formspree, Netlify Forms, or your own API)
            
    //         // Provide user feedback
    //         alert(`Thanks for reaching out, ${formData.name}! (This is a placeholder - form submission not yet connected to a backend)`);
            
    //         // Clear the form
    //         contactForm.reset();
    //     });
    // }

    document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current year in footer automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Set current year in footer automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scrolling for Navigation Links
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

    // 3. WIP Page: Typewriter Animation
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
        let charIndex = currentPhrase.length; // Start with the first phrase fully typed
        let isDeleting = false;

        function typeEffect() {
            if (isDeleting) {
                // Backspace a character
                loadingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Type a character
                loadingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            // Set typing speeds (backspacing is faster)
            let typeSpeed = isDeleting ? 30 : 80;

            // If the phrase is fully typed out
            if (!isDeleting && charIndex === currentPhrase.length) {
                // Pause for a random time between 3 and 5 seconds before deleting
                typeSpeed = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
                isDeleting = true;
            } 
            // If the phrase is fully deleted
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                
                // Pick a new random phrase that isn't the same as the last one
                let newPhrase;
                do {
                    newPhrase = devPhrases[Math.floor(Math.random() * devPhrases.length)];
                } while (newPhrase === currentPhrase);
                
                currentPhrase = newPhrase;
                
                // Short pause before starting to type the new word
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        // Wait a random 3-5 seconds before triggering the first backspace sequence
        const initialDelay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
        setTimeout(() => {
            isDeleting = true;
            typeEffect();
        }, initialDelay);
    }
});

// ==========================================
// PORTFOLIO MASTER SWITCH
// Change this to 'false' when you are ready to launch!
// ==========================================
const SHOW_WIP_PAGE = false;

document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle the views based on the Master Switch
    const wipView = document.getElementById('wip-view');
    const mainView = document.getElementById('main-view');

    if (SHOW_WIP_PAGE) {
        if (wipView) wipView.style.display = 'block';
        if (mainView) mainView.style.display = 'none';
    } else {
        if (wipView) wipView.style.display = 'none';
        if (mainView) mainView.style.display = 'block';
    }

    // ... [KEEP THE REST OF YOUR JS HERE: Year footer, Smooth Scroll, Typewriter effect] ...
});