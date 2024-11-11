// console.log(a);
// var a=5;

// console.log(a);
// let a=5;      REFERENCE ERROR 



// LET AND CONST ARE HOISTIED BUT THERE ARE IN TEMPORARLY DEAD ZONE 

for(var i =0;i<6;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
   
    
}