export class Repository{

  constructor(){
    this._objLocal = ''
    this._objJson  = ''
  }

  get user(){
    this.downRepo('_currentUser')
    return this._objLocal
  }

  get repo(){
    this.downRepo('_repository')
    return [].concat(this._objLocal)
  }

  upRepo(list, name){
    this._objLocal = list
    this._objJson  = JSON.stringify(this._objLocal)
    localStorage.setItem(name, this._objJson)
  }

  downRepo(name){
    this._objJson  = localStorage.getItem(name)
    this._objJson ? this._objLocal = JSON.parse(this._objJson) : this._objLocal = []
  }

}
