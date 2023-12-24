const coding = ['Python', 'Java', 'Javascript', 'C', 'Cpp']

//for each loop used for iterating over arrays and its value as well and return value is undefined
const values = coding.forEach( (item) => {
    console.log(item)
})
console.log(values)

//filter 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNums.filter( (nums) =>  nums > 4)
console.log(newNum)

//map
//const newNum2 = myNums.map((num) => num + 10)
const newNum2 = myNums.map( (num) => num * 10)
.map((num) => num + 1)
.filter((num) => num >= 40) //chaining
console.log(newNum2)

//reduce
const newNum3 = myNums.reduce((acc, num) => {
    console.log(`acc: ${acc} and currentValue: ${num}`);
    return acc + num
}, 0)
console.log(newNum3)

