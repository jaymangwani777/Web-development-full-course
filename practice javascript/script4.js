// write the program that checks given number is even or odd

let number = 5;

let output = number % 2 === 0 ? "number is even" : "number is odd";

console.log(output);

// logic
// how do we know that number is even or odd first of all odd numbers are only be divisible by only themseleves and second of all odd numbers are not divisible by 2 if the number is divisible by 2 then the number is even!

// write a prograam that classifies a student's grade based on their score.

let score = 68;

if (score >= 90) {
  console.log("student grade should be A");
} else if (score >= 80) {
  console.log("student grade should be B");
} else if (score >= 70) {
  console.log("student grade should be C");
} else if (score >= 60) {
  console.log("student grade should be D");
} else {
  console.log("Disqualified");
}

// write a programm to check the given year is leap year or not

// let daysinyear=366

// let year = daysinyear>365 ? "the year is leap": "the year is not leap"

// console.log(year);

// this is my approach but it is not correct we have to direct find out by looking at a year we don't know by looking at the year that how many years will that year have!

// write a program to check leap year

let year = 1600;

if (year % 4 === 0 || year % 400 === 0) {
  console.log("the year is leap");
} else {
  console.log("the year is not leap");
}

// this approach is correct beacouse the year which is divisible by 4 is a leap year however there are some additional rules to that the years which are divisible by 100 are called century years for example:-1200,1300,1700,1800 for these years should be leap they should be divisible by 400

// statement breakdown we used logical or it means one of the condition should be true then the output will be leap year if both conditions are false then the output will be no leap year!

// Write the program to find out number is positive negative or zero

let numberr = -5;

if(numberr>0){
    console.log("the number is positive")
}

else if(numberr<0){
    console.log("the number is negative")
}

else{
    console.log(
        "the number is zero"
    )
}

// ternary opertor

// let outputt =
//   numberr > 0
//     ? "the number is positive"
//     : numberr < 0
//     ? "the number is negative"
//     : "the number is zero";

//     console.log(outputt);


// Write a program that classifies a person into different age groups.

let age= 61;

if ((age>0)&&(age<=12)){
console.log("the person is child")
}

else if((age>12)&&(age<=25)){
    console.log("the person is young")
}
else if((age>25)&&(age<=60)){
    console.log("the person is adult")
}
else {
    console.log("the person is old")
}



