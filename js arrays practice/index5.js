
let a=6

function factorial(number){
    let arr= Array.from(Array(number+1).keys())
    // this will create a default array!
    // it will make an array from zero to -1
    console.log (arr.slice(1,))
    // slice out index before 1 that is zero and returned a new array!
    let c= arr.slice(1,).reduce((a,b)=>
        {
            return a*b

        })
        console.log(c);
        // then we stored factorial in c using reduce made an arrow function that will return us the value of a*b
        // first we made an array by let arr= Array.from(Array(number+1).keys())  than we made an new array by arr.slice(1,)
        // then we stored it under c to calculate the factorial of any number!
}

factorial(a);

 