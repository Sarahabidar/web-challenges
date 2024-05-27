console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";
if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}
//ternary expression
let message =
  receivedPassword === SUPER_SECRET_PASSWORD
    ? "Welcome! You are logged in as Brunhilde1984."
    : "Access denied!";
console.log(message);

// Part 2: Even / Odd
const number = 8;
const evenNum = number % 2;
if (!evenNum) {
  console.log("is even number");
} else {
  console.log("is odd number");
}
//ternary expression
let num = evenNum === 0 ? "is even number" : "is odd number";
console.log(num);

// Part 3: Hotdogs
const numberOfHotdogs = 1900000;

if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  //console.log("1.50 euro per hotdog");
} else {
  //console.log("no");
}
// Ternary expression
//let price =
numberOfHotdogs >= 5 && numberOfHotdogs < 100 ? "1.50 euro per hotdog" : "no";
//console.log(price);

//change the `numberOfHotdogs` to see if your code works properly
//for at least 100 but less than 1 000 000 hotdogs: 1 euro per hotdog
if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
}

let price =
  numberOfHotdogs >= 100 && numberOfHotdogs < 1000000
    ? "1 euro per hotdog"
    : "hehe";
console.log(price);
//for at least 1 000 000 hotdogs: 0.10 euro per hotdog
if (numberOfHotdogs >= 1000000) {
  console.log("0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const name = "Archibald";
const greeting =
  userName === name
    ? "Hello Coach!"
    : "Hello " + "//enter your code here" + "!";

console.log(greeting);
