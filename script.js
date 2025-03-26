// Step 3: Add basic interactivity

// Function to toggle the navigation menu's visibility
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('visible');
}

document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);

// Implement smooth scrolling behavior for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Step 4: Add interactivity to portfolio sections

// Filter feature for the "Projects" section
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Lightbox effect for project images
function openLightbox(imageSrc) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox img');
    lightboxImage.src = imageSrc;
    lightbox.classList.add('visible');
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('visible');
}

document.querySelectorAll('.project img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});

document.querySelector('.lightbox').addEventListener('click', closeLightbox);

// Step 5: Add form validation

// Form validation for the "Contact" form
document.querySelector('#contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    let isValid = true;

    if (!name) {
        isValid = false;
        document.querySelector('#name-error').textContent = 'Name is required.';
    } else {
        document.querySelector('#name-error').textContent = '';
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        document.querySelector('#email-error').textContent = 'Valid email is required.';
    } else {
        document.querySelector('#email-error').textContent = '';
    }

    if (!message) {
        isValid = false;
        document.querySelector('#message-error').textContent = 'Message is required.';
    } else {
        document.querySelector('#message-error').textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});