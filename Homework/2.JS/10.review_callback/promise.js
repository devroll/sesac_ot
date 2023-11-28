const myPromise = new Promise((resolve, reject) => {
    // 비동기 작업이 여기에서 수행
    // 완료되면 resolve() 호출
    // 실패하면 reject() 호출

});

// Promise 호출/사용 
myPromise
    .then((result) => {
        //성공했을때
    })
    .catch((error) => {
        // 실패했을때
    });

function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand >= 0.5) {
                resolve("작업완료");
            } else {
                reject("작업실패");
            }
        }, 1000);
    });
}

asyncTask()
    .then((result) => {
        console.log(':', result);
    })
    .catch((err) => {
        console.log('실패:', error)
    })