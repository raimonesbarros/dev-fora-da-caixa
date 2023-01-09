class Usuario{
  _nome
  _sobrenome
  _idade
  _sexo
  _telefone
  _email
  _senha
  static totalUsuarios = 0 //contador de usuarios

  constructor(nome, sobrenome, idade, sexo, email, telefone, senha){
    this._nome      = nome
    this._sobrenome = sobrenome
    this._idade     = idade
    this._sexo      = sexo
    this._telefone  = telefone
    this._email     = email
    this._senha     = senha
    Usuario.totalUsuarios += 1 // incrementar quantidade de usuarios
  }

  get nome(){
    return this._nome
  }

  get sobrenome(){
    return this._sobrenome
  }

  get idade(){
    return this._idade
  }

  get sexo(){
    return this._sexo
  }

  get email(){
    return this._email
  }
  
  get telefone(){
    return this._telefone
  }

  get senha(){
    return this._senha
  }

  get totalUsuarios(){
    return Usuario.totalUsuarios
  }

  set nome(novoNome){
    this._nome=novoNome
  }
}

let novoUsuario = new Usuario()
let novoUsuario1 = new Usuario()



console.log(Usuario.totalUsuarios)