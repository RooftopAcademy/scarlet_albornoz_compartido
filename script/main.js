let hamburger = document.querySelector('#hamburger');

function toggleMenu() {
    let menu = document.querySelector('#nav-menu');
    let classes = menu.classList
    let hide = 'd-none';
    let show = 'show-menu'

    classes.contains(hide) ? classes.replace(hide, show) : classes.replace(show, hide);
}

hamburger.addEventListener('click', toggleMenu);

let toggleThemeBtn = document.querySelectorAll('.dark-mode');

function toggleTheme() {
    let actualTheme = document.documentElement.getAttribute('theme');
    let targetTheme = '';

    actualTheme == 'light' ? targetTheme = 'dark' : targetTheme = 'light';

    document.documentElement.setAttribute('theme', targetTheme);

    sessionStorage.setItem('targetTheme', targetTheme)
}

toggleThemeBtn.forEach(btn => {
    btn.addEventListener('click', toggleTheme)
});

document.documentElement.setAttribute('theme', (sessionStorage.targetTheme || 'light'));

function pop(e) {
    let amount = 60
    if (e.clientX === 0 && e.clientY === 0) {
        const bbox = document.body.getBoundingClientRect();
        const x = bbox.left + bbox.width / 2;
        const y = bbox.top + bbox.height / 2;

        for (let i = 0; i < 30; i++) {
            createParticle(x, y);
        }
    } else {
        for (let i = 0; i < amount; i++) {
            createParticle(e.clientX, e.clientY + window.scrollY);
        }
    }
}
function createParticle(x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 300;
    let destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;

    let color = `hsl(60, 100%, 50%)`;
    particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
    particle.style.background = color;
    particle.style.borderRadius = '50%';
    width = height = Math.random() * 5 + 4;
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;

    const animation = particle.animate([
        {
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1
        },
        {
            transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay
    });
    animation.onfinish = removeParticle;
}
function removeParticle(e) {
    e.srcElement.effect.target.remove();
}

if (document.body.animate) {
    document.addEventListener('click', pop);
}