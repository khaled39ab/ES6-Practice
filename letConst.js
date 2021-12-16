//const means constant. 
const name = "Rani";
console.log(name);
// student = "Rocky"; //Error for Assignment to constant variable
// console.log(student);

const numbers = [12, 15, 16, 18, 19];
numbers[2] =14; //can change elements
numbers.push (20); 
numbers.pop();
// numbers = [1, 2, 3, 4]; //can't for Assignment to constant variable
console.log(numbers);

const students = {name: "Rani", Id: 10, class: "ten"};
students.name = "Lamiya";
students.Id = 13;
console.log(students);

//let - variable value can change by declare let
let players = "Amir";
players = "Sunny"
console.log(players);

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;  
    // console.log(i); //can call inside scope
}
// console.log(i); // can't call a variable from outside of scope by declare let but var can that
console.log(sum);