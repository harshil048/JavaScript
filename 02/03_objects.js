
// Object.create


const mySym = Symbol("key1");

const jsUser = {
    name: "Harshil",
    "full name": "Harshil Bambhroliya",
    [mySym]: "myKey1",
    age: 19,
    location: "Gujarat",
    email: "harshil@gmail.com",
    isLogedIn: false,
    lastLoginDays: ["Mon","Sat"]
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "abc@google.com";
// Object.freeze(jsUser); 
jsUser.email = "abc@.com";
console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
