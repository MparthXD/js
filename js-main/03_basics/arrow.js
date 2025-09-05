const user = {
    username:"Parth",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome  to website`);
        console.log(this);
        
    
    }

}



// user.welcomeMessage()
// user.username= "sam"  
// user.welcomeMessage()
// console.log(this);

// function new1(){
//     let username="parth"
//     console.log(this.username);
     
// }

// new1()

const new1=() => {
    let username="parth"
    console.log(this);
}     

// new1()

// const addtwo = (num1,num2) => {
//     return num1 + num2 
// }
// console.log(addtwo(3,4))

// const addtwo = (num1,num2) =>num1 + num2 
// const addtwo = (num1,num2) =>(num1 + num2) 
const addtwo = (num1,num2) =>{username:"Parth"} 


console.log(addtwo(3,4))

const myArray = [2,5,3,7,8]

myArray.forEach()
