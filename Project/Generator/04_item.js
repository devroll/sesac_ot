// 4. 상품 데이터 생성 (20개)
// 상동 (상품은 그렇게 많을 필요는 없음)
// item.csv
// "Id,Name,Type,UnitPrice

import { Id } from "./00_common.js";
import { createObjectCsvWriter } from "csv-writer";
// import fs from "fs";

// itemNameAndType
function ItemNameAndType() {
    // Type
    const itemTypeArray = ["Coffee", "Cake", "Juice"];
    const itemType = itemTypeArray[Math.floor(Math.random() * itemTypeArray.length)];
    const itemTypeIndex = itemTypeArray.indexOf(itemType);
    // Menu
    const coffeeMenuArray = ["Americano", "Espresso", "Hazelnut"];
    const cakeMenuArray = ["Strawberry", "Vanilla", "Red Velvet"];
    const juiceMenuArray = ["Watermelon", "Tomato", "Apple"];
    const coffeeMenu = coffeeMenuArray[Math.floor(Math.random() * coffeeMenuArray.length)];
    const cakeMenu = cakeMenuArray[Math.floor(Math.random() * cakeMenuArray.length)];
    const juiceMenu = juiceMenuArray[Math.floor(Math.random() * juiceMenuArray.length)];
    const itemMenuArray = [coffeeMenu, cakeMenu, juiceMenu];
    // Name(+Type)
    const itemName = `${itemMenuArray[itemTypeIndex]} ${itemType}`;
    return [itemName, itemType];
}

// itemPrice : 2500원 - 7000원
function ItemPrice() {
    const itemPrice = Math.floor(Math.random() * 10) * 500 + 2500;
    return itemPrice;
}

// itemCsvWriter 설정 : 경로, 헤더
const itemCsvWriter = createObjectCsvWriter({
    path: './csv/item.csv',
    header: [
        { id: 'itemId', title: 'ITEM_ID' },
        { id: 'itemName', title: 'ITEM_NAME' },
        { id: 'itemType', title: 'ITEM_TYPE' },
        { id: 'itemPrice', title: 'ITEM_PRICE' }
    ]
})

// itemArray 만들기 : 20개
const itemArray = [];
for (let i = 0; i < 20; i++) {
    const itemNameAndType = ItemNameAndType();
    const itemName = itemNameAndType[0];
    const itemType = itemNameAndType[1];
    itemArray.push({
        itemId: Id(), // import
        itemName: itemName,
        itemType: itemType,
        itemPrice: ItemPrice()
    })
}
export { itemArray };

// item.csv 작성
export function ItemCsvWrite() {
    itemCsvWriter.writeRecords(itemArray)
        .then(() => {
            console.log('item.csv 쓰기 완료');
        });
}

// ItemCsvWrite();