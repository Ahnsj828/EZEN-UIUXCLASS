// 값을 출력하는 곳
import { Node, LinkedList } from "./LinkedList.mjs"; // 모듈

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
// 독립적인 노드가 생겼다

// node끼리 연결
node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();

console.log("=== insertAt() 다섯 번 호출 ===");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll(); // 출력해야되니까
// [0, 1, 2, 3, 4]

console.log("=== clear() 호출 ===");
list.clear();
list.printAll(); // []

console.log("=== insertLast() 세번 호출 ===");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll(); // [0, 1, 2]

console.log("=== deleteAt() 호출 ===");
list.deleteAt(0);
list.printAll(); // [1, 2]
list.deleteAt(1);

console.log("=== deleteLast() 호출 ===");
list.insertLast(5); // 값이 하나밖에 없어서 마지막에 오는거 하나를 더 추가 / 뒤에서부터 아이템을 넣는거
list.deleteLast(); // 삭제
list.deleteLast(); // 삭제
list.printAll(); // []

console.log("=== getNodeAt() 호출 ===");
list.insertLast(1); // 값이 하나밖에 없어서 마지막에 오는거 하나를 더 추가 / 뒤에서부터 아이템을 넣는거
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

let secondNode = list.getNodeAt(2);
list.printAll(secondNode);
// Node {
// 	date: 3,
// 	next: Node {data: 4, next: Node { data: 5, next: null}}
// }
