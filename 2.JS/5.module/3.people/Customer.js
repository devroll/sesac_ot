const Person = require('./Person');

class Customer extends Person {
    constructor(name, age, gender, customerID, orders){
        super(name, age, gender);
        this.customerID = customerID;
        this.orders = orders;
    }
    placeOrder(){
        console.log(`${this.name} 고객이 주문(${this.orders})을 완료했습니다.`)
    }
}

module.exports = Customer;