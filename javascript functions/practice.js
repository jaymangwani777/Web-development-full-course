let studentmarks={
    jaymarks:"50",
    piyushmarks:"70",
    princemarks:"40"
}

for (let studentname in studentmarks) {
    console.log(studentname+":"+ studentmarks[studentname]);
     
}
 

// for (let studentname in studentmarks) {
//      console.log(studentname+":"+ studentmarks[studentname]);
// }

// in this studentname holds the name of current property there are properties which are stored under a object eg: jaymarks,piyushmarks
// to acces the value which is stored under studentname it we have to use bracket notaion for example studentmarks[studentname] 


// console.log(studentmarks);
// studentmarks.jaymarks = "70"
// console.log(studentmarks);


// this is the dot notation in objects when we have to print single key and value or change somthing in object we use dot notation;




