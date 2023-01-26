let btn = document.querySelector('#vSenha');
let btnConfirm = document.querySelector('#eye');


btn.addEventListener("click", verSenha);
btnConfirm.addEventListener("click", verConfirmarsenha);

function verSenha(){
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
}

function verConfirmarsenha(){
    let inputConfirmSenha = document.querySelector('#confirmSenha')  

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
}
        
