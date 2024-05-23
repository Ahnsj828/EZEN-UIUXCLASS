import { LinkedList } from "./LinkedList.mjs";
// LinkedList가져온이유 => 기본적으로 연결리스트 기능을 담고있다 => 그래서 타입형식으로 사용할거다

// node 생성 목적으로 class를 사용한다
// class 생성 목적은 객체를 생성하기 위해
class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  // 1. stack 에서 데이터 삽입 기능 구현
  push(data) {
    this.list.insertAt(0, data);
    // 0번째 인덱스에 데이터를 넣어라
  }

  // 2. stack 에서 데이터 제거 기능 구현
  pop() {
    try {
      // try() => 외부에서 어떤 데이터 수신해올때, 정상적으로 문제 없이 실행이 되었을때에 대한 피드백
      return this.list.deleteAt();
    } catch (e) {
      // catch() => 외부에서 어떤 데이터 수신해올때, 정상적으로 오지않고 실행이 되지 않을때, 에러가 발생했었을 때에 대한 피드백
      // e =>  error
      return null;
    }
  }
  // 3. stack 에서 데이터 참조 기능 구현
  peek() {
    return this.list.getNodeAt(0);
    // getNodeAt(0) => 0번째 노드 정보 값을 가져오게하는거
  }
  // 4. stack에 데이터가 비어있는지 여부 체크 기능 구현
  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };
