console.log("har\"".length);


// " har/" " it is a string that defines special characters and .length is used to measure length of the string
//  / this backslash is used as a escape character in javascript it allows double coat inside and double coat;


// explore the includes,starts with & endswith fucntions of a string

let string="jay";

console.log(string.startsWith("ay"));

// The startsWith method requires a substring argument to function properly. If you call it without any arguments, it will return false because there is no substring to check for.

console.log(string.endsWith("j"))

// write a program to convert a given string to lowercase

let string2="JAY"
console.log(string2.toLowerCase())
console.log(string2.toUpperCase())

// Extract the amount of this string 

//      "please give rs 1000"

let string3="please give rs 1000"

console.log(string3.length)
console.log(string3.slice(12,19))

// try to change 4th character of the given string

console.log(string3.replace("s","j")
);