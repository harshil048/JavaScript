class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
       console.log(`Username is : - ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email){
        super(username);
        this.email = email;
    }

    addCourses(){
        console.log(`new coursers is added by ${this.username}`);
    }
}

const chai = new teacher("sample","chai@gmail.com","123");
chai.addCourses();
chai.logMe();

const tea = new user("Harshil");
tea.logMe();