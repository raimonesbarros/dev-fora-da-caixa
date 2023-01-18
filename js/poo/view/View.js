export class View{

  constructor(){
    this.nameUser = document.querySelector('.saudacao span')
    this.local    = [...document.querySelectorAll('.form-view input')]
  }

  preencher(valores){
    this.nameUser.textContent = valores[0]
    this.local.map((el, i)=>{
      el.value = valores[i]
    })

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

}