const name = "Harshil ";
const repoCnt = 50;

// console.log(name + repoCnt + " Value");

console.log(`hello my name is ${name} and my repo cnt is ${repoCnt}`);

const gameName = new String('Harshil-hc-com');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

console.log(gameName.substring(1,4));

const newString = gameName.substring(1,6);
console.log((newString));

const anotherString = gameName.slice(-8,4);
console.log((anotherString));

const newStr1 = "      hello      ";
console.log((newStr1));
console.log((newStr1.trim()));

const url = "www.google.com/hello%20world";

console.log(url.replace('%20','-'));
console.log((url));
console.log(url.includes('google'));

console.log(gameName.split('-'));






