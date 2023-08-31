let myDate = new Date();
console.log((myDate.toString()));
console.log((myDate.toDateString()));
console.log((myDate.toISOString()));
console.log((myDate.toJSON()));
console.log((myDate.toLocaleDateString()));
console.log((myDate.toLocaleString()));
console.log((myDate.toTimeString()));

console.log(typeof myDate); //object

let myNewDate = new Date(2023, 0, 23); // year - month - date
console.log(myNewDate.toDateString());

let date2 = new Date("2023-01-14");
console.log(date2.toDateString());

let date3 = new Date("01-14-2023"); // mm-dd-yy
console.log(date3.toDateString());

let myTimeStamp = Date.now();

console.log((myTimeStamp));
console.log((date3.getTime()));
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log((newDate.getDate()));
console.log((newDate.getDay()));
console.log((newDate.getFullYear()));

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})









