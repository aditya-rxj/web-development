// -- Problem: Create an array containing different types of teas.
const teas = [
  "Green Tea",
  "Black Tea",
  "Oolong Tea",
  "White Tea",
  "Herbal Tea",
];
console.log(teas); // [ 'Green Tea', 'Black Tea', 'Oolong Tea', 'White Tea', 'Herbal Tea' ]


// -- Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");


// -- Problem: Remove "Oolong Tea" from the list of teas.
const index = teas.indexOf("Oolong Tea");
if (index > -1) {
  teas.splice(index, 1);
}


// -- Problem: Filter the list to only include teas that are caffeinated.
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");
console.log(caffeinatedTeas); // [ 'Green Tea', 'Black Tea', 'White Tea', 'Chamomile Tea' ]


// -- Problem: Sort the list of teas in alphabetical order.
teas.sort();

const test = ["🥚", "🐓"];
console.log(test.sort());


// -- Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]); // 'Black Tea', 'Chamomile Tea', 'Green Tea', 'Herbal Tea', 'White Tea'
}


// -- Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let caffeinatedTea = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedTea++;
  }
}
console.log(caffeinatedTea); // 4


// -- Problem: Use a for loop to create a new array with all tea names in uppercase.
const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase());
}
console.log(uppercaseTeas); // [ 'BLACK TEA', 'CHAMOMILE TEA', 'GREEN TEA', 'HERBAL TEA', 'WHITE TEA' ]


// -- Problem: Use a for loop to find the tea name with the most characters.
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}
console.log(longestTea); // 'Chamomile Tea'


// -- Problem: Use a for loop to reverse the order of teas in the array.
const reversedArray = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
console.log(reversedArray); // [ 'White Tea', 'Herbal Tea', 'Green Tea', 'Chamomile Tea', 'Black Tea' ]
