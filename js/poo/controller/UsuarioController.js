import { Usuario } from "../model/Usuario.js";

export class UsuarioController{
  _inputNome
  _inputSobrenome
  _inputNascimento
  _inputEmail
  _inputSenha

  constructor() {
     this._inputNome       = document.querySelector("#nome-register");
     this._inputSobrenome  = document.querySelector("#sobrenome-register");
     this._inputNascimento = document.querySelector("#nascimento");
     this._inputEmail      = document.querySelector("#email-register");
     this._inputSenha      = document.querySelector("#password-register");
  }
  
  adicionar(evt) {

    evt.preventDefault()
    
    this._novoUsuario()
    console.log(this._novoUsuario())
  }
  
  _novoUsuario() {

    return new Usuario(
      this._inputNome.value,
      this._inputSobrenome.value,
      this._inputNascimento.value,
      this._inputEmail.value,
      this._inputSenha.value
      )
    }
}