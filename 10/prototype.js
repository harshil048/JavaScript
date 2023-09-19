// let myName = "Harshil";

// console.log(myName.truelength);

let arr = [1,2,3,4,5];

let obj = {
    thor : "hammer",
    spiderman: "sling",

    getSPiderPower : function(){
        console.log(this.spiderman);
    }
}

Object.prototype.harshil = function(){
    console.log("present");
}

Array.prototype.heyharshil = function(){
    console.log("helloooo");
}
// obj.harshil();
// arr.harshil();

arr.heyharshil();
// obj.heyharshil();

const teacher = {
    makeVideo : true
}

const assistent = {
    isAvil : false
}

const Ta = {
    makePaper : "js",
    fulltime: true,
    __proto__: assistent
}
console.log(Ta.isAvil);

//modern 

Object.setPrototypeOf(Ta,teacher); // src, des
console.log(Ta.makeVideo);

let anotherName = "Harshil      ";

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is :- ${this.trim().length}`);
}

anotherName.trueLength();