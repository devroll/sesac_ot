function performAsynctask(callback){
    setTimeout(() => {
        const randomNumber = Math.random(); // 0 ~ 1까지 랜덤수를 뽑는다.
        if(randomNumber >= 0.5) {  // 0.5보다 클때
            callback(null, '작업이 완료되었습니다.')
        } else { // 0.5보다 작을때 
            callback('작업 실패', null)
        }
    }, 2000);
}

// 메인 함수 : 작업 호출
function myJob(){
    performAsynctask((error, result) => {
        if(error){
            console.error('실패:', error);
        }else {
            console.log('성공:', result);
        }
    });
}

// 10번 실행한다.
for(let i = 0 ; i < 10 ; i++){
    myJob();
}