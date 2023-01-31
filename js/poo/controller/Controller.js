import { User }       from "../model/User.js";
import { UserList }   from "../model/UserList.js";
import { Verify }     from "../model/Verify.js";
import { Repository } from "./Repository.js";
import { CreateView } from "../view/CreateView.js";
import { Show }       from "../view/Show.js";

let userList   = new UserList()
let verify     = new Verify()
let repository = new Repository()
let createView = new CreateView()
let show       = new Show()

export class Controller{

  constructor(){
    this.fname = document.querySelector('#nome-register')
    this.lname = document.querySelector('#sobrenome-register')
    this.birth = document.querySelector('#nascimento')
    this.sex   = document.querySelectorAll('input[type=radio]')
    this.email = document.querySelector('#email-register')
    this.pass  = document.querySelector('#password-register')
    this.pass2 = document.querySelector('#repeat-password')

  }

  createRepo(){
    repository.repo[0] ? '' : localStorage.setItem('_repository', [])
  }

  login(evt){
    evt.preventDefault()

    verify.checkLogin(repository.repo)
    if(verify.ok){
      show.showView()
    }
    verify.ok = true
  }

  register(evt){
    evt.preventDefault()

    
    verify.checkRegister(repository.repo)
    
    if(verify.ok){
      let last = repository.repo.length
      last > 0 ? User.amountUser = repository.repo[last-1].id + 1 : User.amountUser = 1

      userList.setList(repository.repo)
      userList.addUser(this.newUser())
      repository.upRepo(userList.list)

      this.clearForm()

      createView.flashMsg('Cadastro efetuado com sucesso!', 'sucess', '.msg-register')

      setTimeout(()=>{
        show.showInit()
      }, 2000)
    }


    verify.ok = true

  }

  newUser(){
    let sex = document.querySelector('input[type=radio]:checked')
    return new User(
      this.fname.value,
      this.lname.value,
      this.birth.value,
      sex.value,
      this.email.value,
      this.pass.value
    )
  }

  clearForm(){
    this.fname.value = ''
    this.lname.value = ''
    this.birth.value = ''
    this.email.value = ''
    this.pass.value  = ''
    this.pass2.value = ''
    this.sex.forEach(el=>{
      el.checked=false
    })

    this.fname.focus()
  }
  
}