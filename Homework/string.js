// 3. String 클래스의 다양한 함수들 활용해보기
// toUpperCase(), toLowerCase(), search(), replace() 등 포함해서 10여개의 함수들 사용해보기

const text = ' static, method, always, rounds, down ';
// 문자의 길이
console.log(text.length); 
// 1. 대문자 
console.log(text.toUpperCase()); 
// 2. 소문자
console.log(text.toLowerCase()); 
// 3. 제시된 문자의 첫글자 위치
console.log(text.search(/static/)); 
console.log(text.search(/always/)); 
// 4. a를 b로 바꾸기 
console.log(text.replace('always', 'today')); 
// 5. 특정 문자열의 맨 처음 위치
console.log("앞에서부터 ", text.indexOf('c'));  // 6
// 6. 특정 문자열의 맨 뒤에 위치
console.log("뒤에서부터 ", text.lastIndexOf('a'));  // 20
// 7. 문자열 양쪽 끝의 공백 제거 
console.log(text.trim()); 
// 8. 기준에 따라 분할하여 배열로 반환
console.log(text.split(',')); 
// 9. 주어진 범위의 문자열 출력  
console.log(text.substring(1, 5));  // stat = 0을 제외한 1번째에서 4미만, 즉 3번째까지  
// 10 . substring과 비슷하지만 뒤에서부터 음수범위 허용
console.log(text.slice(1, 5));   
console.log(text.slice(-4));  // 음수 허용