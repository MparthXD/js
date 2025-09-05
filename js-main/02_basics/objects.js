//singleton
//object.create 

//object literals
const mysym = Symbol("key1")



const jsuser = {
    name:"Parth",
    age:19,
    location:"Bhopal",
    [mysym] :"mykey1",
    email:"pmodi8695@gmail.com",
    isloggedIn:false,
    lastlogindays:["monday","saturday"]

}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysym]);
jsuser.email= "parth@google.com"
// Object.freeze(jsuser)
jsuser.email= "parth@yahoo.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello JS user");

    
}
jsuser.greeitngTwo = function(){
    console.log(`hello js user,${this.name}`);
}
    
    
    
    
console.log(jsuser.greeting());
console.log(jsuser.greeitngTwo());
    
