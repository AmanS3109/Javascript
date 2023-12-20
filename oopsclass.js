class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
// Instantiate object(creating an instance of an object)
const person1 = new Person('Aman', 'Shukla', '4-3-1980');
const person2 = new Person('Shruti', 'Singh', '3-6-1970');
console.log(person1);
console.log(person2.dob);
console.log(person1.getBirthYear());
console.log(person2.getFullName());
