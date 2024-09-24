// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');

    // Loop through each FAQ item and add a click event listener
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle the active class to show or hide the answer
            this.classList.toggle('active');

            // Select the answer paragraph (next sibling)
            const answer = this.querySelector('p');
            if (this.classList.contains('active')) {
                // If the item is active, show the answer
                answer.style.display = 'block';
            } else {
                // If the item is not active, hide the answer
                answer.style.display = 'none';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
