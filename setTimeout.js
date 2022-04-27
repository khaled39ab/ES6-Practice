function asynchronous(){
    console.log("I am setTimeout, the asynchronous");
}
console.log("First Line");
console.log("Second Line");
setTimeout(asynchronous);
setTimeout(function (){
    console.log("I am setTimeout 2");
});
setTimeout(() => {
    console.log("I am setTimeout with 5 sec delay");
},5000)
console.log("Third Line");
console.log("Fourth Line");