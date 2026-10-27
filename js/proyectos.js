/* ============================================
   HZEnterprise - Proyectos Page
   Filtros, modal de detalles y contador
   ============================================ */

/* ===== DATOS DE PROYECTOS ===== */
const projectsData = {
    psicologa: {
        category: 'Desarrollo Web',
        title: 'Sitio web Psicóloga',
        description: 'Sitio web profesional diseñado para una psicóloga independiente. Incluye presentación de servicios, perfil profesional, blog de artículos y sistema de agendamiento de sesiones online.',
        client: 'Cliente particular',
        duration: '2 semanas',
        role: 'Diseño y desarrollo full-stack',
        status: 'Completado',
        challenge: 'La cliente necesitaba una presencia online profesional que transmitiera confianza y calma, con un sistema simple para que sus pacientes agendaran sesiones sin depender de WhatsApp.',
        solution: 'Diseñamos un sitio minimalista con paleta de colores suaves, navegación clara y un formulario de agendamiento integrado con Google Calendar. Optimizamos el SEO local para que apareciera en búsquedas de la zona.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Calendar API'],
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80'
    },
    inventario: {
        category: 'Software',
        title: 'Sistema de Inventario',
        description: 'Aplicación de escritorio para gestionar inventario de una tienda retail. Permite registrar productos, controlar stock, generar ventas y emitir reportes automáticos.',
        client: 'Tienda retail local',
        duration: '6 semanas',
        role: 'Desarrollo backend y frontend',
        status: 'Completado',
        challenge: 'El cliente manejaba su inventario en Excel, lo que generaba errores de stock, pérdidas y reportes inconsistentes. Necesitaba una solución robusta pero simple de usar.',
        solution: 'Desarrollamos una aplicación de escritorio con interfaz intuitiva, base de datos SQLite local y generación automática de reportes en PDF. Incluye alertas de stock mínimo y backup automático.',
        tech: ['Python', 'Tkinter', 'SQLite', 'Git'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    plataforma: {
        category: 'Desarrollo Web',
        title: 'Plataforma Social-Profesional',
        description: 'Red social profesional que conecta expertos de distintas áreas. Incluye perfiles detallados, sistema de mensajes, matching por habilidades y publicación de contenido.',
        client: 'Startup en fase早期',
        duration: 'En desarrollo (4+ meses)',
        role: 'Desarrollo frontend y API',
        status: 'En desarrollo',
        challenge: 'Construir una plataforma escalable desde cero que pudiera manejar miles de usuarios, con un sistema de matching inteligente y experiencia de usuario fluida.',
        solution: 'Arquitectura basada en React para el frontend y API REST para el backend. Implementamos autenticación segura, sistema de notificaciones en tiempo real y algoritmo de matching basado en habilidades y ubicación.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'JWT'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
    },
    pyme: {
        category: 'Automatización',
        title: 'Automatización PYME',
        description: 'Sistema de automatización para una PYME que procesaba datos manualmente. Incluye extracción automática de datos, generación de reportes y dashboards en tiempo real.',
        client: 'PYME de servicios',
        duration: '4 semanas',
        role: 'Análisis, desarrollo e implementación',
        status: 'Completado',
        challenge: 'La empresa dedicaba 20+ horas semanales a tareas repetitivas de procesamiento de datos, con alto riesgo de errores humanos y reportes desactualizados.',
        solution: 'Automatizamos el flujo completo con Python: extracción de datos desde múltiples fuentes, procesamiento, generación de reportes en Excel/PDF y dashboard web actualizado en tiempo real. Reducción del 90% en tiempo operativo.',
        tech: ['Python', 'Pandas', 'Excel API', 'Power BI', 'Cron jobs'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    hzenterprise: {
        category: 'Desarrollo Web',
        title: 'Sitio web Corporativo (HZEnterprise)',
        description: 'Sitio web oficial de HZEnterprise. Diseño moderno, responsive, con secciones de servicios, proyectos, nosotros y contacto. Optimizado para SEO y velocidad.',
        client: 'HZEnterprise (interno)',
        duration: '3 semanas',
        role: 'Diseño y desarrollo completo',
        status: 'Completado',
        challenge: 'Crear una presencia online profesional que reflejara la identidad de marca, generara confianza y convirtiera visitantes en leads calificados.',
        solution: 'Sitio multi-página con arquitectura modular, animaciones suaves, formulario de contacto funcional, integración con WhatsApp y optimización SEO técnica. 100% responsive y con score 95+ en Lighthouse.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'SVG', 'SEO técnico'],
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
    },
    dashboard: {
        category: 'Software',
        title: 'Dashboard de Ventas',
        description: 'Panel de control para visualizar métricas de ventas en tiempo real. Incluye gráficos interactivos, filtros por período, exportación de reportes y alertas automáticas.',
        client: 'Empresa comercial',
        duration: '5 semanas',
        role: 'Desarrollo full-stack',
        status: 'Completado',
        challenge: 'La gerencia necesitaba visibilidad inmediata del desempeño comercial sin depender de reportes manuales que llegaban días después.',
        solution: 'Dashboard web con conexión directa a la base de datos, gráficos interactivos con Chart.js, filtros dinámicos y exportación a PDF/Excel. Incluye alertas automáticas cuando las ventas caen bajo umbrales definidos.',
        tech: ['Python', 'Flask', 'PostgreSQL', 'Chart.js', 'REST API'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    'whatsapp-bot': {
        category: 'Automatización',
        title: 'Bot de WhatsApp',
        description: 'Chatbot automatizado para atención al cliente. Responde consultas frecuentes, toma reservas y deriva casos complejos a un agente humano.',
        client: 'Restaurante local',
        duration: '3 semanas',
        role: 'Desarrollo e integración',
        status: 'Completado',
        challenge: 'El restaurante recibía 100+ mensajes diarios en WhatsApp preguntando por menú, horarios y reservas. El personal no daba abasto y se perdían ventas.',
        solution: 'Bot con NLP básico que entiende intenciones del cliente, responde automáticamente preguntas frecuentes, toma reservas guardándolas en base de datos y notifica al personal. Atención 24/7 sin intervención humana.',
        tech: ['Node.js', 'WhatsApp Business API', 'MongoDB', 'NLP básico'],
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initProjectFilters();
    initProjectModal();
});

/* ===== FILTROS DE PROYECTOS ===== */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectCount = document.getElementById('projectCount');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar botones activos
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const filter = btn.dataset.filter;
            let visibleCount = 0;

            projectCards.forEach((card, index) => {
                const category = card.dataset.category;
                const isMatch = filter === 'all' || category === filter;

                if (isMatch) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        card.style.transition = `all 0.4s ease ${index * 0.05}s`;
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);

                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Actualizar contador
            if (projectCount) {
                projectCount.textContent = visibleCount;
            }
        });
    });
}

/* ===== MODAL DE PROYECTO ===== */
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    const viewBtns = document.querySelectorAll('.project-view-btn');

    if (!modal) return;

    // Abrir modal
    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.project-card');
            const projectId = card.dataset.project;
            openModal(projectId);
        });
    });

    // Cerrar modal
    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modal = document.getElementById('projectModal');

    // Llenar datos
    document.getElementById('modalImg').src = project.image;
    document.getElementById('modalImg').alt = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalClient').textContent = project.client;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalRole').textContent = project.role;
    document.getElementById('modalStatus').textContent = project.status;
    document.getElementById('modalChallenge').textContent = project.challenge;
    document.getElementById('modalSolution').textContent = project.solution;

    // Tags de tecnologías
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag tag-blue';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });

    // Mostrar modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Scroll al top del modal
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}