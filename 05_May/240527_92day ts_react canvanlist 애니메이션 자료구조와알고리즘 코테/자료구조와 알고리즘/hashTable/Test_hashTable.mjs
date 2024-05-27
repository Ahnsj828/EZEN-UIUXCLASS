import { HashTable } from "./HashTable.mjs";

let HashTable = new HashTable();

HashTable.set(1, "이윤재");
HashTable.set(4, "최진철");
HashTable.set(20, "홍영보");
HashTable.set(6, "유상철");
// ...

console.log(`1: ${hashTable.get(1)}`);
HashTable.remove(1);
console.log(`1: ${HashTable.get(1)}`);
console.log(`21: ${HashTable.get(21)}`); // 21: "박지성"
