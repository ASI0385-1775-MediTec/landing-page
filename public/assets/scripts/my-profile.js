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
            setTimeout(() => {
                const elements = document.querySelectorAll('.stat-card, .profile-container, .profile-section');
                elements.forEach((element, index) => {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                    element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                    observer.observe(element);
                });
            }, 100);
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