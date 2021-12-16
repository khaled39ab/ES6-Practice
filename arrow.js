// function doubleIt (num){
//     return num * 2;
// };
// const result = doubleIt(5);

// const doubleIt = function myNum(num){
//     return num * 2;
// }
// const result = doubleIt(5);

//same output by arrow function
const doubleIt = num => num * 2; //single parameter
const add = (x,y) => x + y;  //multiple parameter
const give5 = () => 5;  //no parameter
// const result = give5();

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doMath (9 , 5);
console.log(result);