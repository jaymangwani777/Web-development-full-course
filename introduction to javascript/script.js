alert("hello world");

// that gives us a alert box

console.log("code is running..");
console.log("code is also running..");
console.log("code is running like a waow..");

var a = prompt("Enter your number");
// it is giving us prompt where we can enter our number and select ok or cancel
var b = prompt("Enter your alternate number");
// it is giving us prompt where we can enter our number and select ok or cancel
var istrue = confirm(
  " Are you sure you want to leave this page and blast your computer "
);
// it will give you a confirm box like this ask you a question you have to say yes or no!

// When the confirm function is called, it displays a dialog with "OK" and "Cancel" buttons. If the user clicks "OK", confirm returns true; if the user clicks "Cancel", it returns false.

if(istrue) {
  console.log("Computer is blasting ");
} else {
  console.log("computer is not blasting");
}

// this is a if else statement basically what it will do is it is used for giving us outputs when the condition is true if we click on leaving the page it will give us output of computer is blasting else means if we are clicking we don't want to leave this page then it will give us the output of computer is not blasting

document.title = "Hey i am good";
// you can change title by using Js like this

document.body.style.backgroundColor = "red";
// you can change color or add styling by using javascript like this


 