let btn = document.querySelector('#vSenha');
let btnConfirm = document.querySelector('#eye');

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');

let nome = document.querySelector('#nome');
let lebelNome = document.querySelector('#labelNome');

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha');

usuario.addEventListener('keyup', () => {
    if(usuario.value.length < 4){
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = "Usuário * Insira no minimo 4 caracteres"
        usuario.setAttribute('style', 'border-color: red');

    }else{
        labelUsuario.setAttribute('style', 'color: rgb(99, 109, 165);');
        labelUsuario.innerHTML = "Usuário";
        usuario.setAttribute('style', 'border-color: white');
        
    }
}
)



nome.addEventListener('keyup', () => {
    if(nome.value.length < 3){
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = "Nome * Insira no minimo 3 caracteres"
        nome.setAttribute('style', 'border-color: red');

    }else{
        labelNome.setAttribute('style', 'color: rgb(99, 109, 165);');
        labelNome.innerHTML = "Nome";
        nome.setAttribute('style', 'border-color: white');
        
    }
})

function cadastrar(){
    alert('Cadastro realizado com sucesso');
    
}

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
        
