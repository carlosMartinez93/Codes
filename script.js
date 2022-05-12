
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is Fun')

40 + 8 + 23 - 10;//results may only show if console.log is used
console.log(40 + 8 + 23 - 10)
/*
//values and variables

console.log("Jonas");
console.log(23);

let firstName = "Bob";

// camel case is the way to name a variable as a camel, first word lower case, the next word with a Upper case in the first letter and so on, most used
// do not start with a number or upper case letter in a variable or use &;
// Variable names can only contain: - letters; - Numbers; - underscores; - dollar sign($);

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let PI = 3.1415; // if the variable is a constant number, then use full Upper case in the name

let myFirstJob = 'Engineer';
let myCurrentJob = 'Coder'; // use a easy-to-understand for a variable's name

console.log(myFirstJob);
console.log(myCurrentJob);

// 7 primitive data types
// Number - floating point numbers, always float, no integer > let age =23.0 or 23;
// String - Sequence of characters > used for texts let name = Carlos;
// Boolean - Logical type that can only be true or false > used for taking decisions let fullAge = true;
// ^ the three major variables;
// Undefined - value taken by a variable that is not yet defined ('empty value') > let children;
// Null - also means empty value
// Symbol (ES2015) - value that is unique and cannot be changed (not useful for now)
// BigInt (ES2020) - Larger integers that the number type can hold

// JavaScript Dynamic typing: java automatically determines the type for the variables
// JavaScript Dynamic typing below

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year)


let age = 30;
age = 31;

const birthYear = 1991;
console.log(birthYear)
// birthYear = 1990;

//const job = 'Furry';
//console.log(job);
//When to use let or const, for a clean code use -const- and let only when you really need to change the variable

var job = 'programmer';
// direcetd to functions
job = 'teacher'
console.log(job);

lastName = 'Calvo';
console.log(lastName);


//operations

//Math Operators
const now = 2037
const ageCarlos = now - 1993;
const ageGabi = now - 2018;
console.log(ageCarlos, ageGabi);
console.log(ageCarlos * 2, ageGabi / 2, (ageCarlos ** 2) + (ageCarlos * 2));

const firstName2 = 'Carlos';
const lastName2 = 'Calvo';
console.log(firstName2 + ' ' + lastName2);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4 // x = x*4
x++ // x = x + 1
x--// x = x - 1
x--
console.log(x);

// Comparison Operators
console.log(ageCarlos > ageGabi);
console.log(ageCarlos < ageGabi);
console.log(ageGabi >= 18);

const isFullAge = ageGabi >= 18;
console.log(now - 1991 > now - 2018);


//Operator Precedence
const now = 2037
const ageCarlos = now - 1993;
const ageGabi = now - 2018;

console.log(now - 1991 > now - 2018);
//console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5; //x = y = 10
console.log(x, y);

const averageAge = (ageCarlos + ageGabi) / 2;
console.log(ageCarlos, ageGabi, averageAge);



First Exercise
Carlos and Gabi are trying to compare thier BMI(body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).

/*Case1*/
/*
const massCarlos1 = 92, heightCarlos1 = 1.72;
const massGabi1 = 78, heightGabi1 = 1.65;

console.log(
    'Carlos mass is ' + massCarlos1 + ' kg',
    'and height is ' + heightCarlos1 + ' m.'
)
console.log(
    'Gabi mass is ' + massGabi1 + ' kg',
    'and height is ' + heightGabi1 + ' m.'
)

carlosBMI1 = (massCarlos1) / (heightCarlos1 ** 2);
gabiBMI1 = (massGabi1) / (heightGabi1 * heightGabi1);

console.log('The BMI for Carlos is ' + carlosBMI1);
console.log('The BMI for Gabi is ' + gabiBMI1);

const carlosHigherBMI = gabiBMI1 < carlosBMI1
const gabiHigherBMI = gabiBMI1 > carlosBMI1

/*Case2*/
/*
const massCarlos2 = 100, heightCarlos2 = 1.92;
const massGabi2 = 67, heightGabi2 = 1.71;

console.log(
    'Carlos mass is ' + massCarlos2 + ' kg',
    'and height is ' + heightCarlos2 + ' m.'
)
console.log(
    'Gabi mass is ' + massGabi2 + ' kg',
    'and height is ' + heightGabi2 + ' m.'
)

carlosBMI2 = (massCarlos2) / (heightCarlos2 ** 2);
gabiBMI2 = (massGabi2) / (heightGabi2 * heightGabi2);

console.log('The BMI for Carlos is ' + carlosBMI2);
console.log('The BMI for Gabi is ' + gabiBMI2);

const carlosHigherBMI2 = gabiBMI2 > carlosBMI2
const gabiHigherBMI2 = gabiBMI2 < carlosBMI2
console.log(carlosHigherBMI, carlosHigherBMI2);

console.log(gabiHigherBMI, gabiHigherBMI2);*/
/*
//String and Template Literals

const firstName = 'Carlos';
const job = 'Coder';
const birthYear = 1992;
const year = 2022

const carlos = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + "!";
console.log(carlos);

const carlosNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(carlosNew);
console.log(`Just a regular string...`);

console.log(`String
mutiple
lines`);


//statements if/else

const age = 15;

// windows + . -> emojis
if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
}

const birthYear = 1993;

let century
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)

//code Challenge 2
const massCarlos1 = 92, heightCarlos1 = 1.72;
const massGabi1 = 78, heightGabi1 = 1.65;

console.log(
    'Carlos mass is ' + massCarlos1 + ' kg',
    'and height is ' + heightCarlos1 + ' m.'
)
console.log(
    'Gabi mass is ' + massGabi1 + ' kg',
    'and height is ' + heightGabi1 + ' m.'
)

carlosBMI1 = (massCarlos1) / (heightCarlos1 ** 2);
carlosBMI = carlosBMI1.toFixed(1);

gabiBMI1 = (massGabi1) / (heightGabi1 * heightGabi1);
gabiBMI = gabiBMI1.toFixed(1);

if (carlosBMI >= gabiBMI) {
    console.log(`Carlos's BMI (${carlosBMI}) is higher than Gabi's (${gabiBMI})`);
} else {
    console.log(`Gabi's BMI (${gabiBMI}) is higher than Carlos's (${carlosBMI})`);
}

// type conversion and coercion
//conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
inputYear2 = Number(inputYear);
console.log(inputYear2 + 18);

console.log(Number('Carlos'));
console.log(typeof NaN);

console.log(String(23), 23);

//coercion
console.log('I am ' + 28 + ' years old');
console.log('I am ' + '28' + ' years old');

console.log('28' - '10' - 3);
console.log('28' / '10');

//Truthy and Falsy values

// 5 Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Carlos'));
console.log(Boolean({}));
console.log(Boolean(''));

*/
//equality operators == vs ===
// strict equallity -> does not do type coercion, with === means it returns the exactly number
//loose equality -> does type coercion
/*
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)')

if (age == 18) console.log('You just became an adult :D (loose)')
*/
/*
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {//'23'== 23, now is 23 === 23
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('Cool! 7 is also an amazing number!');
} else {
    console.log('Number is neither');
}


if (favourite !== 23) {//'23'== 23, now is 23 === 23
    console.log('Why not 23?');
}*/