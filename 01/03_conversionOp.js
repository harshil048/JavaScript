let  score = "33asd";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Harshil"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Harshil" => true

let number = 2313;
let stringNumber = String(number);
console.log(typeof (stringNumber));

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 ** 2); // power of x raise to y
// console.log(2 / 2);

let str1 = "Hello ";
let str2 = "My name is Harshil";

console.log((str1 + str2));

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(typeof +true);

let n1, n2, n3;
n1 = n2 = n3 = 2 + 2;

let counter = 100;
counter++;

console.log((counter));



