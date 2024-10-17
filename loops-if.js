// console.log("Hello!")
//if and if/else statements
let someMessage = "Bananas";

if (someMessage == "Oranges") {
    //truthy condition
    console.log("We have oranges");
}

console.log(someMessage);
let someNumber = 3;

if (someNumber === 10) {
    console.log("We have 10!!");
}

if (someNumber >= 5 ) {
    console.log("We have 5 or more!");
} else {
    console.log("Less than five");
}

//ternary operators

let someCoolMessage = (someMessage === "Bananas") ? someMessage.toLocaleUpperCase() : "Default message here."

if (someMessage === "Bananas"){
    //                  Bananas         Ba              BA
    someCoolMessage = someMessage.substring(0,2).toLocaleUpperCase();
} else {
    someCoolMessage = "Default message in the else statement.";
}

console.log(someCoolMessage);

// Switch operator

someMessage = "mango";

switch (someMessage) {
    case "orange":
        console.log("We have oranges");
        break;
    case "banana":
        console.log("We have bananas");
        break;
    case "mango":
        console.log("We have mangoes");
        break;
    default:
        console.log("We have another fruit");
}

// Short circuit logic

someMessage = "Mango";
// evaluate if the first part is true, if it is, we return the second part
// if the first part is false, it returns the first part "", 0, false boolean
let circuitLogicMessage = someMessage && "We have a message";

console.log(circuitLogicMessage);

// It returns the first block that is true
// If both false, it will return the second one
circuitLogicMessage = "" || 0;

console.log(circuitLogicMessage);