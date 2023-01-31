import { User }       from "../model/User.js";
import { UserList }   from "../model/UserList.js";
import { Verify }     from "../model/Verify.js";
import { Repository } from "./Repository.js";

let userList = new UserList()
let verify   = new Verify()

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

  add(evt){
    evt.preventDefault()

    verify.chekForm(userList.list)

    verify.ok ? userList.addUser(this.newUser()) : ''
    verify.ok ? this.clearForm() : ''

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