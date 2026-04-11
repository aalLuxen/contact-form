const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const emailAddress = document.querySelector('#email-address');
const message = document.querySelector('#message');
const consent = document.querySelector('#consent');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if (form && firstName && lastName && emailAddress && message && consent) {

    
    firstName.addEventListener('input', function() {
        firstName.classList.remove('error-input');
        if (firstName.nextElementSibling) {
            firstName.nextElementSibling.classList.remove('visible');
        }
    });

    lastName.addEventListener('input', function() {
        lastName.classList.remove('error-input');
        if (lastName.nextElementSibling) {
            lastName.nextElementSibling.classList.remove('visible');
        }
    });

    emailAddress.addEventListener('input', function() {
        emailAddress.classList.remove('error-input');
        const error = document.querySelector('#email-error');
        if (error) error.classList.remove('visible');
    });

    message.addEventListener('input', function() {
        message.classList.remove('error-input');
        if (message.nextElementSibling) {
            message.nextElementSibling.classList.remove('visible');
        }
    });

    consent.addEventListener('change', function() {
        if (consent.checked) {
            const error = document.querySelector('#consent ~ .error');
            if (error) error.classList.remove('visible');
        }
    });

    
    document.querySelectorAll('input[name="query-type"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            document.querySelectorAll('.radioption').forEach(function(option) {
                option.classList.remove('error-input');
            });
            const fieldsetError = document.querySelector('fieldset .error');
            if (fieldsetError) fieldsetError.classList.remove('visible');
        });
    });

    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const queryType = document.querySelector('input[name="query-type"]:checked');

        if (firstName.value.trim() === '') {
            firstName.classList.add('error-input');
            const error = firstName.nextElementSibling;
            if (error) error.classList.add('visible');
            isValid = false;
        }

        if (lastName.value.trim() === '') {
            lastName.classList.add('error-input');
            const error = lastName.nextElementSibling;
            if (error) error.classList.add('visible');
            isValid = false;
        }

        if (emailAddress.value.trim() === '') {
            const error = document.querySelector('#email-error');
            if (error) {
                error.textContent = 'This field is required';
                error.classList.add('visible');
            }
            isValid = false;
        } else if (!emailRegex.test(emailAddress.value.trim())) {
            const error = document.querySelector('#email-error');
            if (error) {
                error.textContent = 'Please enter a valid email address';
                error.classList.add('visible');
            }
            isValid = false;
        }

        if (message.value.trim() === '') {
            message.classList.add('error-input');
            const error = message.nextElementSibling;
            if (error) error.classList.add('visible');
            isValid = false;
        }

        if (!consent.checked) {
            const error = document.querySelector('#consent ~ .error');
            if (error) error.classList.add('visible');
            isValid = false;
        }

        if (queryType === null) {
            const fieldsetError = document.querySelector('fieldset .error');
            if (fieldsetError) fieldsetError.classList.add('visible');
            document.querySelectorAll('.radioption').forEach(function(option) {
                option.classList.add('error-input');
            });
            isValid = false;
        }

        if (isValid) {
            const success = document.querySelector('.success');
            if (success) {
                success.setAttribute('aria-live', 'assertive');
                success.setAttribute('role', 'alert');
                success.style.display = 'flex';
                success.focus();
                setTimeout(function() {
                    success.style.animation = 'slideUp 0.5s ease forwards';
                    setTimeout(function() {
                        success.style.display = 'none';
                        success.style.animation = '';
                    }, 400);
                }, 5000);
            }
            form.reset();
        }
    });

}