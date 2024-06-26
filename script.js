// script.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const ctaButton = document.getElementById('cta-button');
    const closeButton = document.querySelector('.close-button');

    ctaButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
