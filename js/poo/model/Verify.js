export class Verify{

  constructor(){
    this.ok    = true
    this.date  = new Date()

    
  }
  
  isEmpty(){
    let input = document.querySelectorAll('register input:not([type=radio])')
    input.forEach(el=>{
      if(!el.value){
        el.classList.add('vazio')
        this.ok = false
      }
    })
  }
  
  hasAge(){
    let inputBirth  = document.querySelector('#nascimento')
    let currentYear = this.date.getFullYear()
    let birth       = new Date(inputBirth.value)
    let birthYear   = birth.getFullYear()
    birthYear < currentYear - 10 ? '' : this.ok = false 
    birthYear < currentYear - 10 ? '' : inputBirth.classList.add('vazio') 
  }
  
  checkRadio(){
    let radio = document.querySelector('input[type=radio]:checked')
    let label = document.querySelector('.labelsexo')
    radio ? '' : this.ok = false
    radio ? '' : label.classList.add('vazio')
  }

  hasUser(list){
    let user = document.querySelector('#email-register')
    list.includes(user.value) ? this.ok = false : ''
    list.includes(user.value) ? user.classList.add('vazio') : ''
  }

  checkPass(){
    let passCreate = document.querySelector('#password-register')
    let passRepeat = document.querySelector('#repeat-password')
    passCreate.value == passRepeat.value ? '' : this.ok = false
    passCreate.value == passRepeat.value ? '' : passRepeat.classList.add('vazio')
    passCreate.value.length < 8 ? this.ok = false : ''
    passCreate.value.length < 8 ? passCreate.classList.add('vazio') : ''
  }

  chekForm(list){
    this.checkPass()
    this.hasUser(list)
    this.checkRadio()
    this.hasAge()
    this.isEmpty()
  }
}