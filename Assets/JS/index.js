let btn = document.querySelector('.fa-eye');

btn.addEventListener("click", verSenha);

function verSenha() {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
}

function entrar(){
    let usuario = document.querySelector('#usuario');
    let usuarioLabel = document.querySelector('#usuarioLabel');

    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');

    let msgError = document.querySelector('#msgError');
    let listaUser = [];

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
     listaUser.forEach((item)=>{
        if (usuario.value == item.usuario && senha.value == item.senha){
            userValid = {
                nome: item.nome,
                user: item.usuario,
                senha: item.senha
            }
        }
     })

     if(usuario.value == userValid.user && senha.value == userValid.senha){
         window.location.href = "./Assets/inicio.html"

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))

     }else{
        usuario.setAttribute('style', 'border-color: red')
        usuarioLabel.setAttribute('style', 'color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        usuario.focus()
     }
}