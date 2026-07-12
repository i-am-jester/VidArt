# VIDART - Photo & Video Storyteller 🎥✨

VIDART is a high-end, cinematic portfolio website built for a creative agency (or individual creator) specializing in photography, video production, custom sound design, and motion effects. The website is designed to be an immersive experience itself, showcasing the creator's skills through interactive 3D elements, dynamic animations, and a sleek, modern aesthetic.

## 🌟 Key Features

*   **Cinematic Preloader:** A "liquid glass" loading screen with custom SVG animations that sets the mood before the content is revealed.
*   **Interactive Background:** A custom HTML5 Canvas particle system that dynamically reacts to mouse movements, creating a living, breathing backdrop.
*   **3D Coverflow Portfolio:** A custom-built, interactive video slider that displays projects in a rotating 3D space.
*   **Scroll-Driven Animations:** Powered by GSAP and ScrollTrigger, elements like floating cameras, phones, and laptops respond smoothly to the user's scroll position.
*   **Modern Aesthetics:** Utilizes glassmorphism, neon gradients (`#00A3E0`, `#FF007F`, `#FF6B35`), and bold typography to create a premium, enterprise-level feel.
*   **Fully Responsive:** Perfectly adapts to desktops, tablets, and mobile devices without losing its cinematic appeal.

## 🏗️ Project Architecture

The project follows a clean, modular structure, separating concerns into distinct files for easy maintenance and scaling.

### File Structure

```text
VidArt(website)/
├── index.html          # Main entry point containing the layout and content structure.
├── css/                # Modular stylesheet directory
│   ├── base.css        # Global resets, typography, and core color variables.
│   ├── layout.css      # Structural layout (header, footer, grid, and the fixed 3D right stage).
│   ├── preloader.css   # Styles and keyframes exclusively for the loading screen.
│   └── blocks.css      # Component-specific styles (Hero, About, Services, Portfolio sections).
├── js/                 # Modular JavaScript directory
│   ├── loader.js       # Manages the preloader timing and scroll unlocking.
│   ├── slider.js       # Logic for the interactive 3D video portfolio carousel.
│   ├── animations.js   # GSAP ScrollTrigger logic for floating devices and smooth scrolling.
│   └── background.js   # Canvas API logic for the interactive floating particles.
└── images/             # Assets, mockups (mac, phone, camera), and SVG icons.
```

## 🛠️ Technology Stack

*   **HTML5:** Semantic markup and structure.
*   **CSS3:** Vanilla CSS leveraging Flexbox, CSS Grid, 3D Transforms, and custom variables. No heavy frameworks (only Bootstrap grid used lightly for layout).
*   **JavaScript (ES6+):** Vanilla JS for DOM manipulation, canvas rendering, and component logic.
*   **GSAP (GreenSock):** Used extensively (`ScrollTrigger`) for high-performance, scroll-linked animations.

## 🚀 How to Run Locally

Since this is a static website built with pure HTML/CSS/JS, no build steps or bundlers (like Webpack or Vite) are required. 

1. Clone or download the repository.
2. Open `index.html` in any modern web browser (Chrome, Safari, Firefox).
3. *Optional but recommended:* Use a local development server (like VS Code's "Live Server" extension) to ensure video assets and module loading behave correctly due to CORS policies.

## 🎨 Design Philosophy

The core concept behind VIDART is **"Show, Don't Tell."** Instead of just listing services, the website *demonstrates* high-end production value. The right side of the screen on desktops features a fixed 3D stage with levitating Apple devices and a camera, which physically react as the user scrolls through the content stream on the left. This creates a dual-column narrative that feels like an interactive movie.

---
*Designed & Powered by [Jester](https://github.com/i-am-jester)*
