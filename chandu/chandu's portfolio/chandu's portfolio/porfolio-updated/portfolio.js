document.querySelectorAll('.nav-links button, #contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target || 'contact';
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const scrollDown = document.getElementById('scroll-down');
if (scrollDown) {
    scrollDown.addEventListener('click', () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255,255,255,0.85)';
        nav.style.boxShadow = '0 6px 18px rgba(30,30,30,0.06)';
    } else {
        nav.style.background = 'rgba(255,255,255,0.6)';
        nav.style.boxShadow = 'none';
    }
});

const sections = ['services', 'works', 'about', 'contact'];
const navButtons = Array.from(document.querySelectorAll('.nav-links button'));
const obsOptions = { root: null, rootMargin: '0px', threshold: 0.45 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navButtons.forEach(b => b.classList.remove('active'));
            const btn = navButtons.find(b => b.dataset.target === entry.target.id);
            if (btn) btn.classList.add('active');
        }
    });
}, obsOptions);
sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
});
