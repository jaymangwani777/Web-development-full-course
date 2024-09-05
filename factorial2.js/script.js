let a=8;

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    // this will create a new array from 0 to -1
    // we slice out zero with slice because we dont want zero at the start
    let c= arr.slice(1,).reduce((a,b)=> a*b
    )
    return c
 
    
}

console.log(factorial(a))

// factorial using for loop
function facfor(number){
    let fac=1
     for (let index = 1; index <= number; index++) {
         fac= fac*index
     }
     return fac
}

console.log(facfor(a))