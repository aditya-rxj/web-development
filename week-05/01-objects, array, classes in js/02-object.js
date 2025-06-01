const person = {
  firstName: "Aditya",
  lastName: "Raj",
  isMarrid: false,
  hobbies: ["Coding", "Gaming", "GYM"],
  getFullName: function () {
    return "Aditya Raj";
  },
  address: {
    HNo: 201,
    Street: 4,
    countryCode: "IN",
    state: "HR",
  },
};

console.log(person);
console.log(person.getFullName());
console.log(person.address.countryCode);

// use case of Object => group krne k liye

const mobile = {
  name: "Realme",
  color: "Black",
  dimensions: {
    height: "167.2 mm",
    width: "76.7 mm",
    depth: "8 mm",
  },
  os: "Android 13",
  price: "10,999",
};

console.log(mobile);
console.log(mobile.dimensions.depth);
