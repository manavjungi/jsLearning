const user = {
    username: "manav",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);   
    }
}

// user.welcomeMessage()
// user.username="Lucy"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "maanav"
//     console.log(this.username);    

// }
// chai()

const chai = () => {
    let username = "maanav"
    console.log(this);    

}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// console.log(addTwo(3,4));


// const addTwo = (num1, num2) => num1 + num2 
const addTwo = (num1, num2) => (num1 + num2) 

console.log(addTwo(3,4));