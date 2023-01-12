export class Usuario{
  _nome
  _sobrenome
  _nascimento
  _sexo
  _email
  _senha
  

  constructor(nome, sobrenome, nascimento, sexo, email, senha) {
    this._nome       = nome
    this._sobrenome  = sobrenome
    this._nascimento = nascimento
    this._sexo       = sexo
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

  get sexo(){
    return this._sexo
  }

  get email(){
    return this._email
  }

  get senha(){
    return this._senha
  }

}