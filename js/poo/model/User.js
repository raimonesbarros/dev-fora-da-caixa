export class User{

  static amountUser = 0
  constructor(firstName, lastName, birth, sex, email, password){
    this.id         = User.amountUser
    this._firstname = firstName
    this._lastName  = lastName
    this._birth     = birth
    this._sex       = sex
    this._email     = email
    this._password  = password
    User.amountUser+= 1
  }

  get ID(){
    return this.id
  }

  get firstName(){
    return this._firstname
  }

  get lastName(){
    return this._lastName
  }

  get birth(){
    return this._birth
  }

  get sex(){
    return this._sex
  }

  get email(){
    return this._email
  }

  get password(){
    return this._password
  }
}