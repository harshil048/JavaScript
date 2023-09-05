//if

const isUserLoggedIn = true;
const temprature = 61;

if(temprature < 50){
    console.log("Less than 50");
}
else{
    console.log("Temrature is Greater than 50");
}

// <, >, <=, >=, ===, !=, ==, !==

const score = 200;
if(score > 100){
    const power = "fly";
    console.log(`User power: ${power}`);
}

const balance = 1000;

balance > 500 ? console.log("Test") : console.log("Not");

if (balance < 500) {
    console.log("less than 500");
}
else if(balance < 750){
    console.log("leass then 750");
}
else if(balance < 900){
    console.log("leass then 900");
}else{
    console.log("greater");
}

const UserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(UserLoggedIn && debitCard && 2==2){
    console.log("You can shopping");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("You are logged in");
}