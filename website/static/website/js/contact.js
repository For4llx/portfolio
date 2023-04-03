const nameField = document.getElementById("name")
const emailField = document.getElementById("email")
const messageField = document.getElementById("message")
const contactForm = document.getElementById("contactForm")
const email_validation = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/

nameField.addEventListener('input', () => {
    if (nameField.value == "") {
        nameField.classList.remove("input--valid");
    }
    else {
        nameField.classList.add("input--valid");
    }
});

emailField.addEventListener('input', () => {
    const email_clean_data = email_validation.test(emailField.value)

    if (emailField.value == "") {
        emailField.classList.remove("input--valid");
        emailField.classList.remove("input--invalid");
    }
    else if (email_clean_data) {
        emailField.classList.add("input--valid");
        emailField.classList.remove("input--invalid");
    }
    else {
        emailField.classList.remove("input--valid");
        emailField.classList.add("input--invalid");
    }
});

messageField.addEventListener('input', () => {
    if (messageField.value == "") {
        messageField.classList.remove("input--valid");
    }
    else {
        messageField.classList.add("input--valid");
    }
});


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm)
    console.log(formData)

});