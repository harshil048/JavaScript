const user = {
    usename: "Harshil",
    price: "666",
    welcomeMsg: function(){
        console.log(`${this.usename}, welcome to website`);
        // console.log(this);
    }
}
user.usename = "hello";
user.welcomeMsg();

// console.log(this);

// function one(){
//     let usename = "Harshil"
//     console.log(this.usename);
// }
// one();

const one = () => {
    let usename = "Harshil"
    console.log(this);
}
// one();
// const add2 = (num1, num2) => {
//     return num1+num2;
// }

// const add2 = (num1, num2) =>  num1+num2;

// const add2 = (num1, num2) =>  (num1+num2); //implicit return

const add2 = (num1, num2) =>  ({
    usename: "Harshil"
});

console.log((add2(4,6)));

const arr = [1,2,23,4,3];
// arr.forEach();