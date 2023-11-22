// 공통적으로 사용하는 함수를 common.js로 묶어서 사용함

import { v4 as uuidv4 } from "uuid";
const today = new Date();

// Id
export function Id() {
  const id4 = uuidv4();
  return id4;
}

// Date
export function RandomDate(old) {
  const thisYear = today.getFullYear(); // 올해 2023
  // const year = Math.floor(Math.random() * 41) + 1970; // 1970 - 2010
  const year = thisYear - old; // 출생 : 1954 - 2013, 주문 : 2023
  const month = Math.floor(Math.random() * 12) + 1; // 1 - 12
  const day = Math.floor(Math.random() * 28) + 1; // 1 - 28
  const monthFix = numTotwoDigit(month);
  const dayFix = numTotwoDigit(day);
  const date = `${year}-${monthFix}-${dayFix}`;
  return date;
}

// Time
export function Time() {
  const hour = Math.floor(Math.random() * 12) + 1; // 1 - 12 hour
  const min = Math.floor(Math.random() * 60); // 0 - 59 min
  const sec = Math.floor(Math.random() * 60); // 0 - 59 sec
  const hourFix = numTotwoDigit(hour);
  const minFix = numTotwoDigit(min);
  const secFix = numTotwoDigit(sec);
  const time = `${hourFix}:${minFix}:${secFix}`;
  return time;
}

// Zero Padding : 2digit
function numTotwoDigit(num) {
  if (num < 10) {
    let twoDigit = num.toString().padStart(2, 0);
    return twoDigit;
  }
  return num;
}

// Address
export function Address() {
  const cityArray = ["서울", "대구", "부산", "광주", "대전", "인천", "경주", "제주"];
  const townArray = ["강서구", "강남구", "강동구", "강북구", "중구", "서구", "남구", "북구"];
  const streetArray = ["길", "로"];
  const city = cityArray[Math.floor(Math.random() * cityArray.length)];
  const town = townArray[Math.floor(Math.random() * townArray.length)];
  const street = streetArray[Math.floor(Math.random() * streetArray.length)];
  const streetNumber = Math.floor(Math.random() * 100); // 1 - 99
  const buildingNumber = Math.floor(Math.random() * 100); // 1 - 99
  const address = `${city} ${town} ${streetNumber + street} ${buildingNumber}`;
  return address;
}