//array

const myArr=[0,1,2,3,4,]
const myHeroes= ["shaktiman","ironman"]
const myarry2= new Array(1,2,3,4)
console.log(myArr[0])

//array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArray= myArr.join()
console.log(newArray);
console.log(typeof newArray)


//slice //splice
console.log("a",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("b",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);








