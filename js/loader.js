// --- PRELOADER LOGIC ---
const startTime = Date.now();
const minLoadingTime = 3000;

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.style.overflow = ''; // Unlock scroll by removing inline style
        }, 1000); // Matches the 1s CSS transition duration
    }, remainingTime);
});
