//given an array, give me back a new array in which every value is multiplied by 2

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// normal soltuion

// const newArray = []

// for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] * 2)
// }
// console.log(newArray) // [2, 4, 6, 8, 10, 12, 14, 16, 18]

//map

// const newArray = array.map((arr)=> arr * 2)
// console.log(newArray) // [2, 4, 6, 8, 10, 12, 14, 16, 18]
 



// function transform(arr){
//     return arr * 2
// }

// let ans = array.map(transform)
// console.log(ans) // [2, 4, 6, 8, 10, 12, 14, 16, 18]


// map function from scratch
// function map(array, transform) {
//     let ans = [];
//     for (let i = 0; i < array.length; i++) {
//         ans.push(transform(array[i]));
//         console.log(transform(array[i]))
//     }
//     return ans;
// }

// let result = map([1, 2, 3, 4], function(arr) {return arr * 2;});
// console.log(result); // [2, 4, 6, 8]

//filter

// normal soluton for filtering out even number from given array
// const newArray = []
// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 2== 0){
//         newArray.push(array[i])
//     }
// }
// console.log(newArray)

//inbuilt solution
// const newArr = array.filter((arr) => arr % 2 == 0)
// console.log(newArr)

// filter from scratch

function filter(array, filtering){
    let ans = []
    for (let i = 0; i < array.length; i++) {
        if (filtering(array[i])) {
            ans.push(array[i]);
        }
   
    }
    return ans
}

let result = filter(array, function(arr) {return arr % 2 == 0})
console.log(result)