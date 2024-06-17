console.log("this is the toutorial on arrays");

 
let arr= [1,2,3,4,5,7]
arr[0] = 677;
console.log(arr)
console.log(arr.length);
console.log(arr[0])
console.log(arr[3])
console.log(arr[5])


// why we use array
// because we can store multiple values under one name!

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
// console.log(a1)

// this will concat the aray it will return the new array it does not change existing array!
// it will join both array!


let d =[8,5,4];
console.log(d);
// delete d[0];
// it will delete the element based on index!


// let j=[5,6,7];
// j.sort();

// let numbers=[4,5,6,7];
// console.log(numbers.splice(1,3));
// // it will took out the numbers as given index it will pop out numbers or anything from the array on the base of index given!

// let number2=[1,2,3,4,5];
// console.log(number.slice(1,3));


// let f=[5,6,7];
// console.log(f.sort());
// // it will modify oringal array


// f.sort();
// (3) [5, 6, 7]0: 51: 62: 7length: 3[[Prototype]]: Array(0)
// let numbers=[1,2,3,4,5];
// undefined
// numbers.splice(2);
// (3) [3, 4, 5]
// numbers.splice(1,3);
// [2]
// numbers
// [1]
// let elephant=[2,3,4,5,6,7,8,9]
// undefined
// elephant.splice(0,2)
// (2) [2, 3]
// elephant;
// (6) [4, 5, 6, 7, 8, 9]
// elephant.slice(4,6)
// (2) [8, 9]
// elephant;
// (6) [4, 5, 6, 7, 8, 9]
// let n=[1,2,3,4,5,6,7,8,9];
// undefined
// n.splice(1,3);
// (3) [2, 3, 4]
// n
// (6) [1, 5, 6, 7, 8, 9]
// n.splice(1,3);
// (3) [5, 6, 7]
// n
// (3) [1, 8, 9]
// n.splice(0);
// (3) [1, 8, 9]
// n
// []
// let k=[1,2,3,4,5,6,7,8,9];
// undefined
// k.splice(0,3);
// (3) [1, 2, 3]
// k
// (6) [4, 5, 6, 7, 8, 9]
// n.splice(2,1,23,24);
// []
// n
// (2) [23, 24]
// const num=[1,2,3,4]
// undefined
// num.slice(2);
// (2) [3, 4]

// num=[1,2,3,4,5,6,7,8,9];
// console.log(num.slice(4))

// it will slice out from index zero to index 3 then it will return us the value of remaining array numbers that's slice