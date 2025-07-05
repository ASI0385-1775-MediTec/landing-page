const nav = document.querySelector('#nav');
const abrir = document.querySelector('#open');
const cerrar = document.querySelector('#close');

if (abrir && cerrar) {
    abrir.addEventListener('click', () => {
        nav.classList.add('visible');
        bloquearScroll();
    });

    cerrar.addEventListener('click', () => {
        nav.classList.remove('visible');
        permitirScroll();
    });
}

// Función para bloquear el scroll
const bloquearScroll = () => {
    document.body.classList.add('no-scroll');
}

// Función para permitir el scroll
const permitirScroll = () => {
    document.body.classList.remove('no-scroll');
}

        // Navegación de acciones rápidas
const navigateTo = (section) => {
    // Simulación de navegación
    console.log(`Navegando a: ${section}`);
    
    // Aquí se implementaría la navegación real
    switch(section) {
        case 'buscar-cuidadores':
            alert('Redirigiendo a buscar cuidadores...');
            break;
        case 'emergencia':
            alert('Activando protocolo de emergencia...');
            break;
        case 'cuidador-favorito':
            alert('Contactando cuidador favorito...');
            break;
        default:
            alert(`Navegando a ${section}`);
    }
}
        
// Cerrar menú móvil al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !abrir.contains(e.target) && nav.classList.contains('visible')) {
        nav.classList.remove('visible');
        permitirScroll();
    }
});

// Animación de entrada para las cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las tarjetas
document.querySelectorAll('.stat-card, .info-card, .action-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});