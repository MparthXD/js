// // const tinderUser = new Object()
// const tinderuser = {}

// tinderuser.id = "123abc"
// tinderuser.name = "sammy"
// tinderuser.isloggedin = false
// console.log(tinderuser);
// const regularruser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Parth",
//             lastname:"Modi",

//         }
//     }
// }

// console.log(regularruser.fullname.userfullname.firstname);


// const obj1 = {1:"a", 2: "b"}
// const obj2 = {3:"a", 4: "b"}
// const obj4 = {5:"a", 6: "b"}
// // const obj3 = {obj1 , obj2}
// // const obj3 = Object.assign({},obj1,obj2,obj4)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "pmodi8695@gmail.com"
//     }
// ]
// console.log(users[0].email)
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:"js in hindi",
    price :"999",
    courseinstructor : "parth",


}

// course.courseinstructor
const {courseinstructor:instructor} = course
console.log(instructor);


// {
//     "name":"Parth",
//     "cousrename": "js in hindi",
//     "price":"free",
// }

[
    {},
    {},
    {},
]