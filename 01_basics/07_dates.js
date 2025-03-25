// dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());// time also 
console.log(typeof myDate);//object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());// ()--> isse method run hota hai

myCreatedDate= new Date("2023-01-12")  // diffrent date format 
console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);// abhi ki date in milli seconds with respect to Jan 1 1970 

// ye ek bhot bada number hota hai 
// but we cant directly read thats why comparison kar lete hai from belpw function 

console.log(Date.now());// we can compare from below 
console.log(myCreatedDate.getTime());// can devide by 1000 for seconds and 
// combined with floor to avoid the decimals values


// various functions like
let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getDate());














