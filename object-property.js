const students = [
    {id: 1, name: 'samir'},
    {id: 2, name: 'maruf'},
    {id: 3, name: 'foridul'},
    {id: 4, name: 'rupa'},
    {id: 5, name: 'piklu'},
    {id: 6, name: 'rafin'},
    {id: 7, name: 'reduan'}
]
//======set name for loop======
const friendsNames = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const name = element.name;
    friendsNames.push(name);
}
console.log(friendsNames);

// ======== set names use map in arrow function ========
const names = students.map((s => s.name) );
console.log(names);
//================filter grater than 5 all id  use arrow function ========
const ids = students.filter(s=> s.id > 5);
console.log(ids);
//============find grater than 3 One bigger use arrow function ========
const biggerOne = students.find(s=> s.id > 3);
console.log(biggerOne);