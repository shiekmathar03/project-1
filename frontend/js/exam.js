// Example JavaScript to handle radio button selection and update the total price dynamically

document.querySelectorAll('input[name="unit"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        let totalText = document.querySelector('.footer .total span');
        if (this.id === 'option1') {
            totalText.textContent = "$10.00 USD";
        } else if (this.id === 'option2') {
            totalText.textContent = "$18.00 USD";
        } else if (this.id === 'option3') {
            totalText.textContent = "$24.00 USD";
        }
    });
});
