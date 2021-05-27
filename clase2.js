// == Equal to 5 == 5   'hola' == 'hola'
// != Not equal to 5 != 4 'hola' != 5 
// === strictly equal to with no type conversion 5 number === '5' string false
// !== strictly unequal to with no type conversion
// > Greater than
// >= Greater than or equal to
// < Less than 
// <= Less than or equal to

// Equality

let x = 3

x == 3
console.log('x == 3', x == 3);
console.log('x == 5', x == 5);

let shark = 'sam';

console.log("shark == 'sam'", shark == 'sam');
console.log("shark == 'sam'", shark == 'daniel');


// let answer = '10';

// let response = prompt("What is 5 + 5?");

// if(answer === response){
//   alert("You're correct!")
// } else {
//   alert("You're wrong!")
// }

// Inequality

let y = 8;

console.log('y!= 9', y != 9);

// Identity

let z = 4; // number

console.log('z === 4', z === 4) // number
console.log('z === 4', z === '4'); // string

// Non Identity

let a = 18;

console.log('a !== 18', a !== 18); // Number
console.log('a !== 18', a !== '18'); // String

console.log('a !== 29', a !== 29);

let f = 72;

console.log('f > 80', f > 80)
console.log('f > 80', f > '30')

let g = 200;

console.log('g >= 90', g >= 90);
console.log('g >= 201', g >= 201)

let w = 1090;

console.log('w < 476', w < 476 );
console.log('w < 1950', w < 1950 )

let p = 2001;

console.log('p <= 1960', p <= 1960);
console.log('p <= 2001', p <= 2001);
console.log('p <= 2020', p <= 2020);

// Logical Operators

// AND && y

const highQuality = false;
const lowPrice = false;

console.log(highQuality && lowPrice);

// OR || o

console.log(highQuality || lowPrice)

// NOT !

console.log(!highQuality);

const balance = 500;
const jeans = 50;
const phone = 600;


if(jeans <= balance){
  // code that will execute if condition true
  console.log('You have enough money to purchase the item!')
}

if(phone <= balance){
  // code that will execute if condition true
  console.log('You have enough money to purchase the item!')
} else {
  console.log('You do not have enough money in your account to purchase this item!')
}

let grade = 87;

if(grade >= 90) {
  console.log('A')
} else if(grade >= 80){
  console.log('B')
} else if (grade >= 70){
  console.log('C')
} else if (grade >= 60) {
  console.log('D')
} else {
  console.log('F');
}

// Switch

// switch(expression) {
//   case x:
//     // excute case x code block
//     break;
//   case y:
//     // excute case y code block
//   default:
//     // excute default y code block
// }

const day = new Date().getDay();

console.log('day', day)

switch (day) {
  case 1:
    console.log('Happy Monday!')
    break;
  case 2:
    console.log("It's Tusday. You got this!")
    break;
  case 3:
    console.log('Hump day already!')
    break;
  case 4:
    console.log("Just one more day 'til the weekend!");
    break;
  case 5:
    console.log('Happy Friday');
    break;
  case 6:
    console.log('Have wonderfull Saturday!')
    break;
  case 7:
    console.log("It's Sunday, time to relax")
    break;
  default:
    console.log('Something went horribly wrong!...')
}

const lang = 'ES'
switch (lang) {
  case 'ES':
    console.log('Hola, Buen día!')
    break;
  case 'EN':
    console.log("Hi, Good day!")
    break;
  default:
    console.log('Something went horribly wrong!...')
}

// Ternary Operator if ? else :

// (condition) ? expression on true : expression on false

let age = 20;

// if(age >= 21){
//   'You may enter' 
// } else {
//   'Your may not enter'
// }

// if(age >= 21) 'You may enter';
// else 'Your may not enter';

const oldEnough = age >= 21 ? 'You may enter' : 'Your may not enter';

console.log('oldEnough', oldEnough);

const grades = 87;

switch(true){
  case grade >= 90:
    console.log('A');
    break;
  case grade >= 80:
    console.log('B');
    break;
  case grade >= 70:
    console.log('C');
    break;
  case grade >= 60:
    console.log('D');
    break;
  default:
    console.log('F');
}

// multiples cases

const month = new Date().getMonth();

switch(month){
  // January, February, March
  case 0:
  case 1:
  case 2:
    console.log("Winter")
    break;
  // April, May, June
  case 3:
  case 4:
  case 5:
    console.log('Spring');
    break;
  // July, August, September
  case 6:
  case 7:
  case 8:
    console.log('Summer');
    break;
  // October, November, December
  case 9:
  case 10:
  case 11:
    console.log('Autumn');
    break;
  default:
    console.log('Something went wrong!')
}

let authenticated = false;

// let url = authenticated ? (
//   alert('You will redirect to admin area'),
//   '/admin'
// ) : (
//   alert('Access denied'),
//   '/403'
// );

// console.log(url);

// multiple ternary operators

let speed = 60;

let message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');

console.log('message', message)

// result = (a !== null && a !== undefined) ? a : b;

let user = 'Daniel';

console.log(user ?? 'Anoymous');

let firstName = null;
let lastName = null;
let nickname = 'Supercoder';

console.log(firstName ?? lastName ?? nickname ?? 'Anonymous') // Supercoder
console.log(firstName || lastName || nickname || 'Anonymous') // Supercoder

// let height = 0;

// console.log(height || 100); // 100
// console.log(height ?? 100); // 0;

let height = null;
let width = null;

// important : use parentheses
let area = (height ?? 100) * (width ?? 50);

console.log(area)

// ?? with && or ||

// let importantNumber = 1 && 2 ?? 3; // Syntax Error
let numbers = (2 && 5) ?? 3 // Works!
console.log(numbers)