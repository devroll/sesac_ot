
// 모던(modern) 언어들에서는 try,catch (try.except)
function divide(a, b) {
    try{
        if(b === 0) { 
            throw "0으로 나눌 수 없습니다" 
        }
        res = a / b;        
    } catch(e) {
        console.log("오류발생:", e);
    }
    return res;
}

console.log(divide(10,2));
console.log(divide(10,0));

// try{
//     const result = myvariable * 2 ;
// } catch(error) {
//     console.log("오류가 발생했습니다.");
// }

// try.catch 쓰기 좋지 않은 유형 : SyntaxError, logic 에러 
// - 내가 핸들링할 수 있는 것들은 내가 찾아내는게 좋다.
// - 올바른 유형 : 나의 손을 벗어난 형태이 오류 : 네트워크오류/파일시스템오류 등등
// - 입출력 관련된 오류