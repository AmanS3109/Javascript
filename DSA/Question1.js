//BRUTE/NAIVE SOLUTION

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// function containsCommonItem(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
//O(a*b)

//EFFICIENT SOLUTION

function containsCommonItem2(arr1, arr2){
    //loop through array1 and create object where property === items in the array
    //loop through array2 and check if the items in the array2 is there or not in the created object
     let map = {};
     for (let i = 0; i < arr1.length; i++) {
        if(!map[i]){
           
        }
        
     }
}
console.log(containsCommonItem(array1, array2));
