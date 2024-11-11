const user = {
    name: 'sakib',
    age: 22,
    address: {
        city: 'dhaka',
        country: 'Bangladesh',
    },
}
const {address :{country}} = user;
// console.log(country);


function getItens(fruitslist,favoritefruit,...args){
    return [...fruitslist,...args,favoritefruit];   
}
console.log(getItens(["apple","banana"], "orange","mango","grapes"));