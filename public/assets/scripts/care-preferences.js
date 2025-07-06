        // Variables globales
        let currentPreferences = null;
        let isEditing = false;

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

        // Función para mostrar mensaje de éxito
        function showSuccessMessage(title, description) {
            const successMessage = document.getElementById('success-message');
            const successTitle = document.getElementById('success-title');
            const successDescription = document.getElementById('success-description');
            
            successTitle.textContent = title;
            successDescription.textContent = description;
            successMessage.classList.add('visible');
            
            setTimeout(() => {
                successMessage.classList.remove('visible');
            }, 4000);
        }

        // Función para abrir el formulario
        function openForm(editMode = false) {
            isEditing = editMode;
            const modal = document.getElementById('form-modal');
            const formTitle = document.getElementById('form-title');
            const submitBtn = document.getElementById('submit-btn');
            
            if (editMode) {
                formTitle.textContent = 'Editar Preferencias de Cuidado';
                submitBtn.textContent = 'Guardar cambios';
                loadPreferencesToForm();
            } else {
                formTitle.textContent = 'Registrar Preferencias de Cuidado';
                submitBtn.textContent = 'Guardar preferencias';
                clearForm();
            }
            
            modal.classList.add('visible');
            bloquearScroll();
        }

        // Función para cerrar el formulario
        function closeForm() {
            const modal = document.getElementById('form-modal');
            modal.classList.remove('visible');
            permitirScroll();
            clearForm();
        }

        // Función para limpiar el formulario
        function clearForm() {
            document.getElementById('preferences-form').reset();
            const checkboxes = document.querySelectorAll('input[name="conditions"]');
            checkboxes.forEach(cb => cb.checked = false);
        }

        // Función para cargar preferencias al formulario (para editar)
        function loadPreferencesToForm() {
            if (!currentPreferences) return;
            
            document.getElementById('patient-name').value = currentPreferences.patientName || '';
            document.getElementById('medications').value = currentPreferences.medications || '';
            document.getElementById('allergies').value = currentPreferences.allergies || '';
            document.getElementById('mobility-level').value = currentPreferences.mobilityLevel || '';
            document.getElementById('communication').value = currentPreferences.communication || '';
            document.getElementById('daily-routine').value = currentPreferences.dailyRoutine || '';
            document.getElementById('emergency-contact').value = currentPreferences.emergencyContact || '';
            document.getElementById('special-instructions').value = currentPreferences.specialInstructions || '';
            
            // Cargar condiciones médicas
            const checkboxes = document.querySelectorAll('input[name="conditions"]');
            checkboxes.forEach(cb => {
                cb.checked = currentPreferences.conditions && currentPreferences.conditions.includes(cb.value);
            });
        }

        // Función para guardar preferencias
        function savePreferences(formData) {
            currentPreferences = {
                ...formData,
                lastUpdate: new Date().toLocaleDateString('es-PE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
            
            updateUI();
        }

        // Función para actualizar la interfaz
        function updateUI() {
            const emptyState = document.getElementById('empty-state');
            const preferencesCard = document.getElementById('preferences-card');
            
            if (currentPreferences) {
                // Escenario 2: Mostrar preferencias
                emptyState.style.display = 'none';
                preferencesCard.style.display = 'block';
                
                // Actualizar fecha
                document.getElementById('preferences-date').textContent = 
                    `Última actualización: ${currentPreferences.lastUpdate}`;
                
                // Renderizar contenido de preferencias
                renderPreferencesContent();
            } else {
                // Escenario 1: Estado vacío
                emptyState.style.display = 'block';
                preferencesCard.style.display = 'none';
            }
        }

        // Función para renderizar el contenido de las preferencias
        function renderPreferencesContent() {
            if (!currentPreferences) return;
            
            const content = document.getElementById('preferences-content');
            const conditionsText = currentPreferences.conditions && currentPreferences.conditions.length > 0 
                ? currentPreferences.conditions.map(condition => {
                    const conditionLabels = {
                        'diabetes': 'Diabetes',
                        'hipertension': 'Hipertensión', 
                        'alzheimer': 'Alzheimer',
                        'movilidad-reducida': 'Movilidad reducida',
                        'cardiacos': 'Problemas cardíacos',
                        'respiratorios': 'Problemas respiratorios'
                    };
                    return conditionLabels[condition] || condition;
                }).join(', ')
                : 'Ninguna registrada';
            
            const mobilityLabels = {
                'independiente': 'Independiente',
                'asistencia-minima': 'Necesita asistencia mínima',
                'asistencia-moderada': 'Necesita asistencia moderada', 
                'asistencia-total': 'Necesita asistencia total',
                'postrado': 'Postrado en cama'
            };
            
            content.innerHTML = `
                <div class="preference-section">
                    <div class="preference-label">Paciente</div>
                    <div class="preference-value">${currentPreferences.patientName || 'No especificado'}</div>
                </div>
                
                <div class="preference-section">
                    <div class="preference-label">Condiciones médicas</div>
                    <div class="preference-value">${conditionsText}</div>
                </div>
                
                <div class="preference-section">
                    <div class="preference-label">Medicamentos</div>
                    <div class="preference-value">${currentPreferences.medications || 'Ninguno registrado'}</div>
                </div>
                
                <div class="preference-section">
                    <div class="preference-label">Alergias y restricciones</div>
                    <div class="preference-value">${currentPreferences.allergies || 'Ninguna registrada'}</div>
                </div>
                
                <div class="preference-section">
                    <div class="preference-label">Nivel de movilidad</div>
                    <div class="preference-value">${mobilityLabels[currentPreferences.mobilityLevel] || 'No especificado'}</div>
                </div>
                
                <div class="preference-section">
                    <div class="preference-label">Comunicación</div>
                    <div class="preference-value">${currentPreferences.communication || 'No especificado'}</div>
                </div>
                
                <div class="preference-section">
                    <div class="preference-label">Rutina diaria</div>
                    <div class="preference-value">${currentPreferences.dailyRoutine || 'No especificada'}</div>
                </div>
                
                <div class="preference-section">
                    <div class="preference-label">Contacto de emergencia</div>
                    <div class="preference-value">${currentPreferences.emergencyContact || 'No especificado'}</div>
                </div>
                
                ${currentPreferences.specialInstructions ? `
                <div class="preference-section">
                    <div class="preference-label">Instrucciones especiales</div>
                    <div class="preference-value">${currentPreferences.specialInstructions}</div>
                </div>
                ` : ''}
            `;
        }

        // Función para editar preferencias
        function editPreferences() {
            openForm(true);
        }

        // Función para eliminar preferencias
        function deletePreferences() {
            if (confirm('¿Estás seguro de que quieres eliminar todas las preferencias de cuidado? Esta acción no se puede deshacer.')) {
                currentPreferences = null;
                updateUI();
                
                // Escenario 3: Mensaje de eliminación exitosa
                showSuccessMessage(
                    '¡Preferencias eliminadas!',
                    'Las preferencias de cuidado han sido eliminadas exitosamente'
                );
            }
        }

        // Event listener para el formulario
        document.getElementById('preferences-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recopilar datos del formulario
            const formData = {
                patientName: document.getElementById('patient-name').value,
                medications: document.getElementById('medications').value,
                allergies: document.getElementById('allergies').value,
                mobilityLevel: document.getElementById('mobility-level').value,
                communication: document.getElementById('communication').value,
                dailyRoutine: document.getElementById('daily-routine').value,
                emergencyContact: document.getElementById('emergency-contact').value,
                specialInstructions: document.getElementById('special-instructions').value,
                conditions: Array.from(document.querySelectorAll('input[name="conditions"]:checked')).map(cb => cb.value)
            };
            
            // Guardar preferencias
            savePreferences(formData);
            
            // Cerrar formulario
            closeForm();
            
            // Mostrar mensaje de éxito
            const successTitle = isEditing ? '¡Cambios guardados!' : '¡Preferencias guardadas!';
            const successDescription = isEditing 
                ? 'Las preferencias han sido actualizadas exitosamente'
                : 'Tus preferencias han sido registradas exitosamente';
            
            showSuccessMessage(successTitle, successDescription);
        });

        // Cerrar modal al hacer clic fuera
        document.getElementById('form-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeForm();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const modal = document.getElementById('form-modal');
                if (modal.classList.contains('visible')) {
                    closeForm();
                }
            }
        });

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', function() {
            updateUI();
            
            // Datos de ejemplo para testing (comentar en producción)
            // currentPreferences = {
            //     patientName: 'Juanita Flores',
            //     conditions: ['diabetes', 'hipertension'],
            //     medications: 'Metformina 500mg - 2 veces al día con comidas\nEnalapril 10mg - 1 vez al día en la mañana',
            //     allergies: 'Alérgica a la penicilina y mariscos',
            //     mobilityLevel: 'asistencia-minima',
            //     communication: 'Se comunica bien, pero a veces olvida tomar sus medicamentos. Le gusta que le recuerden con cariño.',
            //     dailyRoutine: 'Desayuno a las 8:00 AM, almuerzo a las 1:00 PM, cena a las 7:00 PM. Le gusta ver televisión en las tardes.',
            //     emergencyContact: 'Juan Flores (hijo) - 987654321',
            //     specialInstructions: 'Verificar niveles de glucosa antes de las comidas. No le gusta que la apresuren.',
            //     lastUpdate: new Date().toLocaleDateString('es-PE', {
            //         year: 'numeric',
            //         month: 'long', 
            //         day: 'numeric',
            //         hour: '2-digit',
            //         minute: '2-digit'
            //     })
            // };
            // updateUI();
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
            const elements = document.querySelectorAll('.empty-state, .preferences-card');
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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