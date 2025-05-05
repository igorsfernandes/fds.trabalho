
let botao = document.querySelector("#botao1");

botao.addEventListener("click", exibirMensagem);

function exibirMensagem(){
    document.getElementById('mensagem').innerHTML="Bem-vindo!";
}