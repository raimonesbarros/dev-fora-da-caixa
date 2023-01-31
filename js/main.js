import { Show }       from "./poo/view/Show.js";
import { Controller } from "./poo/controller/Controller.js";

const show = new Show()
const controller = new Controller()

show.showInit()
controller.createRepo()

const submit_register = document.querySelector('.submit-register')
const inputs          = document.querySelectorAll('input:not([type=radio])')
const radios          = document.querySelectorAll('input[type=radio]')
const sexLabel        = document.querySelector('.labelsexo')
const submit_login    = document.querySelector('#submit-login')
const toRegister      = document.querySelectorAll('.for-register')
const toLogin         = document.querySelector('.for-login')


submit_login.addEventListener('click', evt=>{

  controller.login(evt)

})

toRegister.forEach(el=>{
  el.addEventListener('click',()=>{
    show.showRegister()
  })
})

toLogin.addEventListener('click', ()=>{
  show.showInit()
})

submit_register.addEventListener('click', evt=>{
  
  controller.register(evt)

})

inputs.forEach(input=>{
  input.addEventListener('focus', ()=>{
    input.classList.remove('vazio')
  })
})

radios.forEach(radio=>{
  radio.addEventListener('focus', ()=>{
    sexLabel.classList.remove('vazio')
  })
})