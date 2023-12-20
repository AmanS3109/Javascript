const x = 4;
const y = 9;
if (x > 5 || y > 10){
    console.log("x is more than 5 or y is more than 10");
}
if (x < 5 && y < 10){
    console.log("x is less than 5 or y is less than 10");
}

//ternary operator
const z = 10;
const color = z > 10 ? "red" : "blue";
console.log(color);

//switches
switch (color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is not red or blue");
        break;
}