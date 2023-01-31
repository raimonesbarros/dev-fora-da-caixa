export class UserList{

  constructor(){
    this._list = []
  }

  addUser(user){
    this._list.push(user)
  }

  removeUser(user){
    this._list = this._list.filter(el=>{
      return el._user!=user
    })
  }

  setList(list){
    this._list = list
  }

  get list(){
    return [].concat(this._list)
  }
}