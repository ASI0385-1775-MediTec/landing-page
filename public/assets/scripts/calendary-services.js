        // Navegación móvil
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

        const bloquearScroll = () => {
            document.body.classList.add('no-scroll');
        }

        const permitirScroll = () => {
            document.body.classList.remove('no-scroll');
        }

        // Cerrar menú móvil al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !abrir.contains(e.target) && nav.classList.contains('visible')) {
                nav.classList.remove('visible');
                permitirScroll();
            }
        });

        // Funciones de interacción
        function contactCaregiver(caregiverName) {
            alert(`Contactando con ${caregiverName}...\n\nSe abrirá el chat directo con tu cuidador para coordinar cualquier detalle del servicio.`);
        }

        function viewDetails(serviceId) {
            const serviceNames = {
                1: 'Cuidado Integral Matutino',
                2: 'Sesión de Fisioterapia'
            };
            
            alert(`Ver detalles completos de: ${serviceNames[serviceId]}\n\nAquí se mostraría información detallada del servicio, historial del cuidador, y opciones de seguimiento.`);
        }

        function reschedule(serviceId) {
            if (confirm('¿Estás seguro de que quieres reprogramar este servicio?\n\nSe notificará al cuidador y se buscará una nueva fecha disponible.')) {
                alert('Solicitud de reprogramación enviada.\n\nTe contactaremos en los próximos minutos para coordinar una nueva fecha y hora.');
            }
        }

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

        // Aplicar animaciones
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.stat-card, .service-item');
            elements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                observer.observe(element);
            });
        });

        function logout() {
        // Mostrar alerta de confirmación
            if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                // Limpiar cualquier dato almacenado (si hubiera)
                localStorage.removeItem('careMe_userData');
                localStorage.removeItem('careMe_nameChanged');
                
                // Mostrar mensaje de éxito
                alert('Sesión cerrada exitosamente. ¡Gracias por usar CareMe!');
                
                // Redireccionar al landing page (index.html)
                window.location.href = '../../index.html';
            }
        }