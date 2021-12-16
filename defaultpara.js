// function sum (num1, num2){
//     return num1 + num2;
// }

// const total = sum (15,20); //output : 35
// const total = sum (15); //output : NaN

function add (num3, num4 = 20){ // this is called default parameter
    return num3 + num4;
}
const total = add (15);
console.log(total);