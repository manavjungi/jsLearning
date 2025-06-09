function sayMyName(){
    console.log("Manav");
    
}
// sayMyName();

function addTwo(number1,number2){
    // console.log(number1+number2);    
    return number1+number2
}

const result= addTwo(3,5)

// console.log(result);

function logINUser(username = "Default"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    else{
        return `${username} just Logged In`
    }
}

// console.log(logINUser("Manav"))
console.log(logINUser())
