 const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //db calls, cruptography , network 
    setTimeout(function(){
        console.log('async taks is complete');
        resolve();
    }, 1000);
        
 })

promiseOne.then(function(){
    console.log("promise consumed ");
    
})


new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");;
        resolve();
    }, 1000);
  
        

}).then (function(){
    console.log("async 2 resolved");
})


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"parth",email:"Parth@example.com"});
    },1000);
})
  promisethree.then(function(user){
    console.log(user);


  })      

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh" , password:"123"})
        }else{
            reject('ERROR:something went wrong')
        }
    },1000)
})

promiseFour.then((user) =>{
        console.log(user);
        return user.username
        
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() =>console.log("the promise is either resolved or rejected"))

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"js" , password:"123"})
        }else{
            reject('ERROR:js went wrong')
        }
    },1000)
});

async function consumepromisefive(){
    try{
    const response = await promisefive
    console.log(response);
    }catch (error){
        console.log(error);
    } 
}
consumepromisefive()

// async function getAllusers() {
//     try{
//     const response =await  fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
// }catch(error){
//     console.log("E :",error);
    
// }
// }




// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})  
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


 