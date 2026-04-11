const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const emailAddress = document.querySelector('#email-address');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const message = document.querySelector('#message');
const consent = document.querySelector('#consent');


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
        document.querySelector('#email-error').classList.remove('visible');
    });

message.addEventListener('input', function() {
        message.classList.remove('error-input');
        if (message.nextElementSibling) {
            message.nextElementSibling.classList.remove('visible');
        }
    });

consent.addEventListener('change', function() {
        if (consent.checked) {
            document.querySelector('#consent ~ .error').classList.remove('visible');
        }
    });

document.querySelectorAll('input[name="query-type"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.radioption').forEach(function(option) {
            option.classList.remove('error-input');
        });
        document.querySelector('fieldset .error').classList.remove('visible');
    });
});


form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    const queryType = document.querySelector('input[name="query-type"]:checked');


    if (firstName.value.trim() === '') {
        firstName.classList.add('error-input');
        firstName.nextElementSibling.classList.add('visible');
        isValid = false;
    }

    if (lastName.value.trim() === '') {
        lastName.classList.add('error-input');
        lastName.nextElementSibling.classList.add('visible');
        isValid = false;
    }

    if (emailAddress.value.trim() === '') {
        document.querySelector('#email-error').textContent = 'This field is required';
        document.querySelector('#email-error').classList.add('visible');
        isValid = false;
    } else if (!emailRegex.test(emailAddress.value.trim)) {
        document.querySelector('#email-error').textContent = 'Please enter a valid email address';
        document.querySelector('#email-error').classList.add('visible');
        isValid = false;
    }

    if (message.value.trim() === '') {
        message.classList.add('error-input');
        message.nextElementSibling.classList.add('visible');
        isValid = false;
    }

    if (!consent.checked) {
        document.querySelector('#consent ~ .error').classList.add('visible');
        isValid = false;
    }

    if (queryType === null) {
        document.querySelector('fieldset .error').classList.add('visible');
        document.querySelectorAll('.radioption').forEach(function(option) {
            option.classList.add('error-input');
        });
        isValid = false;
    }

    if (isValid) {
        const success = document.querySelector('.success');
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
        form.reset();
    }

    console.log('Form submitted');
});