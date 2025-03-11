let score = 33
 console.log(typeof score);

 /*
ab we will study about conversions
 
 */

let isValidNumber = Number(score) // isse conversion hota hai in number and 'N' capital hota hai. 


let isValidString = String(score)
console.log(typeof isValidString);

/*               operations       */

console.log(2+2);
console.log(2-4);
console.log(2**3);
console.log(2%3);


// phir we know assignment op , incremnt op (perfix ++x , and postfx x++)

// conversion and operation regarding striungs and numbers are confusing 

console.log("1"+ 2);
console.log(1+"2");
console.log("1"+ 2+ 2);
console.log(1 + 2 + "2");

/* ye sab exams ke liye ok hai presedence padhna but irl aisa code is 
 not considered  a good readable code and should be avoided and () should be used instead 
 of such things for performing operation */


 /*    comparisons 
      
     ab regular wale toh we know like > , < , <= , >= , == , != need not to write 
 
 */

     console.log("2"> 1);
     console.log("02"> 1);


     console.log(null >0);
     console.log(null == 0 );
     console.log(null >= 0); // NOTE  : the reason is that an equality check == and comparison > < = etc works diffrently 

     // comparison converty null to a number , treating it as 0 , i.e, null>=0 is true and null>0 is false

     // null jais hi undefined ke sath bhi hota hai 

     // strict check (===) : also checks the datatype along with the variable / element 

     console.log("2"===2);// false bcz === (isme conversion nahi karta) ; if == true 