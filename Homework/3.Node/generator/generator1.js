// 이름 생성을 위한 후보군
const names = ['John', 'Jane', 'Michael', 'Emily', 'William', 'Olivia'];
const genders = ['Male', 'Female'];
// const Addresses = [ '스타벅스 홍대8호점,스타벅스,부산 강남구 31로 50', 
//                     '투썸 강서9호점,투썸,부산 강남구 25로 57',
//                     '커피빈 잠실2호점,커피빈,광주 강남구 74길 74' ];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia'];

function generateName() {
    return names[Math.floor(Math.random() * names.length)]
}
console.log('이름 : ', generateName());

function generateBirthDate() {
    const year = Math.floor(Math.random() * 2000);  // 0 ~ 1999 
    const Month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    // 포멧팅 : 630을 0630으로 
    return `${year}-${Month}-${day}`
}
console.log('생일 : ', generateBirthDate());

function generateGender() {
    // Math.random() : 0 ~ 1 사이값
    // return genders[Math.floor(Math.random() * genders.length)]    
    // if(Math.random() < 0.5){
    //     return 'Male';
    // } else {
    //     return 'Female';
    // }
    // 3항 연산자
    return Math.random() < 0.5 ? 'Male' : "Female";
}
console.log('성별 : ', generateGender());

function generateAddress() {
    // return Addresses[Math.floor(Math.random() * Addresses.length)]    
    const city = cities[Math.floor(Math.random() * cities.length)];
    const street = Math.floor(Math.random() * 100) + 1;

    return `${street} ${city}`
}
console.log('주소 : ', generateAddress())