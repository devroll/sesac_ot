class Person {
    // constructor는 필요할때만 넣는다
    constructor(name, age, gender)  {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet(){
        console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이야`)
    }    
    walk() {
        console.log(`${this.name}가 걷고 있습니다.`)
    }    
    eat() {
        console.log(`${this.name}가 식사 중입니다.`)
    }
}

module.exports = Person;