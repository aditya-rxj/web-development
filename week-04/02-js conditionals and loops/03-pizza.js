let numberOfGuest = 4;

let pizzaSize;
// small <= 2
// medium <= 5
// large

// also known as greedy algorithm
if (numberOfGuest <= 2) {
  pizzaSize = "You need small size pizza.";
} else if (numberOfGuest <= 5) {
  pizzaSize = "You need medium size pizza.";
} else if (numberOfGuest <= 7) {
  pizzaSize = "You need large size pizza.";
} else {
  pizzaSize = "You need multiple size pizza.";
}

console.log(pizzaSize);
