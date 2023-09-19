// class User{
//     constructor(userame, email, password){
//         this.userame = userame;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.userame.toUpperCase()}`;
//     }
// }
// const chai = new User("chai","chai@gmail.com","chai@124");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//bts

function User(userame, email, password){
        this.userame = userame;
        this.email = email;
        this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.userame.toUpperCase()}`;
}

const chai1 = new User("chai","chai@gmail.com","chai@124");
console.log(chai1.changeUsername());
console.log(chai1.encryptPassword());