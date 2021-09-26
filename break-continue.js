const numbers = [1,2,-15,0,12,1];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        break;
    }
    console.log(numbers[i]);
}
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 2) {
        continue;
    }
    console.log(numbers[i]);
}