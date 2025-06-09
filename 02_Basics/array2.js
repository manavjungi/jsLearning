const marvel = ["thor","Loki","panther"]
const DC = ["Superman","Flash", "Batman"]

// marvel.push(DC)

// console.log(marvel);
// console.log(marvel[3]);

// const nArray = marvel.concat(DC)
// console.log(nArray);

// Spread operator "..."
const all = [...marvel,...DC]
console.log(all);

// console.log(Array.isArray("Manav"));
// console.log(Array.from("Manav"));
// console.log(Array.from({name : "Manav"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
