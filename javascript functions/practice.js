let studentmarks={
    jaymarks:"50",
    piyushmarks:"70",
    princemarks:"40"
}

for (let studentname in studentmarks) {
    console.log(studentname+":"+ studentmarks[studentname]); 
}
 

// for (let studentname in studentmarks) {
//      console.log(studentname+":"+ studentmarks[studentname]);
// }

// in this studentname holds the name of current property there are properties which are stored under a object eg: jaymarks,piyushmarks
// to acces the value which is stored under studentname it we have to use bracket notaion for example studentmarks[studentname] 


// console.log(studentmarks);
// studentmarks.jaymarks = "70"
// console.log(studentmarks);


// this is the dot notation in objects when we have to print single key and value or change somthing in object we use dot notation;



// write a function to write mean of 5 numbers:

function findMean(a = 0, b = 0, c = 0, d = 0, e = 0, ) {
    // Calculate the sum of the parameters
    // the function findmean is only designed to take only 5 parameters
    let sum = a + b + c + d + e;
    // Calculate the mean
    let mean = sum / 5;
    // Return the result
    return mean;
}

// Example usage
console.log(findMean(4, 8, 15, 16, 23, 27,));  // This will print 13.2
console.log(findMean(1, 2, 3, 4, 5));          // This will print 3
console.log(findMean(4,5,6));                  // This will print 0 (using default values)

