import { UsuarioController } from '../js/poo/controller/UsuarioController.js'

// Formulário de Cadastro
const inputs       = [...document.querySelectorAll("input:not([type=radio])")]
const sexo         = [...document.querySelectorAll("[type=radio]")];
const labelsexo    = document.querySelector(".labelsexo")
const senha        = document.querySelector("#password-register")
const repetirSenha = document.querySelector("#repeat-password")

// Validação
let verify1 = true;
// Expressão de erro
function erro(){
    labelsexo.classList.add("vazio")
    verify1=false
}
//Verificando condições exigidas
function verify(){
    // buscar radio marcado
    let buscar = sexo.find(el=>{
         return el.checked==true
    })
    if(buscar==undefined){
        erro()
    }
    // buscar campo vazio
    inputs.map(el=>{
        if(el.value==""){
            el.classList.add("vazio")
            verify1 = false; 
        }
    })
    // senhas diferentes ou menores que 8 digitos
    if(senha.value!==repetirSenha.value || senha.value.length < 8){
        repetirSenha.classList.add("vazio")
        senha.value=''
        repetirSenha.value=''
        verify1 = false;
    }
} // Fim da validação

// Revover expressão de erro do elemento em foco
inputs.map(el=>{
    el.addEventListener("focus", evt=>{
        let event=evt.target
        event.classList.remove("vazio")
    })
})
sexo.map(el=>{
    el.addEventListener("focus", evt=>{
        labelsexo.classList.remove("vazio")
    })
})

function limpar(){
    inputs.map(el=>{
        el.value=''
    })
    sexo.map(el=>{
        el.checked=false
    })
}

// Instanciar novo usuario
let usuarioController = new UsuarioController();

// Dados do formulário
let formulario = document.querySelector("form")

// Enviar formulário para adicionar
formulario.addEventListener("submit", (evt)=>{
    evt.preventDefault()
    verify()
    // controlar o envio do formulario
    if(verify1==true){
        usuarioController.adicionar(evt);
        limpar()
    }
    verify1 = true
})

