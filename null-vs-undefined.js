//undefined
let names;
console.log(names);

//========no return=========
function add(num1,num2){
    console.log(num1+num2);
}
const result = add(10,12);
console.log(result);
// =========no second parameter==========
function adds(num1,num2){
    console.log(num2);
    return num2;
}
const results = adds(15);
console.log(results);
// ========undefined reserved word =========
let fun = undefined;
console.log(fun);

// ==========phone properties not with students object=========
const students = {
    name:"samir",
    id: 101,
    salary : 2500
}

console.log(students.phone);

// ====== 6 index not array properties=====

const ages = [15,19,12,10,45];
console.log(ages[6]);