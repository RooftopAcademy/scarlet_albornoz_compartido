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
