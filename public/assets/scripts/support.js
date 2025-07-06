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

        // Función para mostrar opciones de soporte
        function showSupportOptions() {
            document.getElementById('support-options').style.display = 'grid';
            document.getElementById('contact-form').classList.remove('active');
            document.getElementById('incident-form').classList.remove('active');
        }

        // Función para mostrar formulario de contacto
        function showContactForm() {
            document.getElementById('support-options').style.display = 'none';
            document.getElementById('contact-form').classList.add('active');
            document.getElementById('incident-form').classList.remove('active');
        }

        // Función para mostrar formulario de incidente
        function showIncidentForm() {
            document.getElementById('support-options').style.display = 'none';
            document.getElementById('contact-form').classList.remove('active');
            document.getElementById('incident-form').classList.add('active');
            
            // Establecer fecha de hoy por defecto
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('incident-date').value = today;
        }

        // Función para generar número de ticket
        function generateTicketNumber() {
            const year = new Date().getFullYear();
            const random = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
            return `#CRM-${year}-${random}`;
        }

        // Función para mostrar modal de éxito
        function showSuccessModal(title, message, isIncident = false) {
            const modal = document.getElementById('success-modal');
            const titleElement = document.getElementById('success-title');
            const messageElement = document.getElementById('success-message');
            const ticketElement = document.getElementById('ticket-number');
            
            titleElement.textContent = title;
            messageElement.textContent = message;
            ticketElement.textContent = generateTicketNumber();
            
            modal.classList.add('visible');
            bloquearScroll();
        }

        // Función para cerrar modal de éxito
        function closeSuccessModal() {
            document.getElementById('success-modal').classList.remove('visible');
            permitirScroll();
            showSupportOptions();
            
            // Limpiar formularios
            document.getElementById('support-contact-form').reset();
            document.getElementById('incident-report-form').reset();
            
            // Restaurar valores por defecto
            document.getElementById('contact-name').value = 'John Doe';
            document.getElementById('contact-email').value = 'johndoe@email.com';
            document.getElementById('incident-name').value = 'John Doe';
        }

        // Event listener para formulario de contacto
        document.getElementById('support-contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const category = document.getElementById('contact-category').value;
            const urgency = document.querySelector('input[name="urgency"]:checked').value;
            const subject = document.getElementById('contact-subject').value;
            
            let responseTime = 'en las próximas 2-4 horas';
            if (urgency === 'alta') {
                responseTime = 'en la próxima hora';
            } else if (urgency === 'media') {
                responseTime = 'en las próximas 2 horas';
            }
            
            showSuccessModal(
                '¡Consulta enviada exitosamente!',
                `Tu consulta sobre "${subject}" ha sido recibida. Nuestro equipo de soporte te contactará ${responseTime} para ayudarte a resolver tu problema.`
            );
        });

        // Event listener para formulario de incidente
        document.getElementById('incident-report-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const caregiverName = document.getElementById('caregiver-name').selectedOptions[0].text;
            const incidentType = document.getElementById('incident-type').selectedOptions[0].text;
            const severity = document.querySelector('input[name="severity"]:checked').value;
            
            let urgencyMessage = 'en las próximas 24 horas';
            if (severity === 'grave') {
                urgencyMessage = 'inmediatamente';
            } else if (severity === 'moderado') {
                urgencyMessage = 'en las próximas 2 horas';
            }
            
            showSuccessModal(
                '¡Incidente reportado exitosamente!',
                `Tu reporte de incidente "${incidentType}" relacionado con ${caregiverName} ha sido recibido con prioridad ${severity.toUpperCase()}. Nuestro equipo de investigación te contactará ${urgencyMessage} para revisar la situación y tomar las medidas necesarias.`,
                true
            );
        });

        // Configurar fecha máxima para el campo de fecha (no futuro)
        document.addEventListener('DOMContentLoaded', function() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('incident-date').setAttribute('max', today);
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
                const elements = document.querySelectorAll('.support-card, .form-container, .support-info');
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