function add(num1, num2){
    return num1 + num2; 
}
function multiply(num1, num2){
    return num1 * num2;
}
function calculation(num1, num2, operation){
    return operation(num1, num2);
}

console.log(calculation(4, 3, add));