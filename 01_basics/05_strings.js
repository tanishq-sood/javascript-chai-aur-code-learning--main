const name = "tanishq"
const repoCount =50

console.log(name +" " +repoCount + "Value"); // this is the old way and not recommended 

// better and mordern way of using thsi si actually using backticks and inserting directly in placeholders 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 // another way of declaring string is :

 const gameName = new String("tanishq-ts")  // string declared using new and now it has a key value for each character at a string 
 console.log(gameName[0]);// this is the accessing of string at 0 place and do not confuse this with an array 

 //isme bhi bhot saare methods hote hai 

//  console.log(gameName.__proto__); // ye main hai isse hum saare functions access karte hai
//  console.log(gameName.length); // but while using hum sirf " . " lagake koi bhi function access akr sakte hai
//  console.log(gameName.toUpperCase()); // function ke baad () lagana is madate 

//  console.log(gameName.substring(0,5));// only primt tanis
const anotherString = gameName.slice(2,4)
console.log(anotherString); // 
 

const newStringOne = "    tanishq    "

console.log(newStringOne.trim() );// remove aage peeche ke spaces // also functions like trim start and trim end
console.log(newStringOne);

const url  = "https://tanishq.com/tanishq%20sood"

console.log(url.replace("%20", "-"));// to replace a given thing
console.log(url.includes("tanishq"));// to check if something is present // returns boolean

console.log(gameName.split("-"));// isse split karke array mai store hoga 








 
 


 