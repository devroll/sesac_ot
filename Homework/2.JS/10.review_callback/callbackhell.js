function asyncFunc1(response, callback) {
    setTimeout(() => {
        console.log('함수1 완료');
        callback('결과1');
    }, 1000);
}

function asyncFunc2(response, callback) {
    setTimeout(() => {
        console.log('함수2 완료');
        callback('결과2');
    }, 1000);
}

asyncFunc1(null, function(response1) {
    asyncFunc2(response1, function(response2) {
        asyncFunc1()
    })
})