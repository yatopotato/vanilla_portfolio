// Hamburger Menu
const hamIcon = document.querySelector('.ham-icon');
const closeIcon = document.querySelector('.close-icon');

hamIcon.addEventListener('click', e => {
    hamIcon.classList.remove('active-icon');
    closeIcon.classList.add('active-icon');
});

closeIcon.addEventListener('click', e => {
    closeIcon.classList.remove('active-icon');
    hamIcon.classList.add('active-icon');
});

// Modal
const projectBtn = document.querySelector('.project-opener');
const contactBtn = document.querySelector('.contact-opener');
const pModal = document.querySelector('.project-modal');
const cModal = document.querySelector('.contact-modal');
const pCloseBtn = document.querySelector('.psvg-btn');
const cCloseBtn = document.querySelector('.csvg-btn');

// Open Modal
projectBtn.addEventListener('click', e => {
    pModal.classList.add('open-modal');
});

contactBtn.addEventListener('click', e => {
    cModal.classList.add('open-modal');
});

// Close Modal
pCloseBtn.addEventListener('click', e => {
    pModal.classList.remove('open-modal');
});

cCloseBtn.addEventListener('click', e => {
    cModal.classList.remove('open-modal');
});
