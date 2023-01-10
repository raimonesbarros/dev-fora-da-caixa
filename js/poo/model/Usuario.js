export class Usuario{
  _nome
  _sobrenome
  _nascimento
  _email
  _senha
  

  constructor(nome, sobrenome, nascimento, email, senha) {
    this._nome       = nome
    this._sobrenome  = sobrenome
    this._nascimento = nascimento
    this._email      = email
    this._senha      = senha
  }

  get nome(){
    return this._nome
  }

  get sobrenome(){
    return this._sobrenome
  }

  get nascimento(){
    return this._nascimento
  }

  get email(){
    return this._email
  }

  get senha(){
    return this._senha
  }

}
