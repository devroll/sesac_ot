// 2. 상점 데이터 생성 (100개)
// 상동
// store.csv
// "Id,Name,Type,Address

import { v4 as uuidv4 } from "uuid";
import { Id, Address } from "./00_common.js";
import { createObjectCsvWriter } from "csv-writer";
// import fs from "fs";

// StoreName
function StoreNameAndType() {
    const storeTypeArray = ["스타벅스", "투썸", "커피빈", "엔제리너스", "탐앤탐스", "이디야", "빽다방"];
    const storeType = storeTypeArray[Math.floor(Math.random() * storeTypeArray.length)];
    const areaArray = ["홍대", "송파", "강서", "신촌", "잠실"];
    const area = areaArray[Math.floor(Math.random() * areaArray.length)];
    const number = Math.floor(Math.random() * 20);
    const storeName = `${storeType} ${area}${number}호점`;
    return [storeName, storeType];
}

// storeCsvWriter 설정 : 경로, 헤더
const storeCsvWriter = createObjectCsvWriter({
    path: './csv/store.csv',
    header: [
        { id: 'storeId', title: 'STORE_ID' },
        { id: 'storeName', title: 'STORE_NAME' },
        { id: 'storeType', title: 'STORE_TYPE' },
        { id: 'storeAddress', title: 'STORE_ADDRESS' }
    ]
})

// storeArray 만들기 : 100개
const storeArray = [];
for (let i = 0; i < 100; i++) {
    const storeNameAndType = StoreNameAndType();
    const storeName = storeNameAndType[0];
    const storeType = storeNameAndType[1];
    storeArray.push({
        storeId: Id(), // import
        storeName: storeName,
        storeType: storeType,
        storeAddress: Address() // import
    })
}
export { storeArray };

// store.csv 작성
export function StoreCsvWrite() {
    storeCsvWriter.writeRecords(storeArray)
        .then(() => {
            console.log('store.csv 쓰기 완료');
        });
}

// StoreCsvWrite();