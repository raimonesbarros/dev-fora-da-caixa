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

  template(data){
    if(data){
      const name = document.querySelector('.saudacao span')
      name.innerHTML = data[0]._firstname
      return `
       <div class="full-name">
         <label for="nome-register"></label>
         <input
           class         = "input"
           type          = "text"
           value         = "${data[0]._firstname}"
           disabled>
         <label for="sobrenome-register"></label>
         <input
           class         = "input"
           type          = "text"
           value         = "${data[0]._lastName}"
           disabled>
         </div>
         <div class="b-day">
         <label class="input" for="nascimento">Nascimento: </label>
         <input
         class           = "input"
         value         = "${data[0]._birth}"
         disabled>
       </div>
       <div class="b-day">
         <label class="input" for="nascimen">Sexo: </label>
         <input
         class           = "input"
         value           = "${data[0]._sex}"
         disabled>
       </div>
       <div class="email">
         <label class="input" for="email-register">E-mail: </label>
         <input
           class         = "input"
           type          = "email"
           value         = "${data[0]._email}"
           disabled>
         </div>
         <div class="create-password">
         <label class="input" for="password-register">Senha: </label>
         <input
           class         = "input"
           type          = "text"
           value         = "${data[0]._password}"
           disabled>
       </div>
      ` 
    }
   }
 
   viewData(selectorLocal, data){
     let update       = document.querySelector(selectorLocal)
     update.innerHTML = this.template(data)
   }
}
