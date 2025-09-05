class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this.email.toUpperCase()
    }
    set email(value){
         this._email = value
    }

    get password(){
        return `${this._password}hitesh`

    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const hitesh = new user("h@hitesh.ai","abc")
console.log(hitesh.email);
