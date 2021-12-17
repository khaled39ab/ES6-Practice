const student = { id: "012", name: "Amir", parentName:"Jamal", grade: "Ten", section: "A", address: "Lal Bug", 
phone: "01712000000", };

// const phone = student.phone;
// const id = student.id;

const { section } = student;
const { grade, phone, id, dress } = student;

// console.log(grade, phone, id, section, dress);

const players = ["Musfiq", "Sakib", "Masrafi","Mahmudullah", "Tamim"];

const [kipper, bowler] = players;
// console.log(kipper,bowler);

// const [first, ...restPlayers] = players;
// const [...restPlayers] = players;
const [first, second, ...restPlayers] = players;

// console.log(restPlayers);

const teacher = { 
    name : "Kabir", phone:"01711223344",
    subject:{
        bangla: "poems",
        english: "story"
    }
}

const {english} = teacher.subject;
console.log(english);


