import { CreateView } from "./CreateView.js"

export class Show{

  constructor(){
    this.login    = document.querySelector('login')
    this.register = document.querySelector('register')
    this.view     = document.querySelector('view')

    this.createView = new CreateView()
  }

  showInit(){
    this.classList(this.login, this.register, this.view)
  }
  
  showRegister(){
    this.classList(this.register, this.login, this.view)
  }
  
  showView(){
    this.classList(this.view, this.register, this.login)
  }

  showInfo(selectorLocal, data){
    this.createView.viewData(selectorLocal, data)
  }

  classList(enable, disable1, disable2){
    enable.classList.remove('disable')
    disable1.classList.add('disable')
    disable2.classList.add('disable')
  }
}
