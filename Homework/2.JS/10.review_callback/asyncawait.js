// function myFunc(resolve, reject) {
// }

// function externalAPI() {
//     return new Promise(myFunc);
// }


function externalAPI() {
    return new Promise((resolve, reject) => {
        // setTimeout(처리할함수,2000)
        setTimeout(() => {
            const result = Math.random() >= 0.8; // bool값 
            if (result) {
                resolve("결과 왔음") // true
            } else {
                reject("응답 없음"); // false
            }
        }, 1000); // 실제 네트워크 응답을 시물레이션 하기 위한 값 (1초)
    });
}

async function waitForResult(retryCount = 0) {
    try {
        result = await externalAPI(); // 비동기
        console.log("결과도착:", result);
        return result;
    } catch (error) {
        console.error(`에러발생: ${error}, 재시도 ${retryCount}`);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(waitForResult(retryCount + 1));
            }, 1000);  // 재시도할때까지 대기하는 시간 (1초)
        })
    }
}

// result = waitForResult();
// console.log("최종 비동기 결과: ", result);
waitForResult()
    .then((finalResult) => {
        console.log("최종 비동기 결과는?? ", finalResult);
    });

console.log("실행 완료");