function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('함수1 완료');
            resolve('결과1');
        }, 1000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('함수2 완료');
            resolve('결과2');
        }, 1000);
    });
}

async function executeOperations() {
    try {
        const response1 = await asyncFunc1();           // 끝날때까지 기다림 
        const response2 = await asyncFunc2(response1);  // 끝날때까지 기다림 
        const response3 = await asyncFunc1(response2);  // 끝날때까지 기다림 
        const response4 = await asyncFunc2(response3);  // 끝날때까지 기다림 

        console.log('최종 결과: ', response4);
    } catch (error) {
        console.log('에러 발생', error);
    }
}

executeOperations();