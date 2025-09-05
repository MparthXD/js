// //  function saymyname(){
// //     console.log("p");
// //     console.log("a");
// //     console.log("r");
// //     console.log("t");
// //     console.log("h");
// // }
// // saymyname()

// // function addtwonumbers(number1 , number2 ){
// //     console.log(number1 +  number2);
    
// // }

// // function addtwonumbers(number1 , number2 ){
// //     // let result = number1 + number2
// //     // return result
// //     return number1 + number2
   

// // }

// // const result = addtwonumbers(3 , 4)

// // console.log("result:", result);

// function loginUsermessage(username = "sam"){
//     if(username=== undefined){
//         console.log("please enter a username");
//         return
//     }

//     return `${username} just logged in `
// }
// console.log(loginUsermessage("Parth"))   

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));


const user={
    username:"Parth",
    price:199,

}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobject(user)
handleobject({
    username:"sam",
    price: 199,
})
// const NewArray = [200 , 400 , 700, 1000]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue([200 , 400 , 700, 1000]));
