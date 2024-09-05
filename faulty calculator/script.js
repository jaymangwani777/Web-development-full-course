// let a=2
// let b=2
// let operation="subtract"


// if(operation=="add"){
    
//     console.log(a-b);
// }
// else if(operation=="multiply"){
//     console.log(a+b);
// }
// else if(operation=="subtract"){
//     if(b!==0){
//         console.log(a/b)
//     }
//     else(
//         console.log("the number is not devisible")
//     )
// }
// else if(operation=="devide"){
//     console.log(a*b);
// }
// else{
//     console.log("error404");
// }



// In JavaScript, Math.random() is a method that returns a pseudo-random floating-point number in the range from 0 (inclusive) to 1 (exclusive). This means the value returned will be greater than or equal to 0 but less than 1.

// To get a random number within a specific range, you can scale and shift the value. For example, to get a random number between 0 and 10, you would multiply the result by 10:
let random =Math.random() ;
console.log(random)
let a = prompt("enter first number")
let c = prompt("enter operation")
let b = prompt("enter second number")
 

let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if (random>0.5){
    // perform the correct calculation
    console.log(`The result is ${a} ${c} ${b}`);

   alert(`the result is ${eval(`${a} ${c} ${b}` ) }`);

}

else{
    c=obj[c];
    alert(`the result is ${eval(`${a} ${c} ${b}` ) }`);
}


 