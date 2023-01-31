import { Controller } from "./poo/controller/Controller.js";


const controller = new Controller()

const submit_register = document.querySelector('.submit-register')
const inputs          = document.querySelectorAll('input:not([type=radio])')
const radios          = document.querySelectorAll('input[type=radio]')
const sexLabel        = document.querySelector('.labelsexo')

submit_register.addEventListener('click', evt=>{

  controller.add(evt)

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