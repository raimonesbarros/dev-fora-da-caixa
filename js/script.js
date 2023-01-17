import { Consulta } from "./poo/model/Consulta.js";

// Menu Sandwich
const sandwich = document.querySelector(".full-sandwich");
const s1       = document.querySelector(".s1");
const s2       = document.querySelector(".s2");
const s3       = document.querySelector(".s3");
const navMob   = document.querySelector(".nav-mobile");

// Chamar animacoes css
sandwich.addEventListener("click",()=>{
    s1.classList.toggle("enter-s1");
    s2.classList.toggle("enter-s2");
    s3.classList.toggle("enter-s3");
    sandwich.classList.toggle("move");
    navMob.classList.toggle("enter-nav");
})
//fim menu sandwich

// Área de login
const submit_login   = document.querySelector("#submit-login")

// Efetuar login
submit_login.addEventListener("click", evt=>{
    evt.preventDefault()
    let consulta = new Consulta('#email-login')
    const password_login = document.querySelector("#password-login").value
    
    if(consulta.emailLocal === 'sim' && password_login === consulta.senha) {
        
        console.log("tem cadastro")
        console.log(consulta.senha)
        console.log(password_login)


        if(password_login === consulta.senha){
            console.log("senha confere")
        } else {
            console.log("Senha errada")
        }

    } else {
        console.log("nao tem cadastro")
    }

})