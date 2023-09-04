
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("L");
}
sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

const result = addTwoNumbers(5,6);
console.log(result);

function loginUserMsg(username = "abc"){
    if (!username) {
        console.log("Plese enter a user name");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg("Harshil"));
console.log(loginUserMsg("sample"));

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(400,500,600));

const user = {
    name: "Harshil",
    price: "199"
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`);
}

// handleObject(user);
handleObject({
    name: "SAm",
    price: "300"
});

const arr = [1,2,3,4,5];

function newfun(arr){
    return arr[2];
}

console.log(newfun(arr));
console.log(newfun([1,34,4,23,234]));