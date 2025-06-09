//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "24BCE515"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Manav",
            lastname: "Jungi"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 ={
    1:"a",
    2:"b"
}
const obj2  = {
    3:"a",
    4: "b"
}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

console.log(obj3);

