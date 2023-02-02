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
    
  }

}
