// let random= Math.random() *10
// console.log(random);

// let box = document.getElementsByClassName("box");
// console.log(box)

// Array.from(box) will make a array out of box!
// let boxes = document.querySelector(".container")

let boxes = document.querySelector(".container").children;

console.log(boxes);

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  
//   what it will do is it will generate random number from 0 to 255 and math.ciel will return a integer which is a whole number which is not in decimal like 121.2 instead it will give us 122 
  return `rgb(${val1},${val2},${val3})`;
}
// this is the fuction which will generate random color!

Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});

// we made an array of boxes
// and inside array we are calling the function getRandomColor();


let hexcolor= `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`

// first we added math.random it will generate random Color than to string(16) it converted random number into hexcolorcode format then in hexcolorformat we only have 6 digits then we used slice to slice out numbers first we used 2 it will slice out index 0 and 1 than we wrote 8 that means how many digits we want so we wrote 8 Means till 8 than we wrote padEnd function it first we wrote 6 and then 0 that means maximum 6 codes we want if code is less than 6 then add 0 to code! than we added hash in the begning it will make an perfect hexcolor code!

console.log(hexcolor);
