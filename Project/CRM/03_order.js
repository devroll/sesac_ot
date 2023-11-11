// 3. 주문 데이터 생성 (10000개)
// user 파일과 store 파일의 id를 기반으로 주문 정보 생성
// order.csv
// "OrderId,OrderAt,   StoreId,UserId

import { Id, RandomDate, Time } from "./00_common.js";
import { userArray, UserCsvWrite } from "./01_user.js";
import { storeArray, StoreCsvWrite } from "./02_store.js";
import { createObjectCsvWriter } from "csv-writer";

// orderCsvWriter 설정 : 경로, 헤더
const orderCsvWriter = createObjectCsvWriter({
    path: './csv/order.csv',
    header: [
        { id: 'orderId', title: 'ORDER_ID' },
        { id: 'orderAt', title: 'ORDER_AT' },
        { id: 'storeId', title: 'STORE_ID' },
        { id: 'id', title: 'ID' }
    ]
})

// orderArray 만들기 : 1000개
const orderArray = [];
for (let i = 0; i < 1000; i++) {
    const date = RandomDate(0); // RandomData(0) : 0은 올해
    const time = Time();
    const orderAt = `${date} ${time}`;
    orderArray.push({
        orderId: Id(),
        orderAt: orderAt,
        storeId: storeArray[Math.floor(Math.random() * storeArray.length)].storeId,
        id: userArray[Math.floor(Math.random() * userArray.length)].id
    })
}
export { orderArray };

// order.csv 작성
function OrderCsvWrite() {
    orderCsvWriter.writeRecords(orderArray)
        .then(() => {
            console.log('order.csv 쓰기 완료');
        });
}

// CSV 작성하기
// UserCsvWrite();
// StoreCsvWrite();
// OrderCsvWrite();