const age = [20, 24, 21, 23];
const age2 = [15, 19, 17];
const age3 = [36,25,30,33];
const allAges = age.concat(age2).concat(age3).concat([40]);

//same output with spread operator
const allAges2 = [...age, ...age2, ...age3, 40]
console.log(allAges2);

const a = 45;
const b = 54;
const c = 65;
const max = Math.max (a,b,c);

const d = [69, 58, 39, 48];
const max2 = Math.max(...d);
console.log(max2);