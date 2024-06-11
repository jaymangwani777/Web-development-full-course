console.log("this is the toutorial on arrays");

 
let arr= [1,2,3,4,5,7]
arr[0] = 677;
console.log(arr)
console.log(arr.length);
console.log(arr[0])
console.log(arr[3])
console.log(arr[5])


// Methods of array!

let x=[1,4,5]

console.log(x.toString());
// this will convert array to an string 
// console.log(x);
 
console.log(x.join(" and "))

// console.log(x.pop())

console.log(x.pop());

// this will pop out the last value of an array that means it will return us the last value!

console.log(x.push("jay"));
// this will add one more array to and end of an array as well as it will update its length;

console.log(arr.shift());

// this will remove the first value of an array that means it will return us the first value

console.log(arr.unshift("fuck off"));

// this will add one more array at the begning of an array as well as it will update its length;

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[9,8,7]

console.log(a1.concat(a2,a3));

// this will concat the aray it will return the new array it does not change existing array!
// it will join both array!
