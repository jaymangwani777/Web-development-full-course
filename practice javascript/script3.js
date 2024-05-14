console.log("this is the practice of javascript that i am doing");

// use the logical operators to find wheather the age of the person lies between 10 and 20

// let age = 17;

// if (age > 10 || age < 20) {
//   console.log("the age lies between the age of 10 and 20");
// } 
// else console.log("the age does not lies between 10 and 20");


// write a javascript program to find wheather a number is divisible by eiether 2 or 3?

let number=18

if(number % 3 === 0|| number %2===0){
  console.log("the number is divisible")
}

else{
  console.log("the number is not divisible")
}

// Print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator

let age= 20;

let output= age > 18 ? "you can drive" : "you cannot drive"

console.log(output);

// Demonstrate the use of switch case statements in Javascript 

const grade = "A";

switch(grade) {
  case "A": console.log("aswsome");
  break;
  case "B": console.log("amazing")
  break;
  case "C": console.log("damn good")
  break;
  case "D": console.log("god dam right")
}