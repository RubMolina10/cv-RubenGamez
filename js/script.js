const root = document.documentElement;
const I18N = window.I18N || { ui: {}, en: {} };

function storageGet(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}

function storageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) { /* sin almacenamiento: la elección solo dura esta visita */ }
}

function currentLang() {
    return root.getAttribute('data-lang') === 'en' ? 'en' : 'es';
}

// Textos de botones en el idioma actual
function ui(key) {
    const texts = I18N.ui[currentLang()] || {};
    return texts[key] || key;
}

// ===================== MODO CLARO / OSCURO =====================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    const label = isDark ? ui('themeToLight') : ui('themeToDark');
    themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    themeToggle.setAttribute('aria-label', label);
    themeToggle.title = label;
}

function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

themeToggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    storageSet('theme', next);
});

// Si el usuario no ha elegido tema, seguir los cambios del sistema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        if (!storageGet('theme')) {
            applyTheme(e.matches ? 'light' : 'dark');
        }
    });
}

// ===================== MENÚ HAMBURGUESA (pantallas chicas) =====================
const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = menuToggle.querySelector('i');

function isMenuOpen() {
    return navbar.classList.contains('open');
}

function setMenuOpen(open) {
    navbar.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? ui('menuClose') : ui('menuOpen'));
    menuIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

menuToggle.addEventListener('click', () => {
    setMenuOpen(!isMenuOpen());
});

// Cerrar al elegir una sección, al tocar fuera o con Escape
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('click', e => {
    if (isMenuOpen() && !navbar.contains(e.target)) {
        setMenuOpen(false);
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isMenuOpen()) {
        setMenuOpen(false);
        menuToggle.focus();
    }
});

// ===================== IDIOMA (ES / EN) =====================
// El español está en el HTML; se guarda tal cual para poder regresar a él.
const langToggle = document.getElementById('lang-toggle');
const metaDescription = document.querySelector('meta[name="description"]');

const textElements = Array.from(document.querySelectorAll('[data-i18n]'));
const altElements = Array.from(document.querySelectorAll('[data-i18n-alt]'));
const originalText = new Map(textElements.map(el => [el, el.innerHTML]));
const originalAlt = new Map(altElements.map(el => [el, el.getAttribute('alt')]));

function applyLang(lang) {
    const dict = lang === 'en' ? I18N.en : null;

    textElements.forEach(el => {
        if (!dict) {
            el.innerHTML = originalText.get(el);
        } else if (el.dataset.i18n in dict) {
            el.innerHTML = dict[el.dataset.i18n];
        } else {
            console.warn('Falta la traducción de:', el.dataset.i18n);
        }
    });

    altElements.forEach(el => {
        const key = el.dataset.i18nAlt;
        el.setAttribute('alt', dict && key in dict ? dict[key] : originalAlt.get(el));
    });

    root.setAttribute('data-lang', lang);
    root.lang = lang;

    if (metaDescription) {
        metaDescription.setAttribute('content', ui('description'));
    }
    navbar.setAttribute('aria-label', ui('nav'));

    langToggle.textContent = ui('langButton');
    langToggle.setAttribute('aria-label', ui('langButtonLabel'));
    langToggle.title = ui('langButtonLabel');
    langToggle.setAttribute('lang', ui('langButtonLang'));

    // Los botones de tema y menú también cambian de idioma
    applyTheme(currentTheme());
    setMenuOpen(isMenuOpen());

    root.classList.remove('i18n-pending');
}

// Deja ?lang=en en la URL para poder compartir el enlace en inglés
function updateUrlLang(lang) {
    try {
        const url = new URL(window.location.href);
        if (lang === 'en') {
            url.searchParams.set('lang', 'en');
        } else {
            url.searchParams.delete('lang');
        }
        history.replaceState(null, '', url);
    } catch (e) { /* p. ej. al abrir el archivo localmente en algunos navegadores */ }
}

langToggle.addEventListener('click', () => {
    const next = currentLang() === 'en' ? 'es' : 'en';
    applyLang(next);
    storageSet('lang', next);
    updateUrlLang(next);
});

applyLang(currentLang());

// ===================== ANIMACIÓN AL HACER SCROLL =====================
const sections = document.querySelectorAll('.fade');

if ('IntersectionObserver' in window) {
    // threshold 0 + rootMargin: las secciones muy altas (más que la pantalla) también aparecen
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

    sections.forEach(section => observer.observe(section));
} else {
    sections.forEach(section => section.classList.add('visible'));
}

// ===================== SECCIÓN ACTIVA EN EL MENÚ =====================
const links = document.querySelectorAll('.menu a');

function updateActiveLink() {
    let current = '';

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });

    // Al llegar al final, marcar la última sección aunque sea corta
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom && sections.length) {
        current = sections[sections.length - 1].getAttribute('id');
    }

    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
