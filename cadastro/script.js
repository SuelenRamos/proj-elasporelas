const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Este campo é obrigatório');
    }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
        setError(usernameInput, 'O nome precisa ter no mínimo 5 e no máximo 15 caracteres');
    }else {
        setSuccess(usernameInput);
    }
    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Este campo é obrigatório');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Insira um email válido');
    }

    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Este campo é obrigatório');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Asenha deve ter no mínimo 6 e no máximo 20 caracteres');
    }else {
        setSuccess(passwordInput);
    }
    //CONFIRM PASSWORD
    if(confirmPasswordInput.value.trim()==''){
        setError(confirmPasswordInput, 'Este campo é obrigatório');
    }else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, 'As senhas não batem');
    }else {
        setSuccess(confirmPasswordInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}