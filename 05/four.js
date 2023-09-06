const obj = {
    name: "Harshil",
    age: "19",
    email: "h@gmail.com"
}

for(const it in obj){
    console.log(`${it} => ${obj[it]}`);
}

const arr = [1,3,5,6];
for(const it in arr){
    console.log(arr[it]);
}

const map = new Map();
map.set('IN',"India");
map.set('USA',"USAAA");
map.set('FR',"France");

// for(const it in map){
//     console.log(it);
// }