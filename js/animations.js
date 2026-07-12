gsap.registerPlugin(ScrollTrigger);

// Logo scroll to top
document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 1. Initial state for secondary devices (hidden, scaled down, shifted)
gsap.set("#device-about", { opacity: 0, scale: 0.8, yPercent: 20 });
gsap.set("#device-mac", { opacity: 0, scale: 0.8, yPercent: 20 });
gsap.set("#device-portfolio", { opacity: 0, scale: 0.8, yPercent: 20 });
gsap.set("#device-phone", { opacity: 0, scale: 0.8, yPercent: 20 });

// 2. Continuous levitation effect for all devices
gsap.to(".device-image", {
    y: "-=25",
    x: "+=10",
    rotationZ: 4,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
});

// 3. Multi-step scroll animation (Desktop only >= 1200px)
let mm = gsap.matchMedia();

mm.add("(min-width: 1200px)", () => {
    const cameraTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".left-stream",
            start: "top top",
            end: "bottom bottom",
            scrub: 3.5 // Very smooth scrubbing to compensate for snap scroll
        }
    });

    cameraTl
        // To About Block
        .addLabel("about")
        .to("#camera-wrapper", {
            rotationZ: -8,
            scale: 1.15,
            x: -30,
            y: -30,
            filter: "drop-shadow(20px 40px 60px rgba(0, 163, 224, 0.6))",
            duration: 1
        }, "about")
        .to("#device-camera", { opacity: 0, scale: 0.8, yPercent: -20, duration: 1 }, "about")
        .to("#device-about", { opacity: 1, scale: 1, yPercent: 0, duration: 1 }, "about")

        // To Services Block
        .addLabel("services")
        .to("#camera-wrapper", {
            rotationZ: 10,
            scale: 1.25,
            x: 40,
            y: 10,
            filter: "drop-shadow(-30px 50px 70px rgba(255, 107, 53, 0.7))",
            duration: 1
        }, "services")
        .to("#device-about", { opacity: 0, scale: 0.8, yPercent: -20, duration: 1 }, "services")
        .to("#device-mac", { opacity: 1, scale: 1, yPercent: 0, duration: 1 }, "services")

        // To Portfolio Block
        .addLabel("portfolio")
        .to("#camera-wrapper", {
            rotationZ: -4,
            scale: 1.1,
            x: -15,
            y: 40,
            filter: "drop-shadow(10px 30px 80px rgba(255, 0, 127, 0.6))",
            duration: 1
        }, "portfolio")
        .to("#device-mac", { opacity: 0, scale: 0.8, yPercent: -20, duration: 1 }, "portfolio")
        .to("#device-portfolio", { opacity: 1, scale: 1, yPercent: 0, duration: 1 }, "portfolio")

        // To Let's Create Block
        .addLabel("footer")
        .to("#camera-wrapper", {
            rotationZ: 0,
            scale: 1,
            x: 0,
            y: 0,
            filter: "drop-shadow(0 30px 70px rgba(0, 0, 0, 0.15))",
            duration: 1
        }, "footer")
        .to("#device-portfolio", { opacity: 0, scale: 0.8, yPercent: -20, duration: 1 }, "footer")
        .to("#device-phone", { opacity: 1, scale: 1, yPercent: 0, duration: 1 }, "footer");

    // 4. Background splash complex animation
    gsap.to("#bg-splash", {
        rotation: 180,
        scale: 1.3,
        opacity: 0.9,
        scrollTrigger: {
            trigger: ".left-stream",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        }
    });
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scroll to the contact block
document.querySelectorAll('.btn-contact, .btn-session').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector('.lets-create-block');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

// --- Premium UX Upgrades ---

// 1. Scroll Progress Bar
gsap.to("#scroll-progress", {
    width: "100%",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1
    }
});

// 2. Smooth scroll for Showreel button
const btnShowreel = document.querySelector('.btn-showreel');
if (btnShowreel) {
    btnShowreel.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector('#portfolio');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// 3. Magnetic Buttons
const magneticItems = document.querySelectorAll('.magnetic');
magneticItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(item, {
            x: x * 0.4,
            y: y * 0.4,
            duration: 0.5,
            ease: "power3.out"
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// 4. 3D Mouse Parallax
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    
    gsap.to("#camera-wrapper", {
        rotationY: x * 15,
        rotationX: -y * 15,
        duration: 1.5,
        ease: "power2.out",
        overwrite: "auto"
    });
});
