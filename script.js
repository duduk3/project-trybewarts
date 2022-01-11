/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
let btnEntrar = document.querySelector('#btn-entrar');
let inputEmail = document.querySelector('#email');
let inputSenha = document.querySelector('#senha');

btnEntrar.addEventListener('click', logar);

function logar() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}
