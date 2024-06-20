let arr=[1,5,7,9,11];
// let newarr=[];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**3)
// }

// console.log(newarr);

// this is how you can create new array with the use of forloop;
 
let newarr =arr.map((e,index,array)=>{
    return e**2
})

console.log(newarr);

// this is how you create new array with the help of map reverse
// e stands for element

// you can also change index and array inside of map reverse!

const greaterthanseven= (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterthanseven));

// this filter function is used when you want something specific from your elements under the array!


// reduce method;

let arr2=[1,2,3,4,5,6];

const fuck=(a,b)=>{
    return a*b;
}

console.log(arr2.reduce(fuck));

// array.from("jay");

// console.log("jay");

// this is how you convert string to js

