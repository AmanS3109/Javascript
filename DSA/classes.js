class Player {  // while making class constructor is neccesary 
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    introduce(){ //created function or method inside classes
        console.log(`Hi I am ${this.name} and I am ${this.type}`)
    }
}

class wizard extends Player { //inheritance uses extends keyword
    constructor(name, type) {
        super(name, type) // inheriting the property of above class in this class 
    }                     //we use super() method
    play(){
        console.log(`WEEEE I'm ${this.type}`)
    }
}

const wizard1 = new wizard('Shruti', 'Healer');
const wizard2 = new wizard('Aman', 'Science Magic');
console.log(wizard1.introduce())