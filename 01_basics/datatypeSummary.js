//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



/*     stack(primitive -- int string etc )-- isme hume copy milti hai   , 
heap (non -primitive - array , obj , function )-- isme hume original milta hai  */ 

// exaple of copy i.e stack 

let myName = "tanishq"
let hisName =myName
console.log(hisName);// ab tak hisName== myName

hisName = "yash"

console.log(myName);// original mai change nahi hua 

console.log(hisName);// sirf uski copy mai hi change hua


// now example of non primitive 

let userOne = {
    email: "tanishqsood@google.com",
     upi: "user@ybl",

}

let userTwo = userOne

userTwo.email = " yash@google.com"

console.log(userOne.email);// direct change in original 
console.log(userTwo.email);// bcz same reference to heap memory by diifrent variable i.e, userOne and userTwo 





