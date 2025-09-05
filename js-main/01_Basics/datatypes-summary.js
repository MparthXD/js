//primitive

//7 types : String , Number , Null,undefined , Symbol, BigInt


// const score = 100  
// const scorevalue=100.3
// const isLoggedIn = false
// const outsideTemp=null
// let useremail;

// const id = symbol('123')
// const anotherId=symbol('123')
// console.log(id===anotherId);


// const bigNmber=46656512316541n






//Reference (Non primitive)

//Array , Objects, Functions
const heros = ["shaktiman","naagraj","doga"]
let myObj={
    name:"Parth",
    age:"22",

}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof outsideTemp);

//stack(Primitive) , Heap(non-primitive)
let myYoutubeName ="hiteshchaudharydotcom";
let anotherName=myYoutubeName;
anotherName="chai aur code"

let Userone={
    email :"user@google.com",
    upi :"user@ybl"

}

let Usertwo=Userone

Usertwo.email="Parth@google.com"


console.log(Userone.email);


console.log(Usertwo.email);