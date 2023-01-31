export class Repository{

  constructor(){
    this._objLocal = ''
    this._objJson  = ''
  }

  upRepo(list){
    this._objLocal = list
    this._objJson  = JSON.stringify(this._objLocal)
    localStorage.setItem('_repository', this._objJson)
  }

  downRepo(){
    this._objJson  = localStorage.getItem('_repository')
    this._objJson ? this._objLocal = JSON.parse(this._objJson) : this._objLocal = []
  }

  get repo(){
    this.downRepo()
    return [].concat(this._objLocal)
  }
}