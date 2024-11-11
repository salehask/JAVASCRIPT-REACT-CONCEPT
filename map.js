const students = [
    { name: 'sakib', roll: 1 },
    { name: 'sakib', roll: 2 },
    { name: 'sakib', roll: 3 },
    { name: 'sakib', roll: 4 },
];
let names=[];
for(let i =0;i<students.length;i++){
    names.push(students[i].name.toUpperCase());

}
// console.log(names);


const names1 = students.map((stu)=>{
    return stu.name.toUpperCase();

});
// console.log(names1);


const roll1=students.filter((stu)=>{
    return stu.roll>1;
}).map((stu)=>{
    return stu.name.toUpperCase();
})
console.log(roll1);

