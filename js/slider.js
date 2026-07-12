const cards = document.querySelectorAll('.slide-card');
let activeIndex = 2; // Center the middle card initially

function updateSlider() {
    const N = cards.length;
    cards.forEach((card, index) => {
        // Calculate the looped (infinite) offset
        let offset = ((index - activeIndex) % N + N) % N;
        if (offset > Math.floor(N / 2)) {
            offset -= N;
        }

        let absOffset = Math.abs(offset);
        let sign = Math.sign(offset);

        // Calculate position and scale for the 3D stack effect
        let scale = Math.max(0, 1 - absOffset * 0.1);
        let translateX = sign * absOffset * 90;

        card.style.transform = `translateX(${translateX}px) scale(${scale})`;
        card.style.zIndex = 100 - absOffset;

        // Determine the maximum number of visible cards per side
        let maxSideCards = 4; // 9 cards total (1 center + 4 per side)
        if (window.innerWidth <= 768) {
            maxSideCards = 2; // 5 cards total
        } else if (window.innerWidth <= 1200) {
            maxSideCards = 3; // 7 cards total
        }

        // Manage card visibility based on offset
        if (absOffset > maxSideCards) {
            card.style.opacity = 0;
            card.style.pointerEvents = 'none';
        } else {
            card.style.opacity = 1;
            card.style.pointerEvents = 'auto';
        }

        card.style.filter = absOffset === 0 ? 'brightness(1)' : `brightness(${1 - absOffset * 0.2})`;
    });
}
updateSlider();

window.addEventListener('resize', updateSlider);

// Handle card clicks to switch focus and control video playback
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        if (activeIndex === index) {
            // Click on the active card toggles play/pause
            const video = card.querySelector('video');
            if (video) {
                if (video.paused) {
                    video.play();
                    card.classList.add('playing');
                } else {
                    video.pause();
                    card.classList.remove('playing');
                }
            }
        } else {
            // Click on a different card updates focus
            cards.forEach(c => {
                c.classList.remove('playing');
                const v = c.querySelector('video');
                if (v) v.pause();
            });
            activeIndex = index;
            updateSlider();
        }
    });
});
