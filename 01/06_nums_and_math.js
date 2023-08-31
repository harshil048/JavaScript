const score = 400;
console.log(score);

const balance = new Number(100000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const num2 = 23.567;
console.log(num2.toPrecision(4)); // 23.57

const num3 = 1000000;
console.log(num3.toLocaleString('en-IN')); //10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-12));
console.log((Math.round(3.6)));
console.log((Math.ceil(3.6)));
console.log((Math.floor(3.6)));
console.log(Math.min(4,3,4,1,2));
console.log(Math.max(4,3,4,1,2));
console.log(Math.round(Math.random()*10) + 1); // gives random value from 0 to 9

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max-min+1))) + min) // gives random value from 10 to 20

