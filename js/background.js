// --- BACKGROUND PARTICLE ANIMATION ---
(function initParticles() {
    var canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d'),
        w = window.innerWidth,
        h = window.innerHeight,
        arc = 100, // Number of particles
        time,
        size = 7,
        speed = 20,
        parts = new Array(),
        // Brand colors for particles
        colors = ['#FF3B30', '#00A3E0', '#FF6B35', '#FF007F', '#8A2BE2', '#FFD700'];

    var mouse = { x: w / 2, y: h / 2 };

    function resize() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    }
    resize();
    window.addEventListener('resize', resize);

    function create() {
        time = 0;
        for (var i = 0; i < arc; i++) {
            parts[i] = {
                x: Math.ceil(Math.random() * w),
                y: Math.ceil(Math.random() * h),
                toX: Math.random() * 5 - 1,
                toY: Math.random() * 2 - 1,
                c: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * size
            }
        }
    }

    function particles() {
        ctx.clearRect(0, 0, w, h);

        for (var i = 0; i < arc; i++) {
            var li = parts[i];
            var distanceFactor = DistanceBetween(mouse, parts[i]);
            distanceFactor = Math.max(Math.min(15 - (distanceFactor / 10), 10), 1);

            ctx.beginPath();
            ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
            ctx.fillStyle = li.c;
            ctx.strokeStyle = li.c;

            if (i % 2 == 0)
                ctx.stroke();
            else
                ctx.fill();

            li.x = li.x + li.toX * (time * 0.05);
            li.y = li.y + li.toY * (time * 0.05);

            if (li.x > w) li.x = 0;
            if (li.y > h) li.y = 0;
            if (li.x < 0) li.x = w;
            if (li.y < 0) li.y = h;
        }

        if (time < speed) {
            time++;
        }

        requestAnimationFrame(particles);
    }

    function MouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    function DistanceBetween(p1, p2) {
        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    window.addEventListener('mousemove', MouseMove, false);
    create();
    particles();
})();
