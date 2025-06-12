const myNumbers= [1,2,3,4,5,6,7,8,9,10]

//const newnums = myNumbers.map( (num) => (num+10))


const newnums = myNumbers.map((num) => num*10).map((num) => (num + 1)).filter((num) => num>=40)

// console.log(newnums);

//Reduce method 

const initialValue = 0;

// const sumwithInitial = myNumbers.reduce(function (accumulator, currentValue){
//     console.log(`acc ${accumulator} and currVal ${currentValue}`);
            
//     return accumulator+currentValue
// },initialValue)

const sumwithInitial = myNumbers.reduce((acc,currVal) => acc+currVal,0)
console.log(sumwithInitial);


const ShoppingCart= [
    {
        itemName: "JsCourse",
        price: 300
    },
    {
        itemName: "DataScience",
        price: 12200
    },
    {
        itemName: "AWS",
        price: 5000
    }
]

const priceAdder = ShoppingCart.reduce((total,item) => item.price+total,0)

console.log(priceAdder);
