(function new1(){
    //named iife
    console.log(`DB CONNCECTED`);

    
})();

(() =>  {
    
    console.log(`DB CONNECTED TWO $(name)`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('parth') 
