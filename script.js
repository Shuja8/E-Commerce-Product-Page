document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
