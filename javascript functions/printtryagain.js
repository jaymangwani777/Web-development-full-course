let correctnumber=7024868447
let usernumber;

// usernumber= prompt("enteryournumber")
//      if(usernumber==correctnumber){
//          alert("Your number is correct")
//      }
//      else(
//          alert("try again")
//      )

// without loop it will it is running only one time if the input is not correct it gives alert and stops
// with while loop it is running again and again until it gets the correct output;

do {
    usernumber= prompt("enteryournumber")
    if(usernumber==correctnumber){
        alert("Your number is correct")
    }
    else(
        alert("try again")
    )
} while (usernumber!=correctnumber);

// this loop runs till usernumber is not equal to correctnumber it is gonna give alert try again try again until the number is correct;
// when number is correct it stops

