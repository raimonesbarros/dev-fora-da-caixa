export class Consulta{

  constructor(idEmail){
    this._inputEmail = document.querySelector(idEmail)
    this._emailLocal = localStorage.getItem(this._inputEmail.value) ? 'sim' : 'nao'
    this._dataJSON   = localStorage.getItem(this._inputEmail.value)

  }

  get emailLocal(){
    return this._emailLocal 
  }

  get data(){
    let data = JSON.parse(this._dataJSON)
    return [].concat(data)
  }

  get nome(){
    return this.data[0]._nome
  }

  get sobrenome(){
    return this.data[0]._sobrenome
  }

  get nascimento(){
    return this.data[0]._nascimento
  }

  get sexo(){
    return this.data[0]._sexo
  }

  get email(){
    return this.data[0]._email
  }

  get senha(){
    return this.data[0]._senha
  }

}