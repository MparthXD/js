const userEmail =[] 
if (userEmail){
    console.log("got user email");
}else {
    console.log("dont have user email ");
    
}


// falsy values 
// false , 0 , -0 , BigInt 0n , "" null, undefined , NaN


//truthy values
// "0" , 'false' , " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("array is empty");
    
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("object is empty");
    
}


// nullish coalescing operator (??) : null understand 

// let val1;
// // val1 = 5 ?? 10 // first value will be assigned 
// // val2 = null ?? 10
// val1 = undefined ?? 15 
// console.log(val1);

let val1 ;
// val1 = undefined ?? 15 
val1 = null ?? 10?? 10
console.log(val1);


//terniary operator 

// condition ? true : false 

const iceteaprice = 100
iceteaprice >=80 ? console.log("less than 80") : console.log("more than 80")