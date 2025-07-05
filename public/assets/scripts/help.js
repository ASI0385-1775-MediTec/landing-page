        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('.faq-icon');
                
                // Toggle active state
                question.classList.toggle('active');
                answer.classList.toggle('active');
                
                // Close other open FAQs
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                        otherQuestion.classList.remove('active');
                        otherQuestion.nextElementSibling.classList.remove('active');
                    }
                });
            });
        });

        const categoryBtns = document.querySelectorAll('.category-btn');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
            
            });
        });

        const searchBox = document.querySelector('.search-box');
        const searchButton = document.querySelector('.search-button');
        
        searchButton.addEventListener('click', () => {
            const searchTerm = searchBox.value.trim();
            if (searchTerm) {
                console.log('Searching for:', searchTerm);
            }
        });
        
        searchBox.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });

        const quickLinkCards = document.querySelectorAll('.quick-link-card');
        
        quickLinkCards.forEach(card => {
            card.addEventListener('click', () => {
                const topic = card.querySelector('h3').textContent;
                console.log('Navigating to:', topic);
            });
        });