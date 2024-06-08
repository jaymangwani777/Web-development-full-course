// console.log("hey jay you are nice")
// console.log("hey jay you are good looking")
// console.log("hey jay you have nice body")
// console.log("hey jay you are built different")

function changename(name) {
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are good looking")
    console.log("hey " + name + " you have nice body")
    console.log("hey " + name + " you are built different")
}

// this is the function we made

// in the place of name we have concadinated the string that's how we concadinate the string ! string is which is inside the double cote it is mandatory to concadinate the string for making a function or writing a function as we can say!

changename("disha")

changename("jay")

 


// why we are using funcition?

// because we don't want to be repatative with our code!

// suppose we wrote 1000 lines of code and we have to change one or two things from those codes but apart from these one or two things the rest of code will be the same how we can do it ?

// the answer is we have to make a function after we made the function we can make changes in that function then the 1000 lines of code will change automatically!

function sum(a,b,c=15) 
{
    //  console.log(a+b);
return a+b+c
}

result1= sum(3, 5)
result2= sum(3, 8)
result3= sum(3, 7)
result4= sum(3, 3, 5)

console.log("the sum of these numbers is ",result1)
console.log("the sum of these numbers is ",result2)
console.log("the sum of these numbers is ",result3)
console.log("the sum of these numbers is ",result4)

// in this code what we are doing is we are defining result 
// we have to add return because it will define result value


// function sum(x,y,q) {
//     return x+y+q
// }

// result=sum(10,45,10)
// console.log("the sum of these numbers is",result)


// Arrow function
    // |  

const func1= (x)=> {
    console.log("i am an arrow function",x)
}

func1(2);
func1(66);
func1(77);