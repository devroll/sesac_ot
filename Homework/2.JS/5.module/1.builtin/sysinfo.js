const os = require('os');

const hostname = os.hostname();
console.log(hostname);

const cpus = os.cpus();
console.log(cpus);

console.log('---------------------------');
console.log(cpus[0]);
console.log(cpus[0].model);

console.log('---------------------------');
for(let i = 0 ; i < cpus.length ; i++){
    console.log(cpus[i].model);
}

console.log('---------------------------');
console.log('---------------------------');
for(const cpu of cpus){
    console.log(cpu.model);
}

console.log('---------------------------');
const totalMemory = os.totalmem();
console.log("전체메모리:", totalMemory); // Byte -> KB -> KB -> GB
console.log("전체메모리:", totalMemory / 1024 / 1024 / 1024 , 'GB');
console.log("전체메모리:", Math.floor(totalMemory / 1024 / 1024 / 1024) , 'GB');
console.log("전체메모리:", Math.round(totalMemory / 1024 / 1024 / 1024) , 'GB');

// 여기에서 소수점을 제저하는 방법은? 힌트 Math함수에 있음
