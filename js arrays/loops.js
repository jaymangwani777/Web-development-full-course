let a=[1,93,5,6,88];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }

// this is classicall for loop in array;



a.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})

// it is the foreach loop in arry 
// what it will do is it will return first value and its index then the whole array
// for example arr=[1,2,3] and we are using for each loop
// then it will give first value which is 1 then its index which is 0 then the whole array [1,2,3]
// then it will give second value which is 2 then its index which is 1 then the whole array [1,2,3]
// then it will give third value which is 3 then its index which is 2 then the whole array [1,2,3]


let obj={
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
    }
}

// for (const iterator of a) {
//     console.log(iterator);
// }
