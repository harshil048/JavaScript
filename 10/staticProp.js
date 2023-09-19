class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName is :- ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}
const Harshil = new user("Harshil");
console.log(Harshil.createId())