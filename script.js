// ARCA LEGAL — Premium Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Sticky Header ──────────────────────────────────────
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ── 2. Mobile Menu ────────────────────────────────────────
    const toggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');

    toggle.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });

    // Close mobile menu on link click
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });

    // ── 3. Reveal Sections on Scroll ─────────────────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ── 4. Smooth Scroll ──────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ── 5. Contact Form ───────────────────────────────────────
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const original = btn.innerText;
            btn.innerText = 'ENVIANDO...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Gracias por contactar a ARCA LEGAL. Un especialista le contactará a la brevedad.');
                form.reset();
                btn.innerText = original;
                btn.disabled = false;
            }, 1500);
        });
    }

});
