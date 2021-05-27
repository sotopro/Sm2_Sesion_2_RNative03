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




