const person = {
    name: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.name, person.age);
console.log(person.hobbies[1]);
console.log(person.address.city);

//pulling out different things out from the object
const { name, age, address: { city } } = person;
console.log(name, age, city);

//arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
console.log(todos[1].text);
//Json
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//using for loop
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//using for of loop
for (let todo of todos) {
    console.log(todo.id);
}

//forEach, map, filter

todos.forEach(function (todo) {
    console.log(todo.text);//forEach
});

const todoText = todos.map(function (todo) {
    return todo.text; //map
});
console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true; //filter
});
console.log(todoCompleted);

//map in filter
const todoCompleted1 = todos.filter(function (todo) {
    return todo.isCompleted === true; //filter
}).map(function (todo) {
    return todo.text; //map
});
console.log(todoCompleted1);