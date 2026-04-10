const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const emailAddress = document.querySelector('#email-address');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const message = document.querySelector('#message');
const consent = document.querySelector('#consent');


firstName.addEventListener('input', function() {
        firstName.classList.remove('error-input');
        firstName.nextElementSibling.classList.remove('visible');
    });

lastName.addEventListener('input', function() {
        lastName.classList.remove('error-input');
        lastName.nextElementSibling.classList.remove('visible');
    });

emailAddress.addEventListener('input', function() {
        emailAddress.classList.remove('error-input');
        document.querySelector('#email-required-error').classList.remove('visible');
        document.querySelector('#email-format-error').classList.remove('visible');
    });

message.addEventListener('input', function() {
        message.classList.remove('error-input');
        message.nextElementSibling.classList.remove('visible');
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
        emailAddress.classList.add('error-input');
        document.querySelector('#email-required-error').classList.add('visible');
        isValid = false;
    } else if (!emailRegex.test(emailAddress.value)) {
        emailAddress.classList.add('error-input');
        document.querySelector('#email-format-error').classList.add('visible');
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
        document.querySelector('.success').style.display = 'flex';
        setTimeout(function() {
            document.querySelector('.success').style.animation = 'slideUp 0.5s ease forwards';
            setTimeout(function() {
                document.querySelector('.success').style.display = 'none';
                document.querySelector('.success').style.animation = '';
            }, 400);
        }, 5000);
        form.reset();
    }

    console.log('Form submitted');
});