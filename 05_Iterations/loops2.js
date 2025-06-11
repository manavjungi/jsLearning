// for of loop

const arr = [1,2,3,4,5]

for (const  num of arr) {
    // console.log(num);
       
}

const greetings = "hello World"

for (const greet  of greetings) {
    // console.log(`Each character of greetongs  is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('JP',"Japan")
map.set('FR',"France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":- ", value)
}

const myObject = {
    js : 'javascript',
    cpp: 'C++',
    py : 'python'
}

// not iterable
// for (const [key , value] of myObject) {
//     console.log(key, ":- ", value)
    
// }

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);

}

const myArray = ["js","python","cpp"]

for (const key in myArray) {
    console.log(myArray[key]);
    
}

