/* ============================================
   HZEnterprise - Servicios Page
   FAQ accordion y animaciones específicas
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initFaqAccordion();
    initServiceCards();
});

/* ===== FAQ ACCORDION ===== */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Cerrar todos
            faqItems.forEach(i => {
                i.classList.remove('active');
                const btn = i.querySelector('.faq-question');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });

            // Abrir el clickeado (si no estaba activo)
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/* ===== SERVICE CARDS HOVER ===== */
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-detail');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--primary)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '#e2e8f0';
        });
    });
}