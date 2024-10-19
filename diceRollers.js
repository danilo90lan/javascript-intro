console.log("Start of the Dice Roller!!");

// simple dice roller function
function rollDice(diceSize = 6) {
    console.log(`Rolling a ${diceSize}-sided die...`);
    let diceSide = Math.ceil(Math.random() * diceSize);
    // console.log(diceSide);
    return diceSide;
}


// Simple call, default parameter value used
rollDice();

// Overwriting the default parameter value
rollDice(diceSize=10);

// or
rollDice(20);


//  Specific dice roller function that calls the simple function
// Using Function Expression
const rollDice25 = function () {
    rollDice(25);
}

rollDice25();

// Using Arrow Function / Unanonymous function
const rollDice15 = () => {
    // return rollDice(15);
    // or
    result = rollDice(15);
    return result;
}

// rollDice15();

let diceSide15 = rollDice15();
console.log("The side you rolled in this 15-sided die is: " + diceSide15);

// If we want more functionality, then we use the {}, otherwise we can use the shortened version
const rollDice8 = () => rollDice(8);
console.log("The side you rolled for the 8-sided die is: " + rollDice8());


// Implementing the callback feature/functionality/characteristic of function
function customDiceRoll(side, callback) {
    return callback(side); // rollDice(30);
}

result = customDiceRoll(30, rollDice);
console.log(result);

// Example of hoisting
rollMultipleDice(3, 6, (result) => console.log("Rolled: " + result));

// Function to roll multiple dice
function rollMultipleDice(numDice, diceSize, callback) {
    for (let i=0; i < numDice ; i++) {
        const result = rollDice(diceSize);
        callback(result);
    }
}
