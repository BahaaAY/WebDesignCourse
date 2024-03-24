document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector('.hero');
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);

    const moveTrail = () => {
        const heroRect = hero.getBoundingClientRect();
        trail.style.top = `${heroRect.top}px`; // Set trail's top position to match hero's top position
        trail.style.left = `${heroRect.left + (heroRect.width / 2)}px`; // Set trail's left position to match hero's center
    };

    moveTrail(); // Initialize trail position

    // Update trail position continuously
    setInterval(moveTrail, 100);
});
