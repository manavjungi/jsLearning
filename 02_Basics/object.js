//singleton

//object literals
const mySym = Symbol("key1")

const user = { 
    name: "Manav",
    age: 19,
    "full name": "Manav Jungi",
    [mySym]: "mykey1",
    location: "Amdavad",
    email: "manav@google.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday","Sunday"]
}

// console.log(user.email);
// console.log(user["email"]);

// console.log(user["full name"]);
// console.log(user[mySym]);

user.email = "manav@gpt.com" 
// Object.freeze(user)
user.email = "manav@gpt.cmmmmm" 
//console.log(user);

user.greeting = function (){
    console.log("hello user Manav")
}

user.greetingTwo = function (){
    console.log(`hello user , ${this["full name"]}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());
