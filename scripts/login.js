"use strict"

const passwordInput = document.querySelector(".password-input");
const togglePasswordInput = document.querySelector(".form__toggle-container__checkbox");

togglePasswordInput.addEventListener("click", () => {
    (passwordInput.getAttribute("type") == "password" ?
        passwordInput.setAttribute("type", "text") :
        passwordInput.setAttribute("type", "password")
    )
});

document.querySelectorAll('.login__form__input-container').forEach(container => {
    const input = container.querySelector('.login__form__input');
    const inputMessage = container.querySelector('.login__form__input-message');

    input.addEventListener('focus', () => {
        // La clase "focused" se usa para desactivar / activar la animación del input cuando el usuario deja de usar el input dependiendo si el input contiene o no información
        container.classList.add('focused');
        input.style.margin = "5px 0px 0px 0px";
    });

    // Evento para detectar si el usuario deja de usar el input
    input.addEventListener('blur', () => {
        if(input.value === '') {
            container.classList.remove('focused');
            input.style.margin = "0px";
            inputMessage.style.margin = "15px 0px 0px 18px";
        }
    });

    inputMessage.addEventListener('click', () => input.focus());

    if(input.textContent !== '') 
        container.classList.add('focused');
});