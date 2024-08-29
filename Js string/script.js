console.log("this is string tutorial")
let a= "jay";
// console.log(a)
// this will run the whole a

// now if we have to print each character of jay
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
// console.log(a[3])   

console.log(a.length);
// this will give the length of the array;

let real_name="Jay"
let friend= "piyush"

// console.log(
//     "his name is "+ real_name + " and his friend name is "+friend
// )
// This is how you insert variables 

// However  there is one more simple way to it to add template litrals ${}

// like this
    // |
console.log(`his name is ${real_name} and his friend name is ${friend} `)

let b="shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
// this is how you can convert a string in uppercase or lowercase!
// this b.touppercase()is a function
console.log(b.length)
// and a.length is a property!
console.log(b.slice(1,5))
console.log(b.slice(1,4))
// slice property extract string from original string for example it is 1,5 it begins with 1 stops at 4
// slice means it is removing the character you want from 0 to 5;

console.log(b.replace("shivam", "jay"))
// this is how replace a value inside the variable

console.log(b.concat(a, "Nikita", "person",))
// this is the easy way of concatinating of something

console.log("jay mangwani")

