
// Datos de cuidadores ficticios
        const caregivers = [
            {
                id: 1,
                name: "María Gonzales Rojas",
                specialty: "Adultos mayores",
                location: "San Miguel",
                distance: "0.9 km",
                rating: 4.9,
                photo: "../assets/images/maria-gonzales-rojas.avif",
                experience: [
                    {
                        title: "Cuidadora Senior - Hospital Nacional Dos de Mayo",
                        details: "5 años especializándose en cuidado de adultos mayores con demencia y Alzheimer. Responsable del cuidado integral de pacientes en hospitalización."
                    },
                    {
                        title: "Cuidadora Domiciliaria - CuidaCasa Perú",
                        details: "3 años brindando cuidado personalizado a domicilio. Atención a 15+ familias con excelentes referencias."
                    }
                ],
                education: [
                    {
                        title: "Técnico en Enfermería - TECSUP",
                        details: "Titulada en 2015. Especialización en cuidados geriátricos y manejo de medicamentos."
                    },
                    {
                        title: "Certificación en Primeros Auxilios - Cruz Roja",
                        details: "Certificación vigente 2024. Capacitada en emergencias médicas y RCP."
                    }
                ],
                services: [
                    {
                        title: "Cuidado de Don Alberto (89 años) - Diabetes",
                        details: "6 meses de cuidado continuo. Control de glucosa, administración de medicamentos y acompañamiento. Calificación: 5/5 estrellas."
                    },
                    {
                        title: "Cuidado de Doña Carmen (75 años) - Alzheimer",
                        details: "1 año de cuidado especializado. Terapias cognitivas, cuidado personal y actividades recreativas. Calificación: 5/5 estrellas."
                    },
                    {
                        title: "Cuidado de Don Luis (82 años) - Movilidad reducida",
                        details: "8 meses de rehabilitación y fisioterapia básica. Mejora significativa en movilidad. Calificación: 4.8/5 estrellas."
                    }
                ]
            },
            {
                id: 2,
                name: "Carlos Mendoza Flores",
                specialty: "Rehabilitación",
                location: "San Miguel",
                distance: "1.2 km",
                rating: 4.8,
                photo: "../assets/images/carlos-mendoza-flores.jpg",
                experience: [
                    {
                        title: "Fisioterapeuta - Clínica San Pablo",
                        details: "7 años en rehabilitación neurológica y traumatológica. Especialista en terapia post-accidente cerebrovascular."
                    },
                    {
                        title: "Terapeuta a Domicilio - RehabilitaPerú",
                        details: "4 años en terapias domiciliarias. Más de 50 pacientes rehabilitados exitosamente."
                    }
                ],
                education: [
                    {
                        title: "Licenciado en Terapia Física - UNFV",
                        details: "Titulado en 2016. Especialización en neurorehabilitación y geriatría."
                    },
                    {
                        title: "Maestría en Rehabilitación - UPCH",
                        details: "En curso. Investigación en técnicas innovadoras de rehabilitación para adultos mayores."
                    }
                ],
                services: [
                    {
                        title: "Rehabilitación de Doña Rosa (68 años) - Post ACV",
                        details: "1 año de terapia intensiva. Recuperación del 80% de movilidad en brazo izquierdo. Calificación: 5/5 estrellas."
                    },
                    {
                        title: "Terapia de Don Miguel (73 años) - Fractura de cadera",
                        details: "6 meses de rehabilitación post-cirugía. Camina sin apoyo actualmente. Calificación: 4.9/5 estrellas."
                    }
                ]
            },
            {
                id: 3,
                name: "Ana Lucia Vargas",
                specialty: "Diabetes",
                location: "San Miguel",
                distance: "0.7 km",
                rating: 4.9,
                photo: "../assets/images/ana-lucia-vargas.jpeg",
                experience: [
                    {
                        title: "Enfermera Especialista - Hospital Rebagliati",
                        details: "6 años en el área de endocrinología. Manejo integral de pacientes diabéticos tipo 1 y 2."
                    },
                    {
                        title: "Educadora en Diabetes - ASPEDIA",
                        details: "3 años como educadora certificada. Ha capacitado a más de 200 familias en el manejo de diabetes."
                    }
                ],
                education: [
                    {
                        title: "Licenciada en Enfermería - UNMSM",
                        details: "Titulada en 2017. Especialización en cuidados endocrinológicos."
                    },
                    {
                        title: "Certificación en Educación Diabetológica",
                        details: "Certificada por la Asociación Peruana de Diabetes. Especialista en planes nutricionales."
                    }
                ],
                services: [
                    {
                        title: "Control de Don Roberto (65 años) - Diabetes Tipo 2",
                        details: "2 años de seguimiento continuo. HbA1c mejoró de 9.5% a 6.8%. Calificación: 5/5 estrellas."
                    },
                    {
                        title: "Cuidado de Doña Esperanza (71 años) - Diabetes + Hipertensión",
                        details: "1.5 años de control integral. Estabilización completa de glucosa y presión arterial. Calificación: 4.9/5 estrellas."
                    }
                ]
            },
            {
                id: 4,
                name: "Rosa Elena Chávez",
                specialty: "Alzheimer",
                location: "San Miguel",
                distance: "1.8 km",
                rating: 4.7,
                photo: "../assets/images/rosa-elena-chavez.webp",
                experience: [
                    {
                        title: "Especialista en Demencia - Instituto Nacional de Salud Mental",
                        details: "8 años trabajando con pacientes con Alzheimer y demencias. Experta en terapias no farmacológicas."
                    },
                    {
                        title: "Cuidadora Domiciliaria Especializada",
                        details: "5 años en cuidado domiciliario de pacientes con deterioro cognitivo. Más de 30 familias atendidas."
                    }
                ],
                education: [
                    {
                        title: "Licenciada en Psicología - PUCP",
                        details: "Titulada en 2013. Especialización en neuropsicología y psicogerontología."
                    },
                    {
                        title: "Diplomado en Cuidados de Alzheimer - UPCH",
                        details: "Certificación especializada en manejo conductual y estimulación cognitiva."
                    }
                ],
                services: [
                    {
                        title: "Cuidado de Don Arturo (78 años) - Alzheimer moderado",
                        details: "2 años de cuidado especializado. Mantenimiento de funciones cognitivas y mejora en calidad de vida. Calificación: 5/5 estrellas."
                    },
                    {
                        title: "Terapia de Doña Isabel (83 años) - Demencia senil",
                        details: "1 año de estimulación cognitiva y actividades terapéuticas. Familia muy satisfecha. Calificación: 4.8/5 estrellas."
                    }
                ]
            },
            {
                id: 5,
                name: "Pedro Ramirez Silva",
                specialty: "Discapacidad",
                location: "San Miguel",
                distance: "2.3 km",
                rating: 4.6,
                photo: "../assets/images/pedro-ramirez-silva.jpg",
                experience: [
                    {
                        title: "Terapeuta Ocupacional - Centro Ann Sullivan",
                        details: "6 años en rehabilitación de personas con discapacidad intelectual y física. Especialista en autonomía personal."
                    },
                    {
                        title: "Cuidador Especializado - Fundación Teleisla",
                        details: "4 años en cuidado de personas con discapacidad múltiple. Capacitado en tecnologías asistivas."
                    }
                ],
                education: [
                    {
                        title: "Licenciado en Terapia Ocupacional - UNMSM",
                        details: "Titulado en 2016. Especialización en adaptaciones del hogar y ayudas técnicas."
                    },
                    {
                        title: "Certificación en Lengua de Señas",
                        details: "Nivel avanzado en LSP. Comunicación efectiva con personas sordas."
                    }
                ],
                services: [
                    {
                        title: "Cuidado de Javier (45 años) - Discapacidad física",
                        details: "1.5 años de apoyo en actividades de vida diaria. Mejora significativa en independencia. Calificación: 4.7/5 estrellas."
                    },
                    {
                        title: "Terapia de Sofia (32 años) - Discapacidad intelectual",
                        details: "2 años de estimulación y desarrollo de habilidades. Progreso notable en comunicación. Calificación: 4.8/5 estrellas."
                    }
                ]
            },
            {
                id: 6,
                name: "Carmen Luz Torres",
                specialty: "Adultos mayores",
                location: "San Miguel",
                distance: "1.5 km",
                rating: 4.8,
                photo: "../assets/images/carmen-luz-torres.jpg",
                experience: [
                    {
                        title: "Enfermera Geriátrica - Hospital Nacional Guillermo Almenara",
                        details: "9 años en el servicio de geriatría. Especialista en cuidados paliativos y manejo del dolor."
                    },
                    {
                        title: "Coordinadora de Cuidados - Residencia Golden Years",
                        details: "3 años coordinando equipos de cuidado para adultos mayores. Supervisión de 20+ cuidadores."
                    }
                ],
                education: [
                    {
                        title: "Licenciada en Enfermería - CAYETANO HEREDIA",
                        details: "Titulada en 2012. Especialización en geriatría y gerontología."
                    },
                    {
                        title: "Maestría en Cuidados Paliativos - PUCP",
                        details: "Graduada en 2020. Experta en manejo integral del dolor y acompañamiento familiar."
                    }
                ],
                services: [
                    {
                        title: "Cuidado de Don Fernando (85 años) - Cuidados paliativos",
                        details: "6 meses de cuidado integral. Acompañamiento digno y manejo del dolor. Familia agradecida. Calificación: 5/5 estrellas."
                    },
                    {
                        title: "Cuidado de Doña Amparo (79 años) - Fragilidad",
                        details: "1 año de cuidado preventivo. Evitó hospitalizaciones y mejoró calidad de vida. Calificación: 4.9/5 estrellas."
                    }
                ]
            },
            {
                id: 7,
                name: "Luis Alberto Morales",
                specialty: "Rehabilitación",
                location: "San Miguel",
                distance: "0.5 km",
                rating: 4.9,
                photo: "../assets/images/luis-alberto-morales2.jpg",
                experience: [
                    {
                        title: "Kinesiólogo - Clínica Ricardo Palma",
                        details: "5 años en rehabilitación cardiaca y respiratoria. Especialista en adultos mayores post-COVID."
                    },
                    {
                        title: "Terapeuta Domiciliario - FisioHogar",
                        details: "3 años en terapias respiratorias domiciliarias. Experto en uso de equipos médicos."
                    }
                ],
                education: [
                    {
                        title: "Licenciado en Kinesiología - UNIFE",
                        details: "Titulado en 2018. Especialización en terapia respiratoria y cardiaca."
                    },
                    {
                        title: "Certificación en Ventilación Mecánica",
                        details: "Capacitado en manejo de ventiladores y equipos de oxigenoterapia domiciliaria."
                    }
                ],
                services: [
                    {
                        title: "Rehabilitación de Don Carlos (72 años) - Post-COVID",
                        details: "8 meses de terapia respiratoria. Recuperación completa de capacidad pulmonar. Calificación: 5/5 estrellas."
                    },
                    {
                        title: "Terapia de Doña María (67 años) - EPOC",
                        details: "1 año de seguimiento respiratorio. Mejora significativa en calidad de vida. Calificación: 4.8/5 estrellas."
                    }
                ]
            },
            {
                id: 8,
                name: "Silvia Patricia Huamán",
                specialty: "Diabetes",
                location: "San Miguel",
                distance: "3.1 km",
                rating: 4.7,
                photo: "../assets/images/silvia-patricia-huaman.jpg",
                experience: [
                    {
                        title: "Nutricionista Clínica - Hospital Loayza",
                        details: "7 años en consultorios de endocrinología. Especialista en planes nutricionales para diabéticos."
                    },
                    {
                        title: "Educadora en Diabetes - DiabetCare",
                        details: "4 años en educación domiciliaria. Más de 100 familias educadas en autocontrol diabético."
                    }
                ],
                education: [
                    {
                        title: "Licenciada en Nutrición - UNALM",
                        details: "Titulada en 2014. Especialización en nutrición clínica y diabetes."
                    },
                    {
                        title: "Diplomado en Educación Diabetológica",
                        details: "Certificada en técnicas de educación para pacientes diabéticos y familiares."
                    }
                ],
                services: [
                    {
                        title: "Plan nutricional para Don Jorge (69 años) - Diabetes Tipo 2",
                        details: "1 año de seguimiento nutricional. Pérdida de 15kg y control glucémico óptimo. Calificación: 4.9/5 estrellas."
                    },
                    {
                        title: "Educación de Doña Pilar (74 años) - Pre-diabetes",
                        details: "6 meses de educación preventiva. Evitó desarrollo de diabetes tipo 2. Calificación: 4.6/5 estrellas."
                    }
                ]
            }
        ];

        // Funciones para manejar la aplicación
        let currentCaregivers = [...caregivers];

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

        // Función para generar estrellas
        function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            let starsHTML = '';
            
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '★';
            }
            if (hasHalfStar) {
                starsHTML += '☆';
            }
            
            return starsHTML;
        }

        // Función para renderizar cuidadores
        function renderCaregivers(caregiversToRender) {
            const grid = document.getElementById('caregivers-grid');
            
            if (caregiversToRender.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #405057;">
                        <i class="bi bi-search" style="font-size: 48px; margin-bottom: 20px; display: block;"></i>
                        <h3>No se encontraron cuidadores</h3>
                        <p>Intenta ajustar los filtros para obtener más resultados</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = caregiversToRender.map(caregiver => `
                <div class="caregiver-card" onclick="openModal(${caregiver.id})">
                    <div class="caregiver-header">
                        <img src="${caregiver.photo}" alt="${caregiver.name}" class="caregiver-photo">
                        <div class="caregiver-info">
                            <h3>${caregiver.name}</h3>
                            <div class="caregiver-specialty">${caregiver.specialty}</div>
                        </div>
                    </div>
                    <div class="caregiver-details">
                        <div class="detail-item">
                            <i class="bi bi-geo-alt detail-icon"></i>
                            <span>${caregiver.location} - a ${caregiver.distance} de ti</span>
                        </div>
                        <div class="detail-item">
                            <i class="bi bi-star-fill detail-icon"></i>
                            <div class="rating">
                                <span class="stars">${generateStars(caregiver.rating)}</span>
                                <span class="rating-number">${caregiver.rating}</span>
                            </div>
                        </div>
                    </div>
                    <button class="contract-btn" onclick="event.stopPropagation(); contractCaregiver(${caregiver.id})">
                        Contratar cuidador
                    </button>
                </div>
            `).join('');
        }

        // Función para abrir modal
        function openModal(caregiverId) {
            const caregiver = caregivers.find(c => c.id === caregiverId);
            if (!caregiver) return;

            // Llenar datos del modal
            document.getElementById('modal-photo').src = caregiver.photo;
            document.getElementById('modal-photo').alt = caregiver.name;
            document.getElementById('modal-name').textContent = caregiver.name;
            document.getElementById('modal-specialty').textContent = caregiver.specialty;
            document.getElementById('modal-stars').textContent = generateStars(caregiver.rating);
            document.getElementById('modal-rating-text').textContent = `${caregiver.rating} (${Math.floor(Math.random() * 50) + 20} reseñas)`;

            // Experiencia
            document.getElementById('modal-experience').innerHTML = caregiver.experience.map(exp => `
                <div class="experience-item">
                    <div class="experience-title">${exp.title}</div>
                    <div class="experience-details">${exp.details}</div>
                </div>
            `).join('');

            // Educación
            document.getElementById('modal-education').innerHTML = caregiver.education.map(edu => `
                <div class="education-item">
                    <div class="education-title">${edu.title}</div>
                    <div class="education-details">${edu.details}</div>
                </div>
            `).join('');

            // Servicios
            document.getElementById('modal-services').innerHTML = caregiver.services.map(service => `
                <div class="service-item">
                    <div class="service-title">${service.title}</div>
                    <div class="service-details">${service.details}</div>
                </div>
            `).join('');

            // Mostrar modal
            document.getElementById('modal-overlay').classList.add('visible');
            bloquearScroll();
        }

        // Función para cerrar modal
        function closeModal() {
            document.getElementById('modal-overlay').classList.remove('visible');
            permitirScroll();
        }

        // Función para contratar cuidador
        function contractCaregiver(caregiverId) {
            const caregiver = caregivers.find(c => c.id === caregiverId);
            alert(`¡Excelente elección! Iniciando proceso de contratación con ${caregiver.name}.\n\nTe contactaremos en los próximos minutos para coordinar los detalles del servicio.`);
            closeModal();
        }

        // Event listeners para modal
        document.getElementById('modal-close').addEventListener('click', closeModal);
        document.getElementById('modal-close-btn').addEventListener('click', closeModal);
        document.getElementById('modal-contract').addEventListener('click', () => {
            // Obtener el ID del cuidador actual del modal (necesitamos guardarlo)
            const caregiverName = document.getElementById('modal-name').textContent;
            const caregiver = caregivers.find(c => c.name === caregiverName);
            if (caregiver) {
                contractCaregiver(caregiver.id);
            }
        });

        // Cerrar modal al hacer clic fuera
        document.getElementById('modal-overlay').addEventListener('click', (e) => {
            if (e.target === document.getElementById('modal-overlay')) {
                closeModal();
            }
        });

        // Filtros
        function applyFilters() {
            const specialtyFilter = document.getElementById('specialty-filter').value;
            const distanceFilter = document.getElementById('distance-filter').value;
            const ratingFilter = document.getElementById('rating-filter').value;
            const experienceFilter = document.getElementById('experience-filter').value;

            let filtered = [...caregivers];

            // Filtro por especialidad
            if (specialtyFilter !== 'all') {
                const specialtyMap = {
                    'adultos-mayores': 'Adultos mayores',
                    'discapacidad': 'Discapacidad',
                    'alzheimer': 'Alzheimer',
                    'diabetes': 'Diabetes',
                    'rehabilitacion': 'Rehabilitación'
                };
                filtered = filtered.filter(c => c.specialty === specialtyMap[specialtyFilter]);
            }

            // Filtro por distancia
            if (distanceFilter !== 'all') {
                const maxDistance = parseFloat(distanceFilter.replace('km', ''));
                filtered = filtered.filter(c => parseFloat(c.distance.replace(' km', '')) <= maxDistance);
            }

            // Filtro por calificación
            if (ratingFilter !== 'all') {
                const minRating = parseFloat(ratingFilter);
                filtered = filtered.filter(c => c.rating >= minRating);
            }

            // Filtro por experiencia (simulado basado en cantidad de trabajos previos)
            if (experienceFilter !== 'all') {
                const minExperience = parseInt(experienceFilter.replace('year', '').replace('s', ''));
                filtered = filtered.filter(c => c.experience.length >= (minExperience > 3 ? 2 : 1));
            }

            currentCaregivers = filtered;
            renderCaregivers(currentCaregivers);
        }

        // Event listeners para filtros
        document.getElementById('specialty-filter').addEventListener('change', applyFilters);
        document.getElementById('distance-filter').addEventListener('change', applyFilters);
        document.getElementById('rating-filter').addEventListener('change', applyFilters);
        document.getElementById('experience-filter').addEventListener('change', applyFilters);

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', () => {
            renderCaregivers(currentCaregivers);
        });

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

        const originalRender = renderCaregivers;
        renderCaregivers = function(caregiversToRender) {
            originalRender(caregiversToRender);
            
            // Aplicar animaciones a las nuevas cards
            setTimeout(() => {
                document.querySelectorAll('.caregiver-card').forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    observer.observe(card);
                });
            }, 50);
        };

        function logout() {
            if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                localStorage.removeItem('careMe_userData');
                localStorage.removeItem('careMe_nameChanged');
                
                alert('Sesión cerrada exitosamente. ¡Gracias por usar CareMe!');
                
                window.location.href = '../../index.html';
            }
        }