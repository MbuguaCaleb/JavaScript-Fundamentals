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
        text: 'Take Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//json
//It is a data format :We send data to and receive it from a server
//while it is in JSON Format//JSON IS VERY SIMILAR TO OBJECT LITERALS



//Loops

//For

for (let i = 0; i <= 10; i++) {

    console.log(`For Loop NUmber: ${i}`);
}

//While

let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Looping through an Array//Object

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}


//for of Loop

for (let todo of todos) {
    console.log(todo);
    console.log(todo.text);
}

//High order array methods
//Foreach,Map and Filter

const tasks = [

    {
        id: 1,
        text: 'Laravel',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Django',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Docker',
        isCompleted: false
    }
];

//1.foreach

//takes in a function then you pass whatever variable you want to use
tasks.forEach(function (task) {

    console.log(task.text);
});


//2.Map(creates an array)

const todoText = tasks.map(function (task) {
    return task.text;
});

console.log(todoText);


//3 filter
//you want to return only the todos that are completed
//filtering based on a condition probably a boolean

const taskcompleted = tasks.filter(function (task) {

    return task.isCompleted === true;
});

//returns a mapped array after filtering

const mapfilter = tasks.filter(function (task) {

    return task.isCompleted === true;
}).map(function (task) {
    return task.text;
});

console.log(taskcompleted);
console.log(mapfilter);