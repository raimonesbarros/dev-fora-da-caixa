import { CreateView } from "../view/CreateView.js"

let show = new CreateView()

export class Verify{

  constructor(){
    this.ok    = true
    this._data = ''
  }

  get data(){
    return [].concat(this._data)
  }
  
  isEmpty(){
    let input = document.querySelectorAll('register input:not([type=radio])')
    input.forEach(el=>{
      if(!el.value){
        this.erro(el, 'Preencha o(s) campo(s) vazio(s)!', 'alert', '.msg-register')
      }
    })
  }
  
  hasAge(){
    let inputBirth  = document.querySelector('#nascimento')
    let currentYear = new Date().getFullYear()
    let birth       = new Date(inputBirth.value).getFullYear()
    if(birth > currentYear - 10){
      this.erro(inputBirth, 'Idade deve ser maior que 10 anos!', 'alert', '.msg-register')
    }
  }
  
  checkRadio(){
    let radio = document.querySelector('input[type=radio]:checked')
    let label = document.querySelector('.labelsexo')
    if(!radio){
      this.erro(label, 'Selecione o campo sexo!', 'alert', '.msg-register')
    }
  }

  hasUser(list){
    let user = document.querySelector('#email-register')
    list.map(el=>{
      if(el._email.includes(user.value)){
        this.erro(user, 'Usuário possui cadastro!', 'alert', '.msg-register')
      }
    })
  }

  checkPass(){
    let passCreate = document.querySelector('#password-register')
    let passRepeat = document.querySelector('#repeat-password')
    if(passCreate.value != passRepeat.value){
        this.erro(passRepeat, 'Senhas não conferem!', 'alert', '.msg-register')
    } else if(passCreate.value.length < 8){
        this.erro(passCreate, 'Senha muito curta!', 'alert', '.msg-register')
    }
  }

  checkLogin(list){
    let user     = document.querySelector('#email-login')
    let pass     = document.querySelector('#password-login')
    let input    = document.querySelectorAll('login input')
    let includes = false
    list.map(el=>{
      el._email.includes(user.value) ? includes = true : ''
      el._email.includes(user.value) ? this._data = el : ''
    })
    if(list[0] && includes){
      let key = this._data._password === pass.value
      key ? '' : this.erro(pass, 'Senha incorreta!', 'alert', '.msg-login')
    } else {
      this.erro(user, 'Usuário não possui cadastro!', 'alert', '.msg-login')
    }

    input.forEach(el=>{
      if(!el.value){
        this.erro(el, 'Preencha o(s) campo(s) vazio(s)!', 'alert', '.msg-login')
      }
    })
  }
  
  erro(el_vazio, msg, type, msgLocal){
    el_vazio.classList.add('vazio')
    this.ok = false
    show.flashMsg(msg, type, msgLocal)
  }

  checkRegister(list){
    this.checkPass()
    this.hasUser(list)
    this.checkRadio()
    this.hasAge()
    this.isEmpty()
  }
}
