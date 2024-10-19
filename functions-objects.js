console.log("Hello World!!");

// x = 5;

// var x = 5;

// let x = 5;

const x = 5;

console.log(x);

let fruits = [
    "apple",
    "banana",
    "mango"
];

fruits.forEach(fruit => {
    console.log(fruit.toLocaleUpperCase());
});

console.log(fruits);

mapTest = fruits.map((fruit) => {
    return fruit.toLocaleUpperCase();
});

console.log(mapTest);

// Objects 

let person1 = {
    name: "Rick",
    age: 90,
    city: "Tasmania",
    greetingMessage: function() { // function expression
        console.log("Pickle Rickkkk");
        console.log("Hi, My name is " + this.name +"!");
    }
};

console.log(person1.name);
console.log(person1.age);
console.log(person1.city);
console.log(person1.greetingMessage())

let person2 = {
    name: "Morty",
    age: 12,
    city: "Sydney",
    greetingMessage: () => { // arrow function expression
        console.log("Hi, My name is " + this.name +"!");
        console.log(`Hi, My name is ${this.name} !`);
    }
};

console.log(person2["name"]);
console.log(person2.age);
console.log(person2.city);
console.log(person2.greetingMessage());

// Functions
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(5,3);
console.log(area);

function greet(name) {
    console.log("Hello, " + name + "!");
}

let person3 = {
    name: "Janice",
    age: 23,
    city: "Melbourne",
    greetingMessage: greet
};
//          object.propertyValue
console.log(person3.name);
//          object.propertyFunction
console.log(person3.greetingMessage(person3.name));

console.log(this);

let person4 = {
    name: "Alice",
    age: 25,
    city: "Sydney",
    greetingMessage: greet,
    contact: {
        tel: "0244444",
        mobile: "04444444",
        voicemailMessage: function() {
            console.log("This message is from a nested object.");
        } 
    }
};

console.log(person4["contact"]["tel"]);
console.log(person4.contact.mobile);

console.log(person4.contact.voicemailMessage());

console.log(Object.keys(person4));
console.log(Object.keys(person4.contact))