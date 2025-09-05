let myname ="parth"
console.log(myname.trim().length);

let myheroes = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman: "sling",
 
    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
                 
}

Object.prototype.parth = function(){
    console.log("parth is present in all objects");
    
}

// heroPower.parth()  
myheroes.parth()

Array.prototype.heyparth = function(){
    console.log(`parth says hello`);
    
}
myheroes.parth()
myheroes.heyparth()
// heroPower.heyparth()


//inhertiance
const user ={
    name: "parth",
    email : "parth@google.com"
}


const teacher = {
    makevideo:true
}

const teachingsupport = {
    isavaialable: false
}

const tasupport = {
    makeassignment : 'js assignment',
    fulltime:true,
    _proto_: teachingsupport
}

teacher._proto_ =user

//modern syntax
Object.setPrototypeOf(teachingsupport,teacher)

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is:${this.trim().length}`);
       
}