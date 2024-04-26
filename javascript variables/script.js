console.log("hey this is tutorial 2 of javascript")

// var a=5;
// var b=6;
// a= a+1
// b= b+2
// var c=8;
// var d=23;
// var e=4;
var c="Jay"
// variable is basically a container which stores datatypes and value inside double coat is a string
// double coma means double coat and inside double coat value is a string 
// string means collection of characters 


// console.log(a+b)

// console.log(typeof a ,typeof b ,typeof c)
// this typeof code we write because we want to know datatype of value which is stored under a variable
// console.log(d+b)

// console.log(d+b+e)

// var _a="shubam";   
// that is correct

// var 55a="jay"
// that is incorrect 
// and why they are correct and incorrect just because it is a rule var cannot be begin with variables
// for example variables are numbers

// jay and Jay both are different variables because starting of names is differennt first one is starting with small letter and the second one is starting with a capital letter variables are case sensitive!
// var b=9;
// var a=11;

// console.log(a+b)

// const a1= 6;
// a1= a1 +1; not allowed because a1 is constant
// a1 we cannot change a1 value because it is under const which means it is constant 
// if we write like this var=a1=5 then we can change the value by for example :a1+6 ,a1-6, etc
// we cannot change a constant value

 


var a=5;
let b=6;
a= a+1
b= b+2

{
let a=72
a=a+10
// var  a=72;
console.log(a)
// var is a globall scope variable thats why it is printing the same dosen't matter we put it under the block or outside the block
// let is a block scope variable thats why it is printing only what is under block outside the block dosen't matter for it! 
}

{
    let a=67
    a=a+76
    console.log(a)
}
// we can print let variale multiple times by the same name
console.log(a)

{
    let b=45
    b=b+45
    console.log(b)
}

 {
console .log(b)
 }
 let x="jay bhai"
 let y=8;
 let z=78;
 let r=7.8;
 let p=undefined;
 let q=null;
 const s= true;

  

 console.log(x,y,z,r,p,q,s)
 console.log(typeof x,typeof y,typeof z,typeof r,typeof p,typeof q, typeof s)

//  there are two types of datatypes one is premitive and the other is objects
//  these are premitive data types.
// null datatype called as null because makers of javascript defined null as object

let o = {
    "name" : "Jay",  
    "job role" : "CEO",
    "salary"  :"100crores", 
    "is_handsome": true
}

// these are objects we write objects write this 


console.log(o);
o.salary = "500crores"; 
console.log(o);
// o.name = "jayesh"
// console.log(o);
 