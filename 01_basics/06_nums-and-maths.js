const score = 400
console.log(score);

const balance = new Number(100) // explicit typecasting 
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); // 100.00 = output  

// +++++++++++++++++++++  MATHS  +++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-10)); // -ive value ko +ive mai convert kar deta but NOT vice versa 
console.log(`The rounder of number is :-> ` + Math.round(4.2)); // regualar round of hota hai isme 
console.log(Math.ceil(4.2)); // upper end ko consier karta during round orr 4.2--> 5
console.log(Math.floor(4.9)); // consider lower end 4.9 -->4

console.log(Math.min(1,4,15));
console.log(Math.max(1,4,15));


console.log(Math.random()); // default 0 - 1 range 
console.log(((Math.random()*10)+1)); // to extend range 

// a random ke sath floor bhi use kar sake // min max etc bhi 
// use kar sakte and unse range bhi bana sakte hai 






