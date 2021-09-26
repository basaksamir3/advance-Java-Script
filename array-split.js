const friendsNames = ['samir','rafin','fokrul','piklu','maruf'];

// remove index from 2 to 4 er maje - fokrul -piklu
const part = friendsNames.slice(2,4);
console.log(part);
console.log(friendsNames);

// remove index to number 1 to 3---rafin,fokrul,piklu
const remove = friendsNames.splice(1,3 ,'foridul');
console.log(remove);
console.log(friendsNames);

// add index with string 
const add = friendsNames.join(" amra room mate ");
console.log(add);