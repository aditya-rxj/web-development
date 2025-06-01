// -- in string
let person1 = "Aditya";
console.log(person1); // 'Aditya'

let person2 = person1;
console.log(person2); // 'Aditya'

person2 = "Raj";
console.log(person2); // 'Raj'

// -- in array
let personOneArray = ["Aditya", "Raj"];
console.log(personOneArray); // [ 'Aditya', 'Raj' ]

let personTwoArray = personOneArray;
personTwoArray[0] = "Piyush";
console.log(personTwoArray); // [ 'Piyush', 'Raj' ]
console.log(personOneArray); // [ 'Piyush', 'Raj' ]

// -- in object
let person3 = {
  firstName: "Aditya",
  lastName: "Raj",
  address: {
    Hno: 1,
    Street: 2,
  },
};
console.log(person3); // { firstName: 'Aditya', lastName: 'Raj' }

let person4 = {
  ...person3, // Spread Operator (...)
  address: {
    ...person3.address,
  },
};

// -- convert object to String
const person3toString = JSON.stringify(person3);
console.log(person3toString); // '{"firstName":"Aditya","lastName":"Raj","address":{"Hno":1,"Street":2}}'

// -- convert string to object
const person3toObject = JSON.parse(person3toString);
console.log(person3toObject); // { firstName: 'Aditya', lastName: 'Raj', address: { Hno: 1, Street: 2 } }

person4.firstName = "Piyush";
person4.address.Hno = 10;

console.log(person3); // { firstName: 'Aditya', lastName: 'Raj', address: { Hno: 1, Street: 2 } }
console.log(person4); // { firstName: 'Aditya', lastName: 'Raj', address: { Hno: 10, Street: 2 } }

// > ... inner object main kaam nhi karta
// > ... object k case main shallow copy banata hain
