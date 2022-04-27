// console.log("First");
// console.log("Second");
// setInterval(()=> {
//     console.log("Tik");
// }, 1000);
// console.log("Third");

let count = 0;
const limitedTime = setInterval(()=>{
    count++;
    console.log(count);
    if (count > 5){
        clearInterval(limitedTime);
    }
}, 1000)