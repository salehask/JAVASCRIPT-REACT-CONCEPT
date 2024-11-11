// function test(){
//     let a = 10;
//     if(true){
//         var a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();
// THESE IS INVALID BECUASE BOTH LET AND VAR HAVE FUNCTIONAL SCOPE IN THESE CODE AS VAR HAS ALREADY FUNCTION SCOPE
// LET HAS DECLEARD ON TOP FUNCTION TEST() SO IT ALSO HAVE FUNCTIONAL SCOPE


function test(){
    var a = 10;
    if(true){
        var a = 20;
        console.log(a);
    }
    console.log(a);
}
test();


function test(){
    var a = 10;
    if(true){
        let a = 20;
        console.log(a);
    }
    console.log(a);
}
test();