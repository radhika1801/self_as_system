// cursorTrail.js
const trails = 20;
const trailElements = [];

for (let i = 0; i < trails; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    trailElements.push({
        element: trail,
        x: 0,
        y: 0,
        alpha: 1 - (i / trails),
        scale: 1 - (i / trails) * 0.5
    });
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateTrails() {
    trailElements.forEach((trail, index) => {
        const nextTrail = trailElements[index + 1];
        if (nextTrail) {
            trail.x = nextTrail.x;
            trail.y = nextTrail.y;
        } else {
            trail.x = mouseX;
            trail.y = mouseY;
        }

        trail.element.style.left = trail.x + 'px';
        trail.element.style.top = trail.y + 'px';
        trail.element.style.opacity = trail.alpha;
        trail.element.style.transform = `scale(${trail.scale})`;
    });
    requestAnimationFrame(updateTrails);
}

updateTrails();
