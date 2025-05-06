// -- print hello
function printHello() {
  console.log("Hello World!");
}

// -- print hello with name
function printGreet(name) {
  // console.log("Hello! What's Up?", name);
  console.log(`Hello! ${name} What's Up?`);
}

// -- bring apple
function bringApple(howmuch) {
  console.log(`Bring ${howmuch} Apple.`);
}

// -- add number
function addNum(num1, num2) {
  return num1 + num2;
}

printHello();
printGreet("Aditya Raj");

bringApple(3);

addNum(1, 2);
console.log(addNum(2, 4));
