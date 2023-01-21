import { Usuario }       from "../model/Usuario.js";
import { ListaUsuarios } from "../model/ListaUsuarios.js";

export class UsuarioController{

  constructor() {
     this._inputNome       = document.querySelector("#nome-register");
     this._inputSobrenome  = document.querySelector("#sobrenome-register");
     this._inputNascimento = document.querySelector("#nascimento");
     this._inputSexo       = document.querySelector("[type=radio]");
     this._inputEmail      = document.querySelector("#email-register");
     this._inputSenha      = document.querySelector("#password-register");

     this._listaUsuarios   = new ListaUsuarios();
  }
  
  adicionar() {
  
    let _usuarioJSON = JSON.stringify(this._novoUsuario())
    localStorage.setItem(this._inputEmail.value, _usuarioJSON)

    this._listaUsuarios.adicionar(this._novoUsuario())
  }
  
  _novoUsuario() {
    return new Usuario(
      this._inputNome.value,
      this._inputSobrenome.value,
      this._inputNascimento.value,
      this._inputSexo = sexoValue,
      this._inputEmail.value,
      this._inputSenha.value
      )
    }
}
// Buscar e setar o o valor para o sexo
const sexo    = [...document.querySelectorAll("[type=radio]")]
let sexoValue = '';
sexo.map(el=>{
    el.addEventListener("click", evt=>{
        const event = evt.target
        sexoValue   = event.value
    })
})