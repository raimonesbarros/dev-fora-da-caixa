export class CreateView{

  constructor(){
    this.viewLocal = document.querySelector('view')
  }
  
  flashMsg(msg, type, selector){
    const local = document.querySelector(selector)
    local.classList.add(type)
    local.innerHTML = msg
    setTimeout(()=>{
      local.classList.remove(type)
      local.innerHTML = ''
    }, 2000)
  }

  view(data){
    let top    = document.createElement('div')
    let main   = document.createElement('main')
    let h1     = document.createElement('h1')
    let btn    = document.createElement('button')
    let dialog = document.createElement('div')
    let aRegis = document.createElement('div')
    let logo   = document.createElement('img')
    let h2     = document.createElement('h2')
    let form   = document.createElement('form')
    
  }

  template(data){
    return `
     <div class="full-name">
       <label for="nome-register"></label>
       <input
         class         = "input"
         type          = "text"
         name          = "nome-register"
         id            = "nome-register"
         value         = "${data[0]}"
         disabled>
       <label for="sobrenome-register"></label>
       <input
         class         = "input"
         type          = "text"
         name          = "sobrenome-register"
         id            = "sobrenome-register"
         autocomplete  = "family-name"
         value         = "${data[1]}"
         disabled>
       </div>
       <div class="b-day">
       <label class="input" for="nascimento">Nascimento: </label>
       <input
       class           = "input"
       name            = "nascimento"
       id              = "nascimento"
       value         = "${data[2]}"
       disabled>
     </div>
     <div class="b-day">
       <label class="input" for="nascimen">Sexo: </label>
       <input
       class           = "input"
       name            = "nascimen"
       id              = "nascimen"
       value         = "${data[3]}"
       disabled>
     </div>
     <div class="email">
       <label class="input" for="email-register">E-mail: </label>
       <input
         class         = "input"
         type          = "email"
         name          = "email-register"
         id            = "email-register"
         value         = "${data[4]}"
         disabled>
       </div>
       <div class="create-password">
       <label class="input" for="password-register">Senha: </label>
       <input
         class         = "input"
         type          = "text"
         name          = "password-register"
         id            = "password-register"
         value         = "${data[5]}"
         disabled>
     </div>
    ` 
   }
 
   viewData(local, model){
     let update       = document.querySelector(local)
     update.innerHTML = model
   }
}