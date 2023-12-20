const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

//multiple data type in single array(this happens in js and python only not in java and c or c++)
const fruits = ["apples", "oranges", "pears", 10, true];
fruits.push('mangoes'); // push the value in the last of the array
fruits.unshift('strawberries'); // push the value in the first of the array
fruits.pop(); // remove the last value from the array
fruits.shift(); // remove the first value from the array
console.log(fruits);