const btnEntrar = document.querySelector('#btn-entrar');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');

function logar() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnEntrar.addEventListener('click', logar);

const ativarBotao = document.getElementById('agreement');
document.getElementById('submit-btn').disabled = true;

function enviar() {
  document.getElementById('submit-btn').disabled = false;
}

ativarBotao.addEventListener('click', enviar);

const textArea = document.querySelector('#textarea');
const countTextarea = document.querySelector('#counter');

textArea.addEventListener('keyup', () => {
  countTextarea.innerHTML = 500 - textArea.value.length;
});
