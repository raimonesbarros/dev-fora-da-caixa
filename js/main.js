import { UsuarioController } from '../js/poo/controller/UsuarioController.js'

// Instanciar novo usuario
let usuarioController = new UsuarioController();

// Dados do formulário
let formulario = document.querySelector("form")

formulario.addEventListener("submit", (evt)=>{
    usuarioController.adicionar(evt);
})