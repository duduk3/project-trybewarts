<<<<<<< HEAD
=======
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
>>>>>>> 9e7b48bf650c929bf29b0a7a0c19069d9415a445
const btnEntrar = document.querySelector('#btn-entrar');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');

function logar() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}
btnEntrar.addEventListener('click', logar);
