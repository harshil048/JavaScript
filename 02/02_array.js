const mHeros = ["thor","ironman","spiderman"];
const dcHeros = ["superman","flash","batman"];

//mHeros.push(dcHeros);
// console.log(mHeros);
// console.log(mHeros[3][0]);

const newArr = mHeros.concat(dcHeros); // concat return new combine array
console.log(newArr);

const newArr2 = [...mHeros, ...dcHeros]; // spread op
console.log(newArr2);

const arr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const arr4 = arr3.flat(Infinity);
console.log(arr4);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")); // make an array of given string
console.log(Array.from({name: "Harshil"})); 

let score1 =100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // Returns a new array from a set of elements.
