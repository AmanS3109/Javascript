function sum(a, b) { //callback function
    console.log( a + b);
}
function calculator(a, b, sumCallback) {
    sumCallback(a, b) 
}

calculator(1, 2, sum)