console.log("hello i am conditional tutorial!")


let age=2;
// let grace= 2;

// These are javascript assignment operators!
// age=grace
// age+=grace
// age-=grace
// age/=grace
 
// these are operators in javascript 
// console.log(age)
// addition
// console.log(age-grace)
// subtration
// console.log(age/grace)
// devision
// console.log(age*grace)
// multiplication
// console.log(age**grace)
// exponentitation operator what it will do is the first number will remain a normal number but the second number will convert into the power of first number
// console.log(age%grace)
// modulus what it will do it it will devide both the numbers and the remainder will be the modulus.

if((age==18)) {
    console.log("you can drive");
}

else if((age==0)){
    console.log("are you kidding")
}

else if((age!=1)){
    console.log("are you fucking out of your mind")
}

else{
    console.log("you cannot drive");
}

// ^
// |
// this is the if else if else ladder that will execude only one code it will check first one if it is false then it will move on to the second code if second one is also false then it will move on to the third!

let aage=44;

if(aage<45){
    console.log("you cannot drive")
}

else{
    console.log("you can drive")
}

/*
I am a multiline comment!
*/

a=9;
b=8;
c= a>b ?(a-b):(b-a);
console.log(c);

/*
// translates to 
// if(a>b) {
    let c =(a-b)
}
// else {
    let c=(b-a)
}
*/