const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const emailAddress = document.querySelector('#email-address');
const message = document.querySelector('#message');
const consent = document.querySelector('#consent');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const queryType = document.querySelector('input[name="query-type"]:checked');


    if (firstName.value.trim() === '') {
        firstName.classList.add('error-input');
        firstName.nextElementSibling.classList.add('visible');
    }

    if (lastName.value.trim() === '') {
        lastName.classList.add('error-input');
        lastName.nextElementSibling.classList.add('visible');
    }

    if (emailAddress.value.trim() === '') {
        emailAddress.classList.add('error-input');
        emailAddress.nextElementSibling.classList.add('visible');
    }

    if (message.value.trim() === '') {
        message.classList.add('error-input');
        message.nextElementSibling.classList.add('visible');
    }

    if (!consent.checked) {
        document.querySelector('#consent ~ .error').classList.add('visible');
    }

    if (queryType === null) {
        document.querySelector('fieldset .error').classList.add('visible');
        document.querySelectorAll('.radioption').forEach(function(option) {
            option.classList.add('error-input');
        });
    }

    console.log('Form submitted');
});