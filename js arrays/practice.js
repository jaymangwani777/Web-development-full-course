// console.log("this is practice set");

// create an array of numbers and take input from the user to add numbers to this array


// let numbers=[1,2,3,4,5];
// let userinput= numbers.push(5)

// console.log(numbers);

// this was my approach here is the corrected approach!


// from this
// let numbers = [1, 2, 3, 4, 5];

// // Prompt the user for a number and convert the input to a number
// let userInput = prompt("Enter a number to add to the array:");

// let numberToAdd = Number(userInput);
// // which was first an string "Enter a number to add to the array:"
// // converting user input to an number

// // Add the user input to the array
// numbers.push(numberToAdd);

// console.log(numbers);
// to that!


// keep adding numbers to the array  until zero is added to the array!

// from this 
// let numbers2= [];

// function addnumbers()

// this function handles the process of prompting the user for input and adding the input to the array! 

// {
//     let numbers2;
    
//     do {
//          numbers2= parseInt(prompt("Enter a number (0 to stop)"))

//          if(!isNaN(numbers2) ){
//             numbers2.push(numbers2);
//          }

//          else{
//             alert("Please enter a valid number")
//          }

        
//     } while (number !==0);
// }

// console.log("array contents" ,numbers2)
// to that!!


// filter for numbers divisible by 10 from a given array!

let arr=[10,20,25,30,35,40];

const divisibleby10 = (e)=>{
   if(e%10==0){
      return true
   }
   return false
}

console.log(arr.filter(divisibleby10));

// creat an array of square of given numbers

let newarr= arr.map((e)=>{
return e**2
})

console.log(newarr);