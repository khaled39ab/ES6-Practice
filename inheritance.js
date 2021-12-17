class Parent{
    constructor (){
        this.fatherName = "Rihan"
    }
}
class Child extends Parent{
    constructor (name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child ("Manik");
const baby2 = new Child ("Monika");

console.log(baby.getFullName());
console.log(baby2.getFullName());
