let number=[1,2,3,4,5,6];
let userinput;

do {
    userinput=prompt("Enter a number 0 to stop")
    userinput=Number.parseInt(userinput)
    number.push(userinput);
} 
while (userinput!==0);
console.log(userinput);

