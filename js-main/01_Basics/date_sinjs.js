//Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString);
console.log(myDate.toLocaleDateString());

let mycreatedate = new Date(2025,0,25)
console.log(mycreatedate.toDateString());


let mytimestamp =Date.now()
console.log(mytimestamp);
console.log(mycreatedate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth() + 1 );
console.log(newdate.getDay());


newdate.toLocaleString('default',{
    weekday:"long",
   
})
console.log(newdate);





