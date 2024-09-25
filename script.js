// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const changeMessageBtn = document.getElementById("btn-mudar-frase");

const message = document.getElementsByClassName("mensagem2");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changeMessageBtn.addEventListener("click", function() {
  for(let i = 0; i < message.length; i++){
    message[i].textContent = `Frase modificiada ${i} utlizando Js`;
  }
});

