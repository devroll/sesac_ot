const Person = require('./Person');

class Student extends Person {
    constructor(name, age, gender, ID, subject)  {
        super(name, age, gender);
        this.ID = ID;
        this.subject = subject;
    }
    study(){
        console.log(`${this.name} 학생이 ${this.subject}을 공부하고 있습니다.`)
    }   
}

module.exports = Student;