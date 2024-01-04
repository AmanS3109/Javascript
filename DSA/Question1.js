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
//O(a*b) - TIME COMPLEXITY
//O(1) - SPACE COMPLEXITY

//EFFICIENT SOLUTION

function containsCommonItem2(arr1, arr2){
    //loop through array1 and create object where property === items in the array
    
     let map = {};
     for (let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]){
           const item = arr1[i]
           map[item] = true;
        }
        
     }
//loop through array2 and check if the items in the array2 is there or not in the created object
      for (let j = 0; j < arr1.length; j++){
         if (map[arr2[j]]){
            return true;
         }
      }
      return false;
}
console.log(containsCommonItem2(array1, array2));

//O(a+b) -TIME COMPLEXITY
//O(a) -SPACE COMPLEXITY

