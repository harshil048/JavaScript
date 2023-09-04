
// var c = 300;
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const usename = "Harshil";

    function two(){
        const website = "youtube";
        console.log(usename);
    }
    // console.log(website);
    two();
}

one();

if(true){
    const usename = "Harshil";
    if(usename === "Harshil"){
        const website = "youtube ";
        console.log(website+usename);
    }
}


// ++++++++++++++++++ interesting ++++++++++++++++++
console.log(add(5));

function add(num1){
    return num1 + 1;
}
console.log(add(5));

console.log(add2(3)); // error

const add2 = function(num){
    return num + 1;
}
console.log(add2(3));