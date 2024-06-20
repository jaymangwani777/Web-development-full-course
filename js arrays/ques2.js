let numbers2= [];

function addnumbers()

// this function handles the process of prompting the user for input and adding the input to the array! 

{
    let numbers;
    
    do {
         numbers2= parseInt(prompt("Enter a number (0 to stop)"))

         if(numbers !==0 ){
            numbers2.push(numbers);
         }

         else{
            alert("Please enter a valid number")
         }

        
    } while (numbers!==0);
}

console.log("array contents", numbers2)

addnumbers()



// if(!isNaN(numbers) ){
//    numbers2.push(numbers);
// }

// else{
//    alert("Please enter a valid number")
// }