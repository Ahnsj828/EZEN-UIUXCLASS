import { Stack } from "./Stack .mjs";
// 스텍은 연결리스트의 타입을 가져오기 위해

//  터미널에     node test_stack.mjs

let stack = new Stack();

console.log("=== 첫 번째 출력 ===");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data); // 4
console.log(stack.pop().data); // 3
console.log(stack.pop().data); // 2
console.log(stack.pop().data); // 1

console.log("=== 두 번째 출력 ===");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data); // 4
stack.pop();
console.log(stack.peek().data); // 3
console.log(`isEmpty : ${stack.isEmpty()}`); // isEmpty : false
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty : ${stack.isEmpty()}`); // isEmpty : true
console.log(stack.pop()); // null / 없는 상태에서 자루라했다
