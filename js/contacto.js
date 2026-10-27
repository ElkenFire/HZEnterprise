/* ============================================
   HZEnterprise - Contacto Page
   Validación, envío y notificaciones
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Limpiar errores previos
        clearErrors();

        // Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        let isValid = true;

        // Validaciones
        if (!nombre) {
            showError('nombre', 'Por favor ingresa tu nombre.');
            isValid = false;
        } else if (nombre.length < 3) {
            showError('nombre', 'El nombre debe tener al menos 3 caracteres.');
            isValid = false;
        }

        if (!correo) {
            showError('correo', 'Por favor ingresa tu correo.');
            isValid = false;
        } else if (!isValidEmail(correo)) {
            showError('correo', 'Por favor ingresa un correo válido.');
            isValid = false;
        }

        if (!servicio) {
            showError('servicio', 'Por favor selecciona un servicio.');
            isValid = false;
        }

        if (!mensaje) {
            showError('mensaje', 'Por favor cuéntanos sobre tu proyecto.');
            isValid = false;
        } else if (mensaje.length < 20) {
            showError('mensaje', 'El mensaje debe tener al menos 20 caracteres.');
            isValid = false;
        }

        if (!isValid) return;

        // Simular envío (aquí conectarías con Formspree, EmailJS o tu backend)
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const btnIcon = submitBtn.querySelector('.btn-icon');

        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnIcon.style.display = 'none';
        btnLoading.style.display = 'inline';

        setTimeout(() => {
            // Restaurar botón
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnIcon.style.display = 'inline';
            btnLoading.style.display = 'none';

            // Mostrar éxito
            showNotification(`¡Gracias ${nombre}! Tu mensaje ha sido recibido. Te contactaremos en menos de 24 horas.`, 'success');
            
            // Resetear formulario
            form.reset();
            
            // Log para desarrollo (reemplazar con fetch real)
            console.log('Formulario enviado:', { nombre, correo, servicio, mensaje });
        }, 1500);
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`error-${fieldId}`);
    
    if (field) field.classList.add('error');
    if (errorElement) errorElement.textContent = message;
}

function clearErrors() {
    const fields = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    const errors = document.querySelectorAll('.error-message');
    
    fields.forEach(field => field.classList.remove('error'));
    errors.forEach(error => error.textContent = '');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'success') {
    // Remover notificación previa si existe
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}