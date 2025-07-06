
        // Datos ficticios
        const paymentHistory = [
            {
                id: 1,
                amount: 180.00,
                date: '2025-07-05',
                time: '14:30',
                cardType: 'VISA',
                cardNumber: '****1234',
                service: 'Cuidado integral - María Gonzales',
                status: 'Completado'
            },
            {
                id: 2,
                amount: 120.00,
                date: '2025-07-03',
                time: '09:15',
                cardType: 'VISA',
                cardNumber: '****1234',
                service: 'Fisioterapia - Carlos Mendoza',
                status: 'Completado'
            },
            {
                id: 3,
                amount: 150.00,
                date: '2025-06-30',
                time: '16:45',
                cardType: 'VISA',
                cardNumber: '****1234',
                service: 'Control diabético - Ana Vargas',
                status: 'Completado'
            },
            {
                id: 4,
                amount: 200.00,
                date: '2025-06-28',
                time: '11:20',
                cardType: 'VISA',
                cardNumber: '****1234',
                service: 'Cuidado geriátrico - Carmen Torres',
                status: 'Completado'
            },
            {
                id: 5,
                amount: 90.00,
                date: '2025-06-25',
                time: '13:00',
                cardType: 'VISA',
                cardNumber: '****1234',
                service: 'Terapia respiratoria - Luis Morales',
                status: 'Completado'
            }
        ];

        let savedCards = [];
        let defaultCard = null;
        let isEditing = false;
        let currentEditingCard = null;

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
        function showSuccessMessage(text) {
            const successMessage = document.getElementById('success-message');
            const successText = document.getElementById('success-text');
            
            successText.textContent = text;
            successMessage.classList.add('visible');
            
            setTimeout(() => {
                successMessage.classList.remove('visible');
            }, 3000);
        }

        // Navegación entre tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover clase active de todos los botones y contenidos
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                btn.classList.add('active');
                
                // Mostrar el contenido correspondiente
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Función para formatear fecha
        function formatDate(dateStr) {
            const date = new Date(dateStr);
            return date.toLocaleDateString('es-PE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        }

        // Función para renderizar historial de pagos
        function renderPaymentHistory() {
            const grid = document.getElementById('payments-grid');
            
            grid.innerHTML = paymentHistory.map(payment => `
                <div class="payment-card">
                    <div class="payment-header">
                        <div class="payment-amount">S/ ${payment.amount.toFixed(2)}</div>
                        <div class="payment-status">${payment.status}</div>
                    </div>
                    <div class="payment-details">
                        <div class="payment-detail">
                            <i class="bi bi-calendar payment-icon"></i>
                            <span>${formatDate(payment.date)} - ${payment.time}</span>
                        </div>
                        <div class="payment-detail">
                            <i class="bi bi-credit-card payment-icon"></i>
                            <span>${payment.cardType} <span class="card-number">${payment.cardNumber}</span></span>
                        </div>
                        <div class="payment-detail">
                            <i class="bi bi-heart-pulse payment-icon"></i>
                            <span>${payment.service}</span>
                        </div>
                        <div class="payment-detail">
                            <i class="bi bi-check-circle payment-icon"></i>
                            <span>Transacción ${payment.status.toLowerCase()}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Función para renderizar tarjetas guardadas
        function renderSavedCards() {
            const grid = document.getElementById('saved-cards-grid');
            
            if (savedCards.length === 0) {
                grid.innerHTML = `
                    <div class="no-default-card" style="grid-column: 1 / -1;">
                        <i class="bi bi-wallet no-card-icon"></i>
                        <div class="no-card-text">No tienes tarjetas guardadas</div>
                        <button class="add-card-btn" onclick="openAddCardForm()">
                            <i class="bi bi-plus-circle"></i>
                            Agregar primera tarjeta
                        </button>
                    </div>
                `;
                return;
            }

            grid.innerHTML = savedCards.map(card => `
                <div class="card-item ${card.isDefault ? 'default' : ''}" data-card-id="${card.id}">
                    <div class="card-info">
                        <div class="card-details">
                            <h4>${card.holderName}</h4>
                            <div class="card-number-display">**** **** **** ${card.number.slice(-4)}</div>
                        </div>
                        <div class="card-brand">${card.type.toUpperCase()}</div>
                    </div>
                    <div class="card-actions">
                        ${!card.isDefault ? `<button class="card-action-btn btn-set-default" onclick="setDefaultCard(${card.id})">Predeterminada</button>` : ''}
                        <button class="card-action-btn btn-edit" onclick="editCard(${card.id})">Editar</button>
                        <button class="card-action-btn btn-delete" onclick="deleteCard(${card.id})">Eliminar</button>
                    </div>
                </div>
            `).join('');
        }

        // Función para actualizar la sección de tarjeta predeterminada
        function updateDefaultCardSection() {
            const noDefaultCard = document.getElementById('no-default-card');
            const defaultCardElement = document.getElementById('default-card');
            
            if (defaultCard) {
                noDefaultCard.style.display = 'none';
                defaultCardElement.style.display = 'block';
                defaultCardElement.innerHTML = `
                    <div class="card-info">
                        <div class="card-details">
                            <h4>${defaultCard.holderName}</h4>
                            <div class="card-number-display">**** **** **** ${defaultCard.number.slice(-4)}</div>
                        </div>
                        <div class="card-brand">${defaultCard.type.toUpperCase()}</div>
                    </div>
                    <div class="card-actions">
                        <button class="card-action-btn btn-edit" onclick="editCard(${defaultCard.id})">Editar</button>
                        <button class="card-action-btn btn-delete" onclick="removeDefaultCard()">Remover como predeterminada</button>
                    </div>
                `;
            } else {
                noDefaultCard.style.display = 'block';
                defaultCardElement.style.display = 'none';
            }
        }

        // Función para abrir el formulario
        function openAddCardForm() {
            isEditing = false;
            currentEditingCard = null;
            document.getElementById('form-title').textContent = 'Agregar Método de Pago';
            document.getElementById('submit-btn').textContent = 'Guardar tarjeta';
            clearForm();
            document.getElementById('form-modal').classList.add('visible');
            bloquearScroll();
        }

        // Función para editar tarjeta
        function editCard(cardId) {
            const card = savedCards.find(c => c.id === cardId);
            if (!card) return;
            
            isEditing = true;
            currentEditingCard = card;
            document.getElementById('form-title').textContent = 'Editar Método de Pago';
            document.getElementById('submit-btn').textContent = 'Guardar cambios';
            
            // Llenar formulario con datos de la tarjeta
            document.getElementById('card-number').value = card.number;
            document.getElementById('card-holder').value = card.holderName;
            document.getElementById('expiry-date').value = card.expiryDate;
            document.getElementById('cvv').value = card.cvv;
            document.getElementById('card-type').value = card.type;
            
            document.getElementById('form-modal').classList.add('visible');
            bloquearScroll();
        }

        // Función para establecer tarjeta predeterminada
        function setDefaultCard(cardId) {
            // Remover predeterminada anterior
            if (defaultCard) {
                const oldDefault = savedCards.find(c => c.id === defaultCard.id);
                if (oldDefault) oldDefault.isDefault = false;
            }
            
            // Establecer nueva predeterminada
            const card = savedCards.find(c => c.id === cardId);
            if (card) {
                card.isDefault = true;
                defaultCard = card;
                updateDefaultCardSection();
                renderSavedCards();
                showSuccessMessage('Tarjeta establecida como predeterminada');
            }
        }

        // Función para remover tarjeta predeterminada
        function removeDefaultCard() {
            if (defaultCard) {
                const card = savedCards.find(c => c.id === defaultCard.id);
                if (card) card.isDefault = false;
                defaultCard = null;
                updateDefaultCardSection();
                renderSavedCards();
                showSuccessMessage('Tarjeta removida como predeterminada');
            }
        }

        // Función para eliminar tarjeta
        function deleteCard(cardId) {
            if (confirm('¿Estás seguro de que quieres eliminar esta tarjeta?')) {
                savedCards = savedCards.filter(c => c.id !== cardId);
                
                // Si era la predeterminada, limpiar
                if (defaultCard && defaultCard.id === cardId) {
                    defaultCard = null;
                    updateDefaultCardSection();
                }
                
                renderSavedCards();
                showSuccessMessage('Tarjeta eliminada exitosamente');
            }
        }

        // Función para cerrar formulario
        function closeForm() {
            document.getElementById('form-modal').classList.remove('visible');
            permitirScroll();
            clearForm();
        }

        // Función para limpiar formulario
        function clearForm() {
            document.getElementById('card-form').reset();
        }

        // Función para generar ID único
        function generateId() {
            return Date.now() + Math.random();
        }

        // Función para enmascarar número de tarjeta
        function maskCardNumber(number) {
            return number.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
        }

        // Event listeners para formulario
        document.getElementById('card-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const cardData = {
                id: isEditing ? currentEditingCard.id : generateId(),
                number: document.getElementById('card-number').value.replace(/\s/g, ''),
                holderName: document.getElementById('card-holder').value.toUpperCase(),
                expiryDate: document.getElementById('expiry-date').value,
                cvv: document.getElementById('cvv').value,
                type: document.getElementById('card-type').value,
                isDefault: false
            };
            
            if (isEditing) {
                // Actualizar tarjeta existente
                const index = savedCards.findIndex(c => c.id === currentEditingCard.id);
                if (index !== -1) {
                    savedCards[index] = { ...savedCards[index], ...cardData };
                    
                    // Si era la predeterminada, actualizar
                    if (defaultCard && defaultCard.id === cardData.id) {
                        defaultCard = savedCards[index];
                        updateDefaultCardSection();
                    }
                }
                showSuccessMessage('Tarjeta actualizada exitosamente');
            } else {
                // Agregar nueva tarjeta
                savedCards.push(cardData);
                showSuccessMessage('Tarjeta agregada exitosamente');
            }
            
            renderSavedCards();
            closeForm();
        });

        // Formateo automático de campos
        document.getElementById('card-number').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let maskedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = maskedValue;
        });

        document.getElementById('expiry-date').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });

        document.getElementById('cvv').addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
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
            renderPaymentHistory();
            renderSavedCards();
            updateDefaultCardSection();
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
                const elements = document.querySelectorAll('.payment-card, .card-item, .default-payment-section, .saved-cards-section');
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