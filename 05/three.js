// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,6];

for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World";
for(const i of greetings){
    console.log(i);
}

// Maps

const map = new Map();
map['1'] = 10;
map['1']++;
map.set('IN',"india");
map.set('FR',"france");
// console.log(map);
// console.log(map['1']);

for(const [key,value] of map){
    console.log(key, ':-', value);
}

const obj = {
    name: "harshil",
    age: "19",
}
// for(const [key,value] of obj){
//     console.log(key, ':-', value);
// }