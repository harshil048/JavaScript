// Immediately Invoked Function Expressions (IIFE)

(function one(){
    console.log(`DB connect`);
})();

( (name,price) => {
    console.log(`DB connnected 2 ${name} and ${price}`);
} )("Harshil",23);