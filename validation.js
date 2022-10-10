const submitFormInputElement = document.getElementById("submit-input");

const firstnameInputElement = document.getElementById("first-name");
const lastnameInputElement  = document.getElementById("last-name");
const emailInputElement = document.getElementById("email");

const checkBoxFrontendElement = document.getElementById("frontend-checkbox");
const checkBoxBackendElement = document.getElementById("backend-checkbox");
const checkBoxMobileElement = document.getElementById("mobile-checkbox");
const checkBoxGraphicsElement = document.getElementById("graphics-checkbox");


const alertElement1 = document.getElementById("alert-1");
const alertElement2 = document.getElementById("alert-2");

function handleInputErrors(event) {
    if(!firstnameInputElement.value || !lastnameInputElement.value || !emailInputElement.value || !emailInputElement.value.includes('@')) {
        event.preventDefault();
        
        alertElement1.style.display = "block";
        alertElement1.textContent = "Wprowadź prawidłowe dane";

        firstnameInputElement.style.borderColor = "red";
        lastnameInputElement.style.borderColor = "red";
        emailInputElement.style.border.color = "red";
    }
}

function checkUserChoices(event) {
    if(!(checkBoxFrontendElement.checked || checkBoxBackendElement.checked || checkBoxMobileElement.checked || checkBoxGraphicsElement.checked)) {
        event.preventDefault();

        alertElement2.style.display = "block";
        alertElement2.textContent = "Wybierz co najmniej jedną sekcję"
    }
}

submitFormInputElement.addEventListener("click", handleInputErrors);
submitFormInputElement.addEventListener("click", checkUserChoices);

