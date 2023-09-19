function setuserName(username){
    this.username = username;
}

function createUser(username,email,password){
    this.email = email;
    this.password = password;
    setuserName.call(this,username);
}

const sample = new createUser("hello","gmal.com","hello@123");
console.log(sample);