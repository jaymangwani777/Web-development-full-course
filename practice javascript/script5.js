console.log("practice of javascript loops");

// 1. For Loop

// Question: Write a for loop that prints all the even numbers from 1 to 20.

let a = 1;

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// the numbers which are divisible by 2 are the only numbers that are even!

// 2. for in loop

// Question: Given an object, write a for...in loop to print all the keys and their corresponding values.

let object = {
  name: "jay",
  role: "AI developer",
  company: "manAI",
};

for (const key in object) {
  const element = object[key];
  console.log(key, element);
  // keys are just empty without elements,elements are values which are stored under keys that makes an object!
  // console.log(object)
}


// 3. for of loop

// Question: Write a for...of loop to iterate over an array and print each element.

const fruits =['apple', 'banana', 'blueberry' ,'kiwi']

for (const fruit of fruits) {
    console.log(fruit);
}

// 4. While loop

// Question: Write a while loop that prints numbers from 10 to 1 in descending order.

let b=10;
while (b>0) {
    console.log(b);
    b--;
}

// Question: Write a while loop that prints numbers from 10 to 1 in aascending order.

let w=0
while (w<10) {
  console.log(w);
  w++;
}

// 5. Do...while Loop
// Question: Write a do...while loop that prints numbers from 1 to 5.

let x=1

do {
  console.log(x);
  x++;
} while (x<=5);
