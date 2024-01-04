const array = ['a', 'b', 'c', 'd']

//push(value)
array.push('e') //O(1)


//pop(index) 
array.pop() //O(1)


//Unshift(value automatically by default added on oth index)
array.unshift('z') //O(n)


//splice(index, deletecount, value by default added on middle position)
array.splice(2, 0, 'alien') //O(n/2) => O(n)
console.log(array)
