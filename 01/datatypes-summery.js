// primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//reference (Non primitive)

//Arrays, Objects, Functions

const heros = ["Shaktiman", "naggra", "doga"];

const obj = {
    name: "harshil",
    age : 22,
}

const myFunction = function() {
    console.log("Hello");
}