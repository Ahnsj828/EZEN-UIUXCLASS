// 값을 출력하는 곳
import { Node } from "./LinkedList.js"; // 모듈

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
