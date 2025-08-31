const menuToggle = document.querySelector('button[aria-label="Toggle navigation"]');
const mainNav = document.querySelector('header nav');
const closeBtn = document.querySelector('.main__close');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('active');
});

mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            menuToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
        }
    });
});
