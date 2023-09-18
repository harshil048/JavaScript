// const user = {
//     username: "Harshil",
//     loginCNt: 8,
//     signedIn: true,
//     getUserDeta:  ()=>{
//         console.log("got details");
//     }
// }
// console.log(user);
// console.log(user.getUserDeta());

function user(name, loginCnt, isLoggedIn){
    this.name = name;
    this.loginCNt = loginCnt;
    this.isLoggedIn = isLoggedIn;

    this.greting = function(){
        console.log("hellloooo");
    }
}   

const user1 = new user('Harsil',12,true);
const user2 = new user("abc", 121, false);
console.log(user2.constructor);