const myArr = [0,1,2,3,4,5,"Hello"];
const heros = ['saktiman','batman'];

const newArr = new Array(1,2,3,4,5);
console.log(myArr[1]);

// Array methods

myArr.push(6);
myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9); // add element at the first position
myArr.shift(); // remove first element
console.log(myArr);
console.log(myArr.includes(3));
console.log(myArr.indexOf(9)); // -1 for not found

const newArr2 = myArr.join();
console.log(typeof newArr2);
console.log(myArr);

// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr); //[0,1,2,3,4,5]

const myn2 = myArr.splice(1,3);
console.log(myn2); 
console.log("C ",myArr); // [0,4,5]




