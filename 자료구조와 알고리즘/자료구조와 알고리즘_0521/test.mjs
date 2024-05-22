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

console.log("=== insertAt() 다섯번 호출===");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();
