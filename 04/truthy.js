const userEmail = [];

if(userEmail){
    console.log(`User email is ${userEmail}`);
}else{
    console.log("Dont have email");
}

//Falsey Values:- false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values:- "0", "false", " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Empty Array");
}

const obj1 = {};
if(Object.keys(obj1).length === 0){
    console.log("Empty Object");
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
console.log(val1);