// 5. 주문 상품 데이터 생성 (50000개)
// order id 와 item 을 기반으로, 하나의 주문안에 포함된 상품들
// (예, 한명이 한번의 주문으로 "커피" 와 "케이크" 를 함께 주문한 경우)
// orderitem.csv
// "Id,OrderId,ItemId

import { Id } from "./00_common.js";
import { orderArray } from "./03_order.js";
import { itemArray } from "./04_item.js";
import { createObjectCsvWriter } from "csv-writer";
const pairReadyArray = [];
const itemIdArrayRoot = [];
itemIdArrayRoot.push(itemArray.map(el => el.itemId));
const itemIdArray = [].concat(...itemIdArrayRoot); // 배열[배열] 꺼내기 

// orderItemCsvWriter 설정 : 경로, 헤더
const orderItemCsvWriter = createObjectCsvWriter({
    path: './csv/orderItem.csv',
    header: [
        { id: 'orderItemId', title: 'ORDERITEM_ID' },
        { id: 'orderId', title: 'ORDER_ID' },
        { id: 'itemId', title: 'ITEM_ID' },
    ]
})

// itemIdArray 데이터 20개 짜리 배열
// orderItemArray 만들기 01 : pairReadyArray
orderArray.forEach(order => {
    const eachItemIdArray = [...itemIdArray]; // 스프레드연산자 - 배열 복사
    const pairReady = { orderId: order.orderId, itemIdArray: eachItemIdArray }
    pairReadyArray.push(pairReady);
});

// orderItemArray 만들기 02 : 50000개 생성
// 중복 필터링. 예를 들어서...
// orderId: 1234, 아메리카노
// orderId: 1234, 케이크
// orderId: 1234, 쥬스
// ....
// orderId: 1234, 케이크 → 필터링 
const orderItemArray = [];
for (let i = 0; i < 1000; i++) {
    // pairReady From pairReadyArray  
    const pairReadyNum = Math.floor(Math.random() * pairReadyArray.length);
    const pairReady = pairReadyArray[pairReadyNum];
    if (pairReady.itemIdArray.length == 0) {
        console.log("length = 0");
        // 해당 orderId 삭제 
        pairReadyArray.splice(pairReadyNum, 1);
        console.log("pairReadyArray.length : ", pairReadyArray.length);
        i--;
        continue;
    }
    const itemNum = Math.floor(Math.random() * pairReady.itemIdArray.length);
    // 변수 할당
    const orderId = pairReady.orderId;
    const itemId = pairReady.itemIdArray[itemNum];
    // itemNum 중복 제거
    pairReadyArray[pairReadyNum].itemIdArray.splice(itemNum, 1);
    // 배열에 추가 
    orderItemArray.push({
        orderItemId: Id(),
        orderId: orderId,
        itemId: itemId
    })
}

// orderItem.csv 작성
function OrderItemCsvWrite() {
    orderItemCsvWriter.writeRecords(orderItemArray)
        .then(() => {
            console.log('orderItem.csv 쓰기 완료');
        });
}

// CSV 작성하기
OrderItemCsvWrite();