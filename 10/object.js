function multiby(num){
    return 5*num;
}

multiby.power = 5;
console.log(multiby(5));
console.log(multiby.prototype);
console.log(multiby.power);

function createUser(name, score){
    this.name = name;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`name is:- ${this.score}`);
}

let u1 = new createUser('Harshil',100);
let u2 = createUser('h2',1000);
u1.printMe();
u1.increment();
u1.printMe();
