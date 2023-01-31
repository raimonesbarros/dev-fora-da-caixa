export class Show{

  constructor(){
    this.login    = document.querySelector('login')
    this.register = document.querySelector('register')
    this.view     = document.querySelector('view')
  }

  showInit(){
    this.login.classList.remove('disable')
    this.register.classList.add('disable')
    this.view.classList.add('disable')
  }

  showRegister(){
    this.register.classList.remove('disable')
    this.login.classList.add('disable')
    this.view.classList.add('disable')
  }

  showView(){
    this.view.classList.remove('disable')
    this.login.classList.add('disable')
    this.register.classList.add('disable')
  }
}