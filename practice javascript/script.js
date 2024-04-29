// use logical operators to find whether the age of the person lies between 10 and 20

let age=15

if(age>=10 && age<=20){
    console.log("the age is between 10 and 20")
}

else{
    console.log(
        "the age is not between 10 and 20"
    )
}
// write a javascript program to find whether the number is divisible by two or three?

// let number=18   

// if(number/3 && number/2){
//     console.log(
//         "number is divisible"
//     )
// }

// else{
//     console.log( 
//         "number is not divisible"
//     )
// } 
// the approach was close but the write answer is down there

let number = 18;

if (number % 3 === 0 || number % 2 === 0) {
    console.log("number is divisible");
} else {
    console.log("number is not divisible");
}
