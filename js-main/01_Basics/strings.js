const name="Parth"
const repoCount = 50

// console.log(name +repoCount +"Value");
console.log(`Hello  my name is ${name} and my repo count is ${repoCount}}`);

const gameName = new String (`parth-Tech-com`)
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString=gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);



const newStringone="        Parth      "
console.log(newStringone);
console.log((newStringone.trim()));

const url = "https://Parth.com/parth%20modi"
console.log(url.replace('%20','-'));
console.log(gameName.split('-'));
