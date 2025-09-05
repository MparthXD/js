//ES6

class user{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase}`
    }
}

const parth = new user ("parth","parth@gmail.com")
console.log(parth.encryptPassword());
console.log(parth.changeusername);

//bebhind the scene 

function User(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new User("tea","tea@gmail.com","123")
console.log(parth.encryptPassword());
console.log(parth.changeusername());
