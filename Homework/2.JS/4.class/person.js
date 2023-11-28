// class Person {
//     constructor(name, age, gender)  {
//         this.name = name;
//         this.age = age;
//         this.gender =gender;
//     }
//     greet(){
//         console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이야`)
//     }    
//     walk() {
//         console.log(`${this.name}가 걷고 있습니다.`)
//     }    
//     eat() {
//         console.log(`${this.name}가 식사 중입니다.`)
//     }
// }

// const Person1 = new Person("철수", 25, "남성");
// Person1.greet();
// Person1.walk();
// Person1.eat();

// --------------------------------------------------

// class Employee extends Person {
//     constructor(name, age, gender, jobTitle, salary){
//         super(name, age, gender);
//         this.jobTitle = jobTitle;
//         this.salary = salary;
//     }
//     displayInfo(){
//         console.log(`직원 ${this.name}의 직위는 ${this.jobTitle}이며, 급여는 ${this.salary}원 입니다`)
//     }
//     work() {
//         console.log(`$this.name}이 업무 중입니다`)
//     }
//     greet(){
//         console.log(`안녕하세요, 나는 ${this.name}이고, 직위는 ${this.jobTitle}입니다.`)
//     }
// }

// Employee 생성
// const employee1 = new Employee("영회", 30, "여성", "매니저", 50000);
// employee1.greet();
// employee1.displayInfo();
// employee1.walk();
// employee1.work();
// --------------------------------------------------

class Manager extends Employee {
    constructor(name, age, gender)  {
        super(name, age, gender);
        this.name = name;
        this.age = age;
        this.gender =gender;
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
    assignTask
}

// --------------------------------------------------
// class Student extends Person {
//     constructor(name, age, gender)  {
//         super(name, age, gender);
//         this.name = name;
//         this.age = age;
//         this.gender =gender;
//     }
//     greet(){
//         console.log(`안녕, 나는 ${this.name}이고, ${this.age}살이야`)
//     }    
//     walk() {
//         console.log(`${this.name}가 걷고 있습니다.`)
//     }    
//     eat() {
//         console.log(`${this.name}가 식사 중입니다.`)
//     }
// }
// --------------------------------------------------
class Customer extends Person {
    constructor(name, age, gender)  {
        super(name, age, gender);
       
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
// --------------------------------------------------
// 함수에서 다형성 활용
// function introduce(people){
//     for(const person of people) {
//         person.greet();
//     }
    
//     // for(let i = 0 ; i < people.length ; i++){
//     //     people[i].greet();
//     // }
// }

// const manager1 = new Manager("영민", "35", "남성", "팀장", 60000, "개발팀");
// manager1.assignTasks(); 

// const student1 = new Student("지연", "20", "여성", "매니저", );
// const customer1 = new Customer("태식", "30", "남성", "소비자", );
// const employee2 = new Employee("영회", 30, "여성", "매니저", 50000);
// const student2 = new Employee("철수", 30, "여성", "매니저", 50000);
// const people = [manager1, student1, customer1, employee2, student2];

// console.log('----');
// introduce(people);

// 안녕, 나는 영민이고, 직위는 팀장입니다.
// 안녕, 나는 지연이고, 20살이야.
// 안녕, 나는 태식이고, 30살이야.
// 안녕, 나는 영희이고, 직위는 OO입니다.
// 안녕, 나는 철수이고, 컴퓨터 공학살이야.