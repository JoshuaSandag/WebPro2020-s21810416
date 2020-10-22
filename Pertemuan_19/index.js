//JavaScript Class dan OOP

//class & Constructor
class Orang 
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
displayFullName()
{
    console.log(`${this.firstName} ${this.lastName}`);
}

//Inheritance
class Student extends Person 
{
    constructor(firstName, lastName, NIM, age){
        super(firstName, lastName);
        this.NIM = NIM;
        this.age = age;
    }
//static member
    static sayHello(){
        console.log (`hello world`);
    }
    displayNIM(){
        console.log(`your NIM ${this.NIM}`);
    }
//Setter & Getter
    set studentScore(score)
    {
        this.score = score;
    }
    get studentScore()
    {
        return this.score;
    }
}

const josh = new Student("joshua", "sandag", "127343", "20")
josh.displayFullName();
josh.displayNIM();
Student.sayHello();

josh.studentScore = 90;
console.log(josh.studentScore);



