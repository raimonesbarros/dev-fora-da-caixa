export class ListaUsuarios{

  constructor(){
    this._usuarios = [];
  }

  adicionar(usuario){
    this._usuarios.push(usuario);
  }

  get usuarios(){
    return [].concat(this._usuarios)
  }
}