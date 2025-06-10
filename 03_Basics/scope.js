function one (){
    const username = " Manav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
   two()
    
}
// one()


if(true){
    const username = "Manav";
    if(username == "Manav"){
        const website = "Youtube" 
        // console.log(username + website);
    } 
   // console.log(website);
    
}
// console.log(username);

const num = addone(5)

function addone(num){
    return (num + 1)
}

console.log(num);

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))