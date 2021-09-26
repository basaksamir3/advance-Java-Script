const numbers = [5,4,6,3,7];
//==============use loop square number=========
const output = [];
for(let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
// ======== array map theke 3 ta parmeter pawa jay======
numbers.map(function(element , index , array) {
    console.log(element , index , array);
})

outputResult = [];
// ===== array map ===========
numbers.map(function(element){
    const results = element * element;
    outputResult.push(results);
})
console.log(outputResult);
// =========array map with arrow function ===========
const result = numbers.map(element => element * element);
console.log(result);


// =========================filter================

//=======use arrow function======
const bigger = numbers.filter(x => x < 5);
console.log(bigger);
// ======== with out arrow function======
const smaller = numbers.filter(function(element){
    return element > 6 ;
})
console.log(smaller);

//================find================
// ======== with out arrow function======

const isThere = numbers.find(function(number){
    return number > 5;
})
console.log(isThere);

// ======== user arrow function======
const isItem = numbers.find(x => x < 5);
console.log(isItem);