import { Consulta } from "./poo/model/Consulta.js";
import { View } from "./poo/view/View.js";

// Área de login
const submit_login   = document.querySelector("#submit-login")
const sair           = document.querySelector('.exit')
let view     = new View()
const loginpage = document.querySelector('login')
const viewpage = document.querySelector('view')

// Efetuar login
submit_login.addEventListener("click", evt=>{
    evt.preventDefault()
    let consulta = new Consulta('#email-login')
    let data = [consulta.nome, consulta.sobrenome, consulta.nascimento, consulta.sexo, consulta.email, consulta.senha]

    const password_login = document.querySelector("#password-login")
    if(consulta.emailLocal === 'sim') {
        
        if(password_login.value === consulta.senha){

            view.preencher(data)
            password_login.value = ''
            loginpage.classList.add('disable')
            viewpage.classList.remove('disable')
        } else {

            view.mensagem('Senha incorreta!', 'alert', '.msg-login')
        }

    } else {
        
        view.mensagem('Usuário não cadastrado!', 'alert', '.msg-login')
    }

})

sair.addEventListener('click', ()=>{

    loginpage.classList.remove('disable')
    viewpage.classList.add('disable')
    view.sair()
})