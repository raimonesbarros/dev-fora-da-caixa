export class View{

  constructor(){
    this.nameUser = document.querySelector('.saudacao span')
    this.local    = [...document.querySelectorAll('.form-view input')]
    this.formEdid = [...document.querySelectorAll('.form-edit')]
  }

  preencher(valores){
    this.nameUser.textContent = valores[0]
    this.local.map((el, i)=>{
      el.value = valores[i]
    })

  }

  edit(dados){

  }
  
  sair(){
    this.nameUser.textContent = ''
    this.local.map(el=>{
      el.value = ''
    })
    
  }
  
  mensagem(txt, tipo, local){
    let loc = document.querySelector(local)
    loc.textContent = txt
    loc.classList.add(tipo)
    setTimeout(()=>{
      loc.textContent = ''
      loc.classList.remove(tipo)
    }, 2000)
  }

  template(dados){
   return `
    <div class="full-name">
      <label for="nome-register"></label>
      <input
        class         = "input"
        type          = "text"
        name          = "nome-register"
        id            = "nome-register"
        value         = "${dados[0]}"
        disabled>
      <label for="sobrenome-register"></label>
      <input
        class         = "input"
        type          = "text"
        name          = "sobrenome-register"
        id            = "sobrenome-register"
        autocomplete  = "family-name"
        value         = "${dados[1]}"
        disabled>
      </div>
      <div class="b-day">
      <label class="input" for="nascimento">Nascimento: </label>
      <input
      class           = "input"
      name            = "nascimento"
      id              = "nascimento"
      value         = "${dados[2]}"
      disabled>
    </div>
    <div class="b-day">
      <label class="input" for="nascimen">Sexo: </label>
      <input
      class           = "input"
      name            = "nascimen"
      id              = "nascimen"
      value         = "${dados[3]}"
      disabled>
    </div>
    <div class="email">
      <label class="input" for="email-register">E-mail: </label>
      <input
        class         = "input"
        type          = "email"
        name          = "email-register"
        id            = "email-register"
        value         = "${dados[4]}"
        disabled>
      </div>
      <div class="create-password">
      <label class="input" for="password-register">Senha: </label>
      <input
        class         = "input"
        type          = "text"
        name          = "password-register"
        id            = "password-register"
        value         = "${dados[5]}"
        disabled>
    </div>
   ` 
  }

  viewUpdate(local, model){
    let update       = document.querySelector(local)
    update.innerHTML = model
  }

}