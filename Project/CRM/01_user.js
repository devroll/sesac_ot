// 1. 사용자 데이터 생성 (1000명)
// 모든 필드를 정해진 틀 내에서 랜덤 생성
// user.csv
// "Id,Name,Gender,Age,Birthday,Address

import { Id, RandomDate, Address } from "./00_common.js";
import { createObjectCsvWriter } from "csv-writer";
// import fs from "fs";

// Name
function Name() {
    const firstNameArray = ["김", "강", "조", "장", "최", "이", "윤"];
    const secondNameArray = ["준영", "승현", "하은", "은지", "서준", "예진", "예지", "서준"];
    const firName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)];
    const secondName = secondNameArray[Math.floor(Math.random() * secondNameArray.length)];
    const name = firName + secondName;
    return name;
}

// Age(60, 10)
// 나이범위 : 10살 - 69살
function Age(range, offset) {
    const age = Math.floor(Math.random() * range) + offset; // (0)10 - (59)69
    return age;
}

// Gender
function Gender() {
    const genderArray = ["Male", "Female"];
    const gender = genderArray[Math.floor(Math.random() * genderArray.length)];
    // console.log(`${gender}`);
    return gender;
}

// userCsvWriter 설정 - 경로, 헤더
const userCsvWriter = createObjectCsvWriter({
    path: './csv/user.csv',
    header: [
        { id: 'id', title: 'ID' },
        { id: 'name', title: 'NAME' },
        { id: 'gender', title: 'GENDER' },
        { id: 'age', title: 'AGE' },
        { id: 'birthday', title: 'BIRTHDAY' },
        { id: 'address', title: 'ADDRESS' }
    ]
})

// userArray 만들기 : 1000명
const userArray = [];
for (let i = 0; i < 1000; i++) {
    const age = Age(60, 10); // import
    const birthday = RandomDate(age);
    userArray.push({
        id: Id(), // import
        name: Name(),
        gender: Gender(),
        age: age,
        birthday: birthday,
        address: Address() // import
    })
}
export { userArray };

// user.csv 작성
export function UserCsvWrite() {
    userCsvWriter.writeRecords(userArray)
        .then(() => {
            console.log('user.csv 쓰기 완료');
        });
}

// UserCsvWrite();