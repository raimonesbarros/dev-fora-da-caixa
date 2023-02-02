import { Controller } from "./poo/controller/Controller.js";

const controller = new Controller()

controller.init()

const submit_register = document.querySelector('.submit-register')
const inputs          = document.querySelectorAll('input:not([type=radio])')
const radios          = document.querySelectorAll('input[type=radio]')
const sexLabel        = document.querySelector('.labelsexo')
const submit_login    = document.querySelector('#submit-login')
const toInit          = document.querySelector('.to-init')
const toRegister      = document.querySelectorAll('.to-register')
const exit            = document.querySelector('.exit')
const remove          = document.querySelector('.submit-clear')
const menuBtn         = document.querySelector('.full-sandwich')
const s2              = document.querySelector('.s2')
const s3              = document.querySelector('.s3')
const menu            = document.querySelector('.nav')

menuBtn.addEventListener('click', ()=>{
  s2.classList.toggle('open-s2')
  s3.classList.toggle('open-s3')
  menu.classList.toggle('disable')
})

toRegister.forEach(el=>{
  el.addEventListener('click', ()=> controller.toRegister())
})

inputs.forEach(input=>{
  input.addEventListener('focus', ()=> input.classList.remove('vazio'))
})

submit_login.addEventListener('click', evt=> controller.login(evt))

toInit.addEventListener('click', ()=> controller.init())

submit_register.addEventListener('click', evt=> controller.register(evt))

exit.addEventListener('click', ()=>controller.exit())

remove.addEventListener('click', evt=> controller.deleteAccount(evt))

radios.forEach(radio=>{
  radio.addEventListener('focus', ()=> sexLabel.classList.remove('vazio'))
})
