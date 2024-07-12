/*  -- Random Coffee Facts Generator --
    This script outputs a general random fact about coffee. It suggests
    a type of coffee and outputs ascii art as a visual touch.
*/

// Import data arrays from arrays.js
import {
    coffee,
    greeting,
    coffeFacts,
    closing,
    art,
} from './arrays.js';

// Define main function
function dailyCoffee() {

    // Randomly select an element of each array
    let randCoffee = Math.floor(Math.random()* coffee.length);
    let randGreeting = Math.floor(Math.random()* greeting.length);
    let randFact = Math.floor(Math.random()* coffeFacts.length);
    let randClose = Math.floor(Math.random()* closing.length);
    let tab = "                     ";

    // Return concatenated string
    return `${greeting[randGreeting]} ${coffee[randCoffee]} ${coffeFacts[randFact]}\n ${art.join("\n")} ${tab}${closing[randClose]}`;   
};

// Display random message to console
console.log(dailyCoffee());