// const Employee = require('./Employee');
const Manager = require('./Manager');
const Student = require('./Student');
const Customer = require('./Customer');
const Employee = require('./Employee');

// employee1.greet();
// student1.greet();
// student1.study();

const manager1 = new Manager("영민", "35", "남성", "팀장", 60000, "개발팀"); // (+ jobTitle, salary) + team
manager1.assignTasks(); 

const student1 = new Student("지연", "20", "여성", 2023001, "컴퓨터 공학");
student1.study(); 

const customer1 = new Customer("태식", "30", "남성", "C1001", ["감자", "오징어"]);
customer1.placeOrder();

const employee2 = new Employee("영희", 20, "여성", "매니저", "500");  // + jobTitle, salary
const student2 = new Student("철수", 30, "남성", 12345, "컴퓨터 공학"); // + ID, subject

console.log('-------------------------------------------')

// 함수에서 다형성 활용
function introduce(people){
    for(const person of people) {
        person.greet();
    }
    
    // for(let i = 0 ; i < people.length ; i++){
    //     people[i].greet();
    // }
}
const people = [manager1, student1, customer1, employee2, student2];
introduce(people);
