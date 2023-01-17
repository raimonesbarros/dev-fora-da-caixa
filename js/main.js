import { UsuarioController } from '../js/poo/controller/UsuarioController.js'
import { Consulta } from './poo/model/Consulta.js'

// Formulário de Cadastro
const inputs       = [...document.querySelectorAll("input:not([type=radio])")]
const nascimmento  = document.querySelector("input[type=date]")
const sexo         = [...document.querySelectorAll("[type=radio]")]
const labelsexo    = document.querySelector(".labelsexo")
const email        = document.querySelector('#email-register')
const senha        = document.querySelector("#password-register")
const repetirSenha = document.querySelector("#repeat-password")
const messenger    = document.querySelector(".messenger")

// Validação
let verify1 = true;
// Expressão de erro
function erro(local){
    local.classList.add("vazio")
    verify1=false
}
//Verificando condições exigidas
function verify(){
    // senhas diferentes ou menores que 8 digitos
    if(senha.value!==repetirSenha.value){
        erro(repetirSenha)
        msgAlert("Senhas NÃO conferem!", 'alert')
    } else if(senha.value.length < 8){
        erro(senha)
        msgAlert("Senha muito curta!", 'alert')
    }
    // buscar radio marcado
    let buscar = sexo.find(el=>{
        return el.checked==true
    })
    if(buscar==undefined){
        erro(labelsexo)
        msgAlert("Marque o campo sexo!", 'alert')
    }
    // buscar idade
    if(diffData() < 13){
        nascimmento.classList.add("vazio")
        msgAlert("Idade deve ser maior que 12 anos!", "alert")
        verify1=false
    }
    // buscar campo vazio
    inputs.map(el=>{
        if(el.value==""){
            erro(el) 
            msgAlert("Campo(s) não preenchido(s)!", 'alert')
        }
    })
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

// Limpar todos os campos
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

    let consulta = new Consulta('#email-register')

    if( consulta.emailLocal == 'sim') {
        erro(email)
        msgAlert("Usuário possui cadastro!", "alert")
    }

    // controlar o envio do formulario
    if(verify1==true){
        usuarioController.adicionar(evt);
        msgAlert("Cadastro efetuado com sucesso!", "sucess")
        limpar()
    }
    verify1 = true
})

// Calcular diferença de data
function diffData(){
    const b_day = new Date(nascimmento.value)
    let date = new Date()
    let yearOld = b_day.getFullYear()
    let currentYear = date.getFullYear()
    let diff = currentYear - yearOld
    return diff
}

function msgAlert(msg, tipo){
    messenger.textContent=msg
    messenger.classList.add(tipo)
    setTimeout(el=>{
        messenger.textContent=''
        messenger.classList.remove(tipo)
    }, 2000)
}