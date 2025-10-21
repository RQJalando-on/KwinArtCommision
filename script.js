const SKILLS = [
    'Huawei GoPaint',
    'Ibis Paint',
    'Photoshop',
    'Stylized Portrait',
    'Animal Portrait Painting',
    'Digital Illustration',
    'Fan Art'
];

function populateSkills() {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;

    SKILLS.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-badge';
        span.textContent = skill;
        skillsList.appendChild(span);
    });
}


/**
 * Opens a modal 
 * @param {string} modalId 
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('visible');
        }, 10);
    }
}

/**
 * Closes a modal
 * @param {string} modalId 
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('visible');

        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); 
        
        const form = modal.querySelector('form');
        const messageDisplay = document.getElementById('contactMessage');
        const submitButton = document.getElementById('submitButton');

        if (form) form.reset();
        if (messageDisplay) messageDisplay.style.display = 'none';
        if (submitButton) submitButton.textContent = 'Send Message';
    }
}

window.addEventListener('click', (event) => {
    const contactModal = document.getElementById('contactModal');
    if (event.target === contactModal) {
        closeModal('contactModal');
    }
});



/**
 * Handles the contact form submission.
 * @param {Event} event 
 */
function handleContactSubmit(event) {
    event.preventDefault(); // Stop the default form submission

    const form = event.target;
    const submitButton = document.getElementById('submitButton');
    const contactMessage = document.getElementById('contactMessage');

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    contactMessage.style.display = 'none';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Simulating API call with data:', data);

    setTimeout(() => {
        contactMessage.textContent = 'Thank you! Your message has been sent successfully.';
        contactMessage.style.color = getCssVar('--primary-color'); // Using CSS variable
        contactMessage.style.display = 'block';
        form.reset();

        submitButton.textContent = 'Message Sent!';

        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }, 3000);

    }, 1500); 
}


function setYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}


function getCssVar(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}



function applyHover(event) {
    const btn = event.target;
    btn.style.backgroundColor = getCssVar('--text-light');
    btn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.4)';
    btn.style.transform = 'translateY(-1px)';
}

function removeHover(event) {
    const btn = event.target;
    btn.style.backgroundColor = getCssVar('--secondary-color'); 
    btn.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    btn.style.transform = 'none';
}


function setupButtonHovers() {
    const buttons = document.querySelectorAll('.btn-contact');
    
    buttons.forEach(button => {
        if (button.id === 'submitButton') return; 

        button.addEventListener('mouseover', applyHover);
        button.addEventListener('mouseout', removeHover);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    setYear();
    populateSkills();
    setupButtonHovers(); 
});
