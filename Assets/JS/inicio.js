let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let msgLogado = document.querySelector('#msgLogado');



if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página!')
    window.location.href = '../../index.html'
}else{
    msgLogado.innerHTML = 'Bem Vindo,  '+ userLogado.nome
}
function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogad')
    window.location.href = '../../index.html'
}