import {
    coffee,
    greeting,
    coffeFacts,
    closing
} from './arrays.js';

function dailyCoffee() {
    let randCoffee = Math.floor(Math.random()* coffee.length);
    let randGreeting = Math.floor(Math.random()* greeting.length);
    let randFact = Math.floor(Math.random()* coffeFacts.length);
    let randClose = Math.floor(Math.random()* closing.length);
    return `${greeting[randGreeting]} ${coffee[randCoffee]} ${coffeFacts[randFact]} ${closing[randClose]}`;   
};

// Test case

console.log(dailyCoffee());