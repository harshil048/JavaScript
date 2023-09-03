const tinderUser = new Object();

tinderUser.id = "234ffs";
tinderUser.name = "Temp";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 

const regukarUser = {
    email: "temp@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Harshil",
            lastName: "Bambhroliya"
        }
    }
}

// console.log(regukarUser.fullName.userFullName.firstName); 

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {...obj1, ...obj2} // best way
const obj3 = Object.assign({},obj1,obj2); // combine 2 or more object and return new object
console.log(obj3);

const users = [
    {
        id: 1,
        email: "hello!gmail.com"
    },
    {
        id: 2,
        email: "hello!gmail.com"
    }
];

console.log(Object.values(users[0]));
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggeddsIn')); // check property is available


const course = {
    name: "js in Hindi",
    price: "999",
    educator: "Hitesh"
};

const {educator: e} = course
console.log(e);

// {
//     "name": "Harshil",
//     "couseName": "js in hindi",
//     "price": "free"
// }
