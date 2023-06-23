const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "o nome de usuario é obrigatório.");
    }
}

function setErrorFor(input, message) {
    // const formControl = input.parentElement;
    // formControl.className = 'form-control sucess';
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //adiciona a classe de erro
    small.innertext = message;

    //adiciona a classe de erro
    formControl.classname = 'form-control error';
    

}

function setSuccesFor(input) {
    const formControl = input.parentElement;
    //adicionar class de sucess

    formControl.className = 'form-control sucess';
}