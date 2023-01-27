let btn = document.querySelector('#vSenha');
let btnConfirm = document.querySelector('#eye');

let msgError = document.querySelector('#msgError');
let msgSucess = document.querySelector('#msgSucess');

let nome = document.querySelector('#nome');
let lebelNome = document.querySelector('#labelNome');
let validarNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validarUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validarSenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha');
let validarConfirmSenha = false;


nome.addEventListener('keyup', () => {
    if(nome.value.length < 3){
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = "Nome * Insira no minimo 3 caracteres"
        nome.setAttribute('style', 'border-color: red');
        validarNome = false;
        
    }else{
        labelNome.setAttribute('style', 'color: rgb(99, 109, 165);');
        labelNome.innerHTML = "Nome";
        nome.setAttribute('style', 'border-color: white');
        validarNome = true;
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length < 4){
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = "Usuário * Insira no minimo 4 caracteres"
        usuario.setAttribute('style', 'border-color: red');
        validarUsuario = false;
    }else{
        labelUsuario.setAttribute('style', 'color: rgb(99, 109, 165);');
        labelUsuario.innerHTML = "Usuário";
        usuario.setAttribute('style', 'border-color: white');
        validarUsuario = true;
    }
}
)

senha.addEventListener('keyup', () => {
    if(senha.value.length < 6){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = "Senha * Insira no minimo 6 caracteres"
        senha.setAttribute('style', 'border-color: red');
        validarSenha = false;
    }else{
        labelSenha.setAttribute('style', 'color: rgb(99, 109, 165);');
        labelSenha.innerHTML = "Senha";
        senha.setAttribute('style', 'border-color: white');
        validarSenha = true;
    }
}
)

confirmSenha.addEventListener('keyup', () => {
    if (senha.value !== confirmSenha.value){
        labelConfirmarSenha.setAttribute('style', 'color: red');
        labelConfirmarSenha.innerHTML = "Senha * Senhas não conferem"
        senha.setAttribute('style', 'border-color: red');
        validarConfirmSenha = false;
    }else{
        labelConfirmarSenha.setAttribute('style', 'color: rgb(99, 109, 165);');
        labelConfirmarSenha.innerHTML = "Senha";
        senha.setAttribute('style', 'border-color: white');
        validarConfirmSenha = true;
    }
})

function cadastrar(){
    if(validarNome && validarUsuario && validarSenha && validarConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
        
        listaUser.push({
            nome: nome.value,
            usuario: usuario.value,
            senha: senha.value,
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser));
        
        setTimeout(()=>{
            window.location.href = '../index.html';
        }, 1700)

        msgSucess.setAttribute('style', ' display: block');
        msgError.setAttribute('style', ' display: none');
    }else{
        msgError.setAttribute('style', ' display: block');   
        msgSucess.setAttribute('style', ' display: none'); 
    }
    
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
        
