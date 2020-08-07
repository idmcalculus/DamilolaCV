document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.contact-form input').focus();
    const validateName = () => {
        const name = document.querySelectorAll('.contact-form input')[0];
        if (!name.value || !name.value.trim()) return alert(`Name is required`);
        /*const isValid = /^([A-Za-z])\s([A-Za-z])$/.test(name.value);
        if (!isValid) {
            alert(`Kindly input a valid name, only alphabets expected`)
            return name.classList.add('is-invalid')
        }
        return name.classList.remove('is-invalid');*/
          };
    const validateEmail = () => {
        const email = document.querySelectorAll('.contact-form input')[1];
        if (!email.value || !email.value.trim()) return alert(`Email is required`);
        const isValid = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3})+$/.test(email.value);
        if (!isValid) {
            alert(`Kindly input a valid email address`)
            return email.classList.add('is-invalid')
        }
        return email.classList.remove('is-invalid');
    };
    const validateTitle = () => {
        const title = document.querySelectorAll('.contact-form input')[2];
        if (!title.value || !title.value.trim()) return alert(`Kindly give your message a title`);
        /*const isValid = /^([A-Za-z0-9.,-?;:'"])$/.test(title.value);
        if (!isValid) {
            alert(`Kindly input a valid title`)
            return title.classList.add('is-invalid')
        }
        return title.classList.remove('is-invalid');*/
    };
    const validateMessage = () => {
        const message = document.querySelector('.contact-form textarea');
        if (!message.value || !message.value.trim()) return alert(`I look forward to hearing from you, kindly input a message`);
        if (message.value.length < 20) {
            alert(`at least 20 characters expected, thanks`)
            return message.classList.add('is-invalid')
        }
        return message.classList.remove('is-invalid');
    };
    const validateInputs = () => {
        validateName();
        validateEmail();
        validateTitle();
        validateMessage();
    };
    document.querySelector('#submit').addEventListener('click', validateInputs);


});