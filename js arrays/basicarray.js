const myarr = [1, 2, 3, 4, 5, 6];

console.log(myarr);

let newarr = myarr.map((e) => {
  return e** 4;
});

console.log(newarr);


// this is how you create new array!

let jay=[22,23,24,25,21];

let newjay= jay.map((e)=>{
    return e**2
}
)
// filter for numbers divisible by 6 from a given array!

const divisibleby7= (e)=>{
  if(e%7==0){
    return true
  }
  return false
}

console.log(jay.filter(divisibleby7));


console.log(newjay);

jay.forEach((value,index,Array)=>{
console.log(value,index,Array);
})

myarr.forEach((value,index,Array)=>{
  console.log(value,index,Array);
})

 

