"use strict"

const inputContainers = document.querySelectorAll(".login__form__input-container");
const passwordInput = document.querySelectorAll(".password-input");
const toggleInputContainer = document.querySelectorAll(".form__toggle-container__checkbox");

toggleInputContainer.forEach(input => 
    input.addEventListener("click", () => 
        passwordInput.forEach(input => 
            input.getAttribute("type") == "password" ?
            input.setAttribute("type", "text") :
            input.setAttribute("type", "password")
        )
    )
);

inputContainers.forEach(container => {
    const input = container.querySelector(".login__form__input");
    const inputMessage = container.querySelector(".login__form__input-message");

    input.addEventListener('focus', () => {
        // La clase "focused" se usa para desactivar / activar la animación del input cuando el usuario deja de usar el input dependiendo si el input contiene o no información
        container.classList.add('focused');
        input.style.margin = "2px 0px 0px 0px";
    });

    // Evento para detectar si el usuario deja de usar el input
    input.addEventListener('blur', () => {
        if(input.value === '') {
            container.classList.remove('focused');
            input.style.margin = "0px";
            inputMessage.style.margin = "15px 0px 0px 20px";
        }
    });

    inputMessage.addEventListener('click', () => input.focus());

    if(input.textContent !== '') 
        container.classList.add('focused');
});