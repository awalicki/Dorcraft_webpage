document.addEventListener('DOMContentLoaded', () => {
    // Wstawianie danych kontaktowych ze zmiennej DANE (js/dane.js)
    if (typeof DANE !== 'undefined') {
        document.querySelectorAll('[data-dane]').forEach(el => {
            const klucz = el.getAttribute('data-dane');
            if (DANE[klucz]) {
                el.textContent = DANE[klucz];
            }
        });
        
        // Aktualizacja linków (np. mailto: i tel:)
        document.querySelectorAll('[data-dane-href]').forEach(el => {
            const klucz = el.getAttribute('data-dane-href');
            if (DANE[klucz]) {
                if (klucz === 'telefon') el.href = 'tel:' + DANE[klucz].replace(/\s+/g, '');
                if (klucz === 'email') el.href = 'mailto:' + DANE[klucz];
            }
        });
    }

    // Efekt przyciemnienia paska nawigacji (navbar scroll effect)
    const nav = document.getElementById('navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
});
